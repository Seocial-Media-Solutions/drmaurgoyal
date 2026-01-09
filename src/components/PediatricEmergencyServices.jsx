'use client';
import { motion } from 'framer-motion';

const PediatricEmergencyServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-800 mb-4">
          24x7 Pediatric Emergency Services
        </h1>
        <h2 className="text-xl text-red-600 mb-6">
          Quick, Expert & Compassionate Care When It Matters Most
        </h2>

        <div className="bg-red-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            Children can fall sick or get injured unexpectedly — and in those critical moments, you need a team you can trust. At Mayur Child Care Center, our Pediatric Emergency Services are available 24 hours a day, 7 days a week, to provide immediate, specialized care for newborns, infants, children, and teenagers.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-red-800 mb-4">We Handle:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>High fever, dehydration, and severe infections</li>
            <li>Breathing difficulties and asthma attacks</li>
            <li>Seizures and unconsciousness</li>
            <li>Accidental injuries and burns</li>
            <li>Allergic reactions</li>
            <li>Newborn emergencies</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-red-800 mb-4">Why Choose Us?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Pediatrician available round-the-clock</li>
            <li>✅ Child-friendly emergency rooms</li>
            <li>✅ Advanced NICU & PICU support</li>
            <li>✅ Immediate access to pediatric specialists</li>
            <li>✅ Fast lab and imaging services</li>
          </ul>
        </div>

        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            When every second counts, trust our expert team to provide the urgent care your child needs.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PediatricEmergencyServices;