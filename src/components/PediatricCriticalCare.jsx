'use client';
import { motion } from 'framer-motion';

const PediatricCriticalCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Advanced Pediatric Critical Care (PICU)
        </h1>
        <h2 className="text-xl text-blue-600 mb-6">
          Specialized Care for Seriously ill Children
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            When children face life-threatening illnesses or emergencies, they need more than just medical care — they need specialized pediatric critical care delivered with speed, precision, and heart.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Our PICU Specializes In:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Severe infections and sepsis</li>
            <li>Respiratory failure and ventilator support</li>
            <li>Acute asthma and severe pneumonia</li>
            <li>Seizures and neurological emergencies</li>
            <li>Post-surgical critical care</li>
            <li>Trauma and accident care</li>
            <li>Management of poisoning and metabolic crises</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Our PICU?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Dedicated pediatric intensivists available 24x7</li>
            <li>✅ Advanced monitoring and life-support technology</li>
            <li>✅ Child-friendly, emotionally supportive environment</li>
            <li>✅ Multidisciplinary team approach (specialists, nurses, therapists)</li>
            <li>✅ Family counseling and support during critical times</li>
          </ul>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            When every moment matters, our PICU team provides the highest level of specialized care for your critically ill child.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PediatricCriticalCare;