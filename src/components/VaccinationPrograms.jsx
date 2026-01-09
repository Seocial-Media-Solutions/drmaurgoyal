'use client';
import { motion } from 'framer-motion';

const VaccinationPrograms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Vaccination Programs
        </h1>
        <h2 className="text-xl text-green-600 mb-6">
          Protect Your Family, Protect Your Future
        </h2>

        <div className="bg-green-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            We offer comprehensive vaccination services to safeguard the health of your entire family — from newborns to adults. Vaccinations are one of the most effective and simple ways to protect against a wide range of diseases. Our Vaccination Center follows the latest national and international immunization guidelines, ensuring that all age groups receive the safest and most effective vaccines. Protect your health today for a healthier tomorrow with us.
          </p>
          <p className="text-gray-800 mt-4">
            All vaccines are administered by our expert pediatrician, ensuring the highest standard of care and comfort for your little ones.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Our Vaccination Services Include:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Newborn and Childhood Vaccinations (as per the National Immunization Schedule and IAP recommendations)</li>
            <li>Adolescent Vaccines (HPV, Tdap, Meningococcal vaccines, etc.)</li>
            <li>Adult Vaccines (Influenza, Hepatitis, Typhoid, Tetanus boosters, COVID-19, etc.)</li>
            <li>Travel Vaccinations (for international travel needs)</li>
            <li>Special Vaccinations for High-Risk Groups (pregnant women, elderly, people with chronic illnesses)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Why Get Vaccinated at Mayur Child Care Center?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Certified vaccines stored under strict quality conditions</li>
            <li>✅ Expert vaccination counseling and reminders</li>
            <li>✅ Safe, child-friendly environment</li>
            <li>✅ Emergency support available if needed</li>
            <li>✅ Vaccination records and certificates provided</li>
          </ul>
        </div>

        <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            Timely vaccinations are the safest way to build lifelong immunity for your family.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VaccinationPrograms;