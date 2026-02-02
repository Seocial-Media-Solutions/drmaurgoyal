'use client';
import { motion } from 'framer-motion';

const SupportServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-8">
          Comprehensive Child Care Services
        </h1>

        {/* Support Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
            <span className="text-3xl mr-2">🌟</span> Support Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Pediatric Physiotherapy */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Pediatric Physiotherapy and Rehabilitation</h3>
              <p className="text-gray-700 text-sm">
                Specialized movement therapies for cerebral palsy, developmental delays, sports injuries, and post-surgical rehabilitation.
              </p>
            </div>

            {/* Child Psychology */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Child Psychology and Psychiatry</h3>
              <p className="text-gray-700 text-sm">
                Emotional/behavioral support for anxiety, depression, trauma, and neurodevelopmental disorders.
              </p>
            </div>

            {/* Nutrition */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Diet and Nutrition Counseling</h3>
              <p className="text-gray-700 text-sm">
                Personalized meal plans for obesity, failure to thrive, food allergies, and special dietary needs.
              </p>
            </div>

            {/* Speech Therapy */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Speech and Language Therapy</h3>
              <p className="text-gray-700 text-sm">
                Treatment for speech delays, articulation disorders, stuttering, and communication challenges.
              </p>
            </div>

            {/* Occupational Therapy */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Occupational Therapy</h3>
              <p className="text-gray-700 text-sm">
                Improves fine motor skills, sensory processing, and daily living activities for children with special needs.
              </p>
            </div>

            {/* Dental Care */}
            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-purple-800 mb-2">• Dental Care for Children</h3>
              <p className="text-gray-700 text-sm">
                Preventive care, cavity treatment, orthodontic evaluations, and dental trauma management.
              </p>
            </div>
          </div>
        </div>

        {/* In-House Facilities Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
            <span className="text-3xl mr-2">🌟</span> In-House Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* NICU/PICU */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• NICU and PICU</h3>
              <p className="text-gray-700 text-sm">
                Level III NICU for premature infants and PICU with advanced life support for critically ill children.
              </p>
            </div>
            {/* Radiology */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• Radiology and Imaging</h3>
              <p className="text-gray-700 text-sm">
                Child-friendly X-ray, ultrasound, CT, and MRI with pediatric protocols and radiation protection.
              </p>
            </div>

            {/* Pathology */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• Pathology and Laboratory</h3>
              <p className="text-gray-700 text-sm">
                Rapid blood tests, cultures, and specialized pediatric lab investigations.
              </p>
            </div>

            {/* Pharmacy */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• In-house Pharmacy</h3>
              <p className="text-gray-700 text-sm">
                Child-appropriate medications with proper dosing guidance.
              </p>
            </div>

            {/* Vaccination */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• Vaccination Clinic</h3>
              <p className="text-gray-700 text-sm">
                Complete immunization schedules in a comforting environment.
              </p>
            </div>

            {/* Growth Clinic */}
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-blue-800 mb-2">• Growth Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Regular tracking of height, weight, and developmental milestones.
              </p>
            </div>
          </div>
        </div>

        {/* Special Services Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-6 flex items-center">
            <span className="text-3xl mr-2">🌟</span> Other Special Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Parent Education */}
            <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="font-semibold text-teal-800 mb-2">• Parent Education Programs</h3>
              <p className="text-gray-700 text-sm">
                Workshops on breastfeeding, newborn care, child safety, and positive parenting techniques.
              </p>
            </div>

            {/* Health Check-ups */}
            <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="font-semibold text-teal-800 mb-2">• Preventive Health Check-ups</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive age-appropriate screenings for early detection of health issues.
              </p>
            </div>

            {/* Asthma Clinic */}
            <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="font-semibold text-teal-800 mb-2">• Asthma and Allergy Clinics</h3>
              <p className="text-gray-700 text-sm">
                Personalized asthma action plans, allergy testing, and immunotherapy options.
              </p>
            </div>

            {/* Weight Management */}
            <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="font-semibold text-teal-800 mb-2">• Weight Management Clinics</h3>
              <p className="text-gray-700 text-sm">
                Holistic programs for childhood obesity or undernutrition with diet and activity plans.
              </p>
            </div>

            {/* Chronic Illness Counseling */}
            <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="font-semibold text-teal-800 mb-2">• Chronic Illness Counseling</h3>
              <p className="text-gray-700 text-sm">
                Support for families managing diabetes, genetic conditions, and long-term health challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-lg mt-8">
          <p className="text-gray-800 font-medium">
            Our integrated services ensure complete, compassionate care for your child at every stage of development.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SupportServices;