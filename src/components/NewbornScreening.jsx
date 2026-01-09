'use client';
import { motion } from 'framer-motion';

const NewbornScreening = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-4">
          Newborn Screening
        </h1>
        <h2 className="text-xl text-teal-600 mb-6">
          Early Detection, Healthier Tomorrows
        </h2>

        <div className="bg-teal-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            Our Newborn Screening Program is designed to detect hidden health conditions in newborns before they cause problems — giving your baby the best possible start in life.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">Our Newborn Screening Covers:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Metabolic disorders (like thyroid and enzyme deficiencies)</li>
            <li>Genetic disorders</li>
            <li>Blood disorders (such as sickle cell disease)</li>
            <li>Hormonal problems</li>
            <li>Hearing screening</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">Why Choose Early Screening?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Detects hidden conditions early — before symptoms appear</li>
            <li>✅ Prevents serious health problems, disabilities, and delays</li>
            <li>✅ Simple, safe, and quick tests</li>
            <li>✅ Expert counseling and follow-up support if needed</li>
          </ul>
        </div>

        <div className="bg-teal-100 border-l-4 border-teal-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            A few simple tests today can help ensure a lifetime of better health for your baby.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewbornScreening;