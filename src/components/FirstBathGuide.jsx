'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FirstBathGuide = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const preparationSteps = [
    {
      id: 1,
      title: "Gather supplies",
      items: [
        "Soft washcloths (2-3)",
        "Mild baby soap (pH-neutral)",
        "Baby shampoo (tear-free)",
        "Soft-bristled baby hair brush",
        "Clean diaper and clothes",
        "Hooded towel"
      ]
    },
    {
      id: 2,
      title: "Prepare the space",
      items: [
        "Choose warm, draft-free area",
        "Bath thermometer (ideal 90-100°F)",
        "Water depth: 2-3 inches for newborns",
        "All supplies within arm's reach",
        "Soft surface to place baby after bath"
      ]
    },
    {
      id: 3,
      title: "Safety check",
      items: [
        "Test water temperature with wrist/elbow",
        "Never leave baby unattended",
        "Turn off phone to avoid distractions",
        "Secure hair if long",
        "Remove jewelry that might scratch"
      ]
    }
  ];

  const bathingSteps = [
    {
      id: 1,
      title: "Undress & wrap",
      description: "Undress baby leaving diaper on, wrap in towel exposing only what you're washing"
    },
    {
      id: 2,
      title: "Head first",
      description: "Support head with one hand, use damp washcloth to wipe face (no soap), then wash scalp with mild shampoo"
    },
    {
      id: 3,
      title: "Body wash",
      description: "Unwrap towel, remove diaper, clean genital area (front to back for girls)"
    },
    {
      id: 4,
      title: "Final rinse",
      description: "Use cup or hand to gently pour water over body (avoid face)"
    },
    {
      id: 5,
      title: "Dry & dress",
      description: "Immediately wrap in hooded towel, pat dry (especially folds), diaper and dress quickly"
    }
  ];

  const frequencyTips = [
    { age: "Newborn-2mo", baths: "2-3 per week", notes: "Sponge baths until umbilical cord falls off" },
    { age: "2-6mo", baths: "Every other day", notes: "Can transition to tub baths" },
    { age: "6mo+", baths: "Daily", notes: "More frequent as they start solids/crawling" }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Hero Section */}
      <section className="relative py-12 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            variants={itemVariants}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Baby&apos;s First Bath
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A gentle, stress-free guide to bathing your newborn safely
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric tip:</span> Wait 24-48 hours after birth for first bath to protect vernix benefits.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image - Visible on all devices */}
          <motion.div 
            className="w-full border-l-[#F00485]   md:border-l-5 md:w-1/2 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/first-bath.png"
              alt="Parent giving gentle first bath to newborn baby"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Newborn Bathing Basics</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                A baby&apos;s first bath is a special milestone that requires careful preparation. Newborns lose body heat quickly, so baths should be brief (5-10 minutes) and efficient. The American Academy of Pediatrics recommends:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Sponge baths until umbilical cord stump falls off (1-3 weeks)</li>
                <li>Water temperature between 90-100°F (32-38°C)</li>
                <li>Using only mild, fragrance-free cleansers</li>
                <li>Bathing 2-3 times per week to prevent dry skin</li>
              </ul>
            </div>
          </motion.div>

          {/* Preparation Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Preparation Checklist</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {preparationSteps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {step.id}
                    </span>
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Step-by-Step Bathing */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Bathing Step-by-Step</h2>
            <div className="space-y-6">
              {bathingSteps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="bg-green-50 p-6 rounded-lg border border-green-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frequency Guide */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Bathing Frequency Guide</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Age</th>
                    <th className="py-3 px-4 text-left">Recommended Baths</th>
                    <th className="py-3 px-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-[#2B7FFF] divide-gray-200">
                  {frequencyTips.map((tip, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                      <td className="py-3 px-4   font-medium">{tip.age}</td>
                      <td className="py-3  px-4">{tip.baths}</td>
                      <td className="py-3   px-4">{tip.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Safety Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Critical Safety Warnings
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Never</strong> leave baby unattended - drowning can occur in 1 inch of water</li>
                <li>Avoid bath seats - they create false security and are drowning hazards</li>
                <li>Check water temperature every time - babies&apos; skin burns more easily than adults</li>
                <li>Don&apos;t use cotton swabs to clean ears - just wipe outer ear with washcloth</li>
                <li>If umbilical cord is still attached, sponge bath only and keep area dry</li>
              </ul>
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pro Tips for Stress-Free Baths</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Timing Tips
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Bathe when baby is alert but not hungry</li>
                  <li>Evening baths can help establish bedtime routine</li>
                  <li>Wait 30 minutes after feeding to avoid spit-up</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Comfort Tips
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Place warm washcloth on baby&apos;s tummy during bath</li>
                  <li>Sing or talk softly to keep baby calm</li>
                  <li>Keep room warm (75-78°F) to prevent chills</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
           {/* Back to Newborn Care Topics Button */}
     <section className="container mx-auto px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/newborn-care" className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors border border-gray-200 shadow-sm hover:shadow">
            ← Back to All Newborn Care Topics
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default FirstBathGuide;