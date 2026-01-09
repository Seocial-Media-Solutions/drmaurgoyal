'use client';
import { motion } from 'framer-motion';

const SpecializedPediatrics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Specialized Pediatric Departments
        </h1>
        <h2 className="text-xl text-blue-600 mb-6">
          Expert Care for Every Aspect of Your Child&apos;s Health
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-gray-800">
            Our hospital offers comprehensive specialized pediatric care through dedicated departments, 
            each staffed with experts in their field. From routine conditions to complex disorders, 
            we provide tailored treatments for children from birth through adolescence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Pediatric Cardiology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Cardiology</h3>
            <p className="text-gray-700 text-sm">
              Comprehensive heart care including congenital heart defects, arrhythmias, 
              and acquired heart diseases. Services include echocardiography, ECG, 
              and specialized interventions.
            </p>
          </div>

          {/* Pediatric Neurology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Neurology</h3>
            <p className="text-gray-700 text-sm">
              Specialized care for epilepsy, seizures, migraines, cerebral palsy, 
              and neuromuscular disorders. Advanced EEG and neuroimaging available.
            </p>
          </div>

          {/* Pediatric Pulmonology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Pulmonology</h3>
            <p className="text-gray-700 text-sm">
              Treatment for asthma, bronchiolitis, pneumonia, chronic cough, 
              and sleep-disordered breathing. Pulmonary function tests and 
              specialized therapies available.
            </p>
          </div>

          {/* Pediatric Gastroenterology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Gastroenterology</h3>
            <p className="text-gray-700 text-sm">
              Management of GERD, food allergies, celiac disease, IBD, 
              liver disorders, and feeding difficulties. Endoscopic procedures 
              and nutritional counseling available.
            </p>
          </div>

          {/* Pediatric Endocrinology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Endocrinology</h3>
            <p className="text-gray-700 text-sm">
              Specialized care for diabetes (Type 1 & 2), growth disorders, 
              early/delayed puberty, thyroid issues, and adrenal gland disorders.
            </p>
          </div>

          {/* Pediatric Nephrology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Nephrology</h3>
            <p className="text-gray-700 text-sm">
              Treatment for kidney diseases, UTIs, nephrotic syndrome, 
              hypertension, and electrolyte imbalances. Dialysis services available.
            </p>
          </div>

          {/* Pediatric Surgery */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Surgery</h3>
            <p className="text-gray-700 text-sm">
              Minimally invasive and traditional surgeries for hernias, 
              appendicitis, congenital anomalies, trauma, and specialized 
              neonatal conditions.
            </p>
          </div>

          {/* Pediatric Oncology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Oncology</h3>
            <p className="text-gray-700 text-sm">
              Comprehensive cancer care including leukemia, brain tumors, 
              and solid tumors. Chemotherapy, radiation coordination, 
              and survivorship programs.
            </p>
          </div>

          {/* Pediatric Hematology */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Pediatric Hematology</h3>
            <p className="text-gray-700 text-sm">
              Management of anemia, thalassemia, hemophilia, bleeding disorders, 
              and sickle cell disease. Blood transfusion services available.
            </p>
          </div>

          {/* Developmental Pediatrics */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">• Developmental Pediatrics</h3>
            <p className="text-gray-700 text-sm">
              Evaluation and management of autism spectrum disorders, ADHD, 
              learning disabilities, speech delays, and behavioral concerns.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            Our specialized pediatric teams work together to provide coordinated, 
            compassionate care tailored to your child&apos;s unique needs.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecializedPediatrics;