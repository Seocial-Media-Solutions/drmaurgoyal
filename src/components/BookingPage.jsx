'use client';

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig'; // Import Firestore instance
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import emailjs from 'emailjs-com';

const BookingSystem = () => {
  // State management
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [firestoreReady, setFirestoreReady] = useState(false);
  // Add these state variables for validation
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  

  // Check if we're on client side and set Firestore as ready
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirestoreReady(true);
    }
  }, []);

  // Hospital hours for Dr. Mayur Kumar Goyal
  const consultationHours = {
    0: { // Sunday
      start: '11:00',
      end: '13:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    1: { // Monday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    2: { // Tuesday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    3: { // Wednesday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    4: { // Thursday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    5: { // Friday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    },
    6: { // Saturday
      start1: '09:00',
      end1: '10:00',
      start2: '17:00',
      end2: '20:00',
      isClosed: false,
      location: "Mayur Child Care Center, B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer"
    }
  };

  // Fetch booked slots from Firestore
  const fetchBookedSlots = async (date) => {
    if (!firestoreReady || !db) {
      console.warn("Firestore not ready yet");
      return;
    }
    
    try {
      const q = query(collection(db, "bookings"), where("date", "==", date));
      const querySnapshot = await getDocs(q);
      const booked = [];
      querySnapshot.forEach((doc) => {
        booked.push(doc.data().timeSlot);
      });
      setBookedSlots(booked);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setErrorMessage("Failed to fetch booked slots. Please try again.");
    }
  };

  const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let current = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);

    while (current < end) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      const timeSlot = `${hours}:${minutes}`;
      slots.push(timeSlot);
      current.setMinutes(current.getMinutes() + 15);
    }
    
    return slots;
  };

  useEffect(() => {
    if (selectedDate && firestoreReady) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();
      const hours = consultationHours[dayOfWeek];
      
      if (hours.isClosed) {
        setAvailableSlots(['Closed']);
        return;
      }
      
      let slots = [];
      
      if (hours.start1 && hours.end1) {
        slots = [...slots, ...generateTimeSlots(hours.start1, hours.end1)];
      }
      if (hours.start2 && hours.end2) {
        slots = [...slots, ...generateTimeSlots(hours.start2, hours.end2)];
      }
      if (hours.start && hours.end) {
        slots = [...slots, ...generateTimeSlots(hours.start, hours.end)];
      }
      
      setAvailableSlots(slots);
      fetchBookedSlots(selectedDate);
    } else {
      setAvailableSlots([]);
    }
  }, [selectedDate, firestoreReady]);

  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 1);
    return minDate.toISOString().split('T')[0];
  };

  const getConsultationLocation = () => {
    if (!selectedDate) return '';
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return consultationHours[dayOfWeek].location;
  };

  const validateName = (name) => {
    if (!name.trim()) {
      setNameError('Full Name is required');
      return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Name should only contain letters and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      setPhoneError('Phone Number is required');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone Number should be 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError('Email Address is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid Email Address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!firestoreReady || !db) {
      setErrorMessage("Database connection is not ready. Please refresh the page and try again.");
      return;
    }
    
    if (!selectedDate || !selectedSlot || !fullName || !phoneNumber || !email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    
    if (selectedSlot === 'Closed') {
      setErrorMessage("The selected day is closed for consultations.");
      return;
    }
    
    if (bookedSlots.includes(selectedSlot)) {
      setErrorMessage("This time slot is already booked. Please select another slot.");
      return;
    }
    
    const isNameValid = validateName(fullName);
    const isPhoneValid = validatePhone(phoneNumber);
    const isEmailValid = validateEmail(email);
    
    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Add booking to Firestore
      await addDoc(collection(db, "bookings"), {
        date: selectedDate,
        timeSlot: selectedSlot,
        fullName,
        phoneNumber,
        email,
        location: getConsultationLocation(),
        createdAt: new Date().toISOString(),
        status: "pending"
      });

      // Send notification to doctor
      const doctorTemplateParams = {
        patient_name: fullName,
        patient_email: email,
        patient_phone: phoneNumber,
        date: new Date(selectedDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        time: formatTime(selectedSlot),
        location: getConsultationLocation(),
        booking_time: new Date().toLocaleString()
      };

      await emailjs.send(
        "service_f5ckvgd",
        "template_8pdo1bd",
        doctorTemplateParams,
        "_6LHHFd3x8j6eCvUj"
      );

      // Reset form
      setSelectedSlot('');
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setMessage("Booking successful! We will send a confirmation to your email shortly. Please arrive 15 minutes before your scheduled appointment time.");
      
      window.scrollTo(0, 0);
      fetchBookedSlots(selectedDate);
    } catch (error) {
      console.error("Error adding booking or sending email:", error);
      setErrorMessage("Booking was successful but we encountered an issue notifying the doctor. Please contact the clinic directly to verify your appointment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg text-teal-500">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-700">Book Your Consultation with Dr. Mayur Kumar Goyal</h1>
      
      {!firestoreReady && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          Connecting to booking system... Please wait.
        </div>
      )}
      
      {message && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 to-teal-100 border border-teal-200 text-teal-800 rounded-md">
        <h3 className="font-bold text-lg mb-2">Appointment Guidelines:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Please arrive 15 minutes before your scheduled appointment</li>
          <li>Bring any previous medical reports or immunization records</li>
          <li>The doctor will be notified immediately</li>
          <li>Rescheduling requires at least 24 hours notice</li>
          <li>Consultation duration is approximately 15-20 minutes</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='w-[50%] lg:w-[40%]'>
          <label className="block text-[red] font-bold mb-2">
           Please Select Date for Your Consultation*
          </label>
          <input
            type="date"
            min={getMinDate()}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        {selectedDate && availableSlots.length > 0 && (
          <div>
            <label className="block text-black font-bold mb-2">
              Select Time Slot*
            </label>
            {availableSlots[0] === 'Closed' ? (
              <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md">
                <p className="font-medium">Clinic Closed on this day.</p>
                <p className="text-sm mt-1">Please select another date for your appointment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    disabled={bookedSlots.includes(slot)}
                    className={`py-3 px-2 text-sm border rounded-md transition-all ${
                      selectedSlot === slot
                        ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-teal-500 font-semibold shadow-md'
                        : bookedSlots.includes(slot)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {formatTime(slot)}
                    {bookedSlots.includes(slot) && (
                      <span className="block text-xs font-medium mt-1">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {selectedSlot && selectedSlot !== 'Closed' && (
          <div className="space-y-4">
            <div className="p-4 bg-yellow-100 border border-yellow-200 text-yellow-800 rounded-md mb-4">
              <p className="font-medium">Your appointment details:</p>
              <p className="mt-1">
                <span className="font-bold">Hospital</span> appointment on{' '}
                <span className="font-bold">{new Date(selectedDate).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span> at{' '}
                <span className="font-bold">{formatTime(selectedSlot)}</span>
              </p>
              <p className="text-sm mt-1">{getConsultationLocation()}</p>
            </div>
            
            <div>
              <label className="block text-black font-bold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFullName(value);
                  validateName(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>
            
            <div>
              <label className="block text-black font-bold mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneNumber(value);
                  validatePhone(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. 9876543210"
                maxLength="10"
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
            
            <div>
              <label className="block text-black font-bold mb-2">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                placeholder='Please enter a valid email'
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !firestoreReady}
              className={`w-full py-3 px-4 rounded-md cursor-pointer transition-all ${
                isLoading || !firestoreReady
                  ? 'bg-gradient-to-r from-blue-200 to-teal-200 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-100 to-teal-100 hover:bg-gray-100 text-teal-500'
              } font-bold text-lg shadow-md`}
            >
              {isLoading ? 'Processing...' : 'Confirm Appointment'}
            </button>
          </div>
        )}
        
        <div className="p-4 bg-gradient-to-r from-blue-100 to-teal-100 bg-opacity-20 rounded-md text-teal-800">
          <h3 className="font-bold text-lg mb-2 text-teal-800">Mayur Child Care Center</h3>
          <p className="mb-1">B 15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer</p>
          <p className="mb-1">Phone: 8955966990</p>
        </div>
      </form>
    </div>
  );
};

export default BookingSystem;
