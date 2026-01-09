'use client';
import { motion } from 'framer-motion';

const NeonatologyServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-4">
          Neonatology Services
        </h1>
        <h2 className="text-xl text-teal-600 mb-6">
          Expert Care for Your Newborn’s Bright Future
        </h2>

        <div className="bg-teal-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            Our hospital is equipped with an advanced Neonatal Intensive Care Unit (NICU) designed to support premature babies, low birth weight infants, and critically ill newborns with cutting-edge technology and a compassionate touch.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">We Care For:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Premature and low birth weight babies</li>
            <li>Babies with breathing problems, infections, or birth complications</li>
            <li>Neonatal jaundice management</li>
            <li>Congenital (birth) anomalies</li>
            <li>Support after high-risk deliveries</li>
            <li>Specialized feeding support and growth monitoring</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">Why Parents Trust Us:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Level III NICU with advanced life-support systems</li>
            <li>✅ 24x7 Neonatologist-led team</li>
            <li>✅ Family-centered newborn care approach</li>
            <li>✅ Dedicated neonatal nursing team</li>
            <li>✅ Counseling and emotional support for families</li>
          </ul>
        </div>

        <div className="bg-teal-100 border-l-4 border-teal-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            With our expert neonatology services, your newborn receives the care, attention, and support they need to thrive from the very beginning.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NeonatologyServices;
