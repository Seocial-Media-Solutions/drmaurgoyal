'use client';
import { motion } from 'framer-motion';

const GeneralPediatricsOPD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          General Pediatrics OPD
        </h1>
        <h2 className="text-xl text-blue-600 mb-6">
          Caring for Your Child&apos;s Health, Every Step of the Way
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            At Mayur Childern Hospital, our General Pediatrics OPD is your first stop for expert, compassionate care for children from birth to 18 years. Led by our Medical Director, Dr. Mayur Goyal (MD, Pediatrics, Fellow Neonatology (IAP)), and his team are committed to keeping your child healthy, happy, and thriving.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            Whether it&apos;s a routine check-up, a minor illness, or developmental concerns, our OPD provides comprehensive evaluation, diagnosis, and treatment — all in a child-friendly environment where your little one feels safe and cared for.
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-4">We Offer:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Treatment for common childhood illnesses like fever, cough, cold, diarrhea, and infections</li>
            <li>Growth and development monitoring</li>
            <li>Nutrition and feeding advice</li>
            <li>Vaccination guidance and immunization</li>
            <li>Management of allergies, asthma, and chronic conditions</li>
            <li>Parental counselling and health education</li>
          </ul>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-800">
            Because early care leads to a healthier future, trust us to be your partner in your child&apos;s health journey.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GeneralPediatricsOPD;