'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AdolescentCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
        
      <div className="max-w-4xl mx-auto">
      <div className=" p-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">Adolescent Health </h1>
              <h2 className="text-xl text-indigo-800">Comprehensive Care for Teens (Ages 12-21)</h2>
            </div>
          </div>
        {/* Hero Image */}
        <div className="relative h-68 md:h-90 rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/adolescent-care.jpeg"
            alt="Teenager consulting with pediatrician"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-800 mb-6 md:text-xl text-lg">
            Adolescence marks a critical transition period filled with rapid physical changes, emotional development, and emerging independence. At Mayur Child Care Center, we provide specialized adolescent healthcare services that address the unique needs of teenagers while respecting their growing autonomy.
          </p>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-6">
            <p className="text-gray-800 md:text-xl text-lg">
              <span className="font-semibold">Did you know?</span> The American Academy of Pediatrics recommends annual wellness visits for all adolescents to monitor physical and emotional development during these crucial years.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b pb-2">Our Comprehensive Adolescent Services</h2>
          
          <div className="space-y-8">
            {/* Physical Health */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Physical Health & Development</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 md:text-xl text-lg">
                <li><span className="font-medium">Puberty evaluations:</span> Tracking normal progression and addressing concerns about early/delayed development</li>
                <li><span className="font-medium">Sports physicals:</span> Comprehensive exams for school/sports participation</li>
                <li><span className="font-medium">Chronic condition management:</span> Specialized care for asthma, diabetes, epilepsy and other ongoing health needs</li>
                <li><span className="font-medium">Preventive care:</span> Vaccinations (HPV, Tdap, Meningococcal), health screenings, and lifestyle counseling</li>
              </ul>
            </div>

            {/* Mental Health */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Mental & Emotional Wellbeing</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 md:text-xl text-lg">
                <li><span className="font-medium">Depression/anxiety screening:</span> Using validated tools to identify concerns early</li>
                <li><span className="font-medium">Stress management:</span> Strategies for academic pressure, social challenges, and family dynamics</li>
                <li><span className="font-medium">Behavioral health:</span> Support for ADHD, eating disorders, self-harm behaviors, and substance use concerns</li>
                <li><span className="font-medium">Crisis intervention:</span> Immediate support for mental health emergencies</li>
              </ul>
            </div>

            {/* Sexual Health */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Sexual & Reproductive Health</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 md:text-xl text-lg">
                <li><span className="font-medium">Confidential consultations:</span> Private discussions about relationships, sexuality, and identity</li>
                <li><span className="font-medium">Contraception counseling:</span> Non-judgmental guidance on prevention options</li>
                <li><span className="font-medium">STI prevention:</span> Education, testing, and treatment as needed</li>
                <li><span className="font-medium">LGBTQ+ care:</span> Gender-affirming services and support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unique Approach */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Adolescent-Centered Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">For Teens</h3>
              <ul className="space-y-2 text-gray-700 md:text-xl text-lg">
                <li>✅ Private 1-on-1 time with your doctor</li>
                <li>✅ Judgment-free zone for all concerns</li>
                <li>✅ Developmentally appropriate explanations</li>
                <li>✅ Respect for your growing independence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">For Parents</h3>
              <ul className="space-y-2 text-gray-700 md:text-xl text-lg">
                <li>✅ Guidance on parenting adolescents</li>
                <li>✅ Help navigating challenging conversations</li>
                <li>✅ Balanced involvement in your teen&apos;s care</li>
                <li>✅ Resources for supporting teen health</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12 md:text-xl text-lg">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b pb-2">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">How are adolescent visits different from childhood check-ups?</h3>
              <p className="text-gray-700 mt-2">
                Adolescent visits include more private time between doctor and teen to discuss sensitive topics. We focus on emerging health risks (like mental health, substance use, and sexual health) while still monitoring physical development. Teens gradually take more responsibility for their own healthcare decisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What about confidentiality?</h3>
              <p className="text-gray-700 mt-2">
                We maintain teen confidentiality except when there are safety concerns (self-harm, abuse, etc.). We encourage teens to involve parents in health decisions when appropriate, and can help facilitate these discussions. Parents will always be informed about major health issues.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">When should my child transition to adult healthcare?</h3>
              <p className="text-gray-700 mt-2">
                Most teens transition between ages 18-21, depending on their needs. We begin preparing patients at age 16 by teaching them to manage their own health, and can coordinate with adult providers for a smooth transition, especially for those with chronic conditions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="bg-indigo-100 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">Ready to Schedule Your Teen's Visit?</h3>
          <p className="text-gray-700 mb-4">
            Our adolescent health specialists are here to support your family through these important years. We offer flexible appointment times including after-school hours.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
            Book an Appointment
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default AdolescentCare;