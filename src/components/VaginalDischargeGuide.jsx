'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const VaginalDischargeGuide = () => {
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

  const normalCharacteristics = [
    {
      id: 1,
      title: "Normal Discharge",
      items: [
        "Clear, white, or slightly bloody",
        "Mucus-like consistency",
        "Small amount (size of a quarter)",
        "Occurs in first 1-2 weeks of life",
        "No foul odor"
      ]
    },
    {
      id: 2,
      title: "Causes",
      items: [
        "Maternal hormones leaving baby's body",
        "Normal response to estrogen withdrawal",
        "Common in female newborns",
        "Not caused by infection",
        "Self-resolving condition"
      ]
    },
    {
      id: 3,
      title: "Care Tips",
      items: [
        "Gently wipe during diaper changes",
        "No need for special cleansers",
        "Avoid excessive cleaning",
        "Use plain water or mild baby wipes",
        "Pat dry rather than rub"
      ]
    }
  ];

  const whenToWorry = [
    {
      id: 1,
      title: "Concerning Signs",
      description: "Foul odor, green/yellow color, or discharge persisting beyond 6 weeks"
    },
    {
      id: 2,
      title: "Associated Symptoms",
      description: "Fever, redness/swelling, or baby appearing uncomfortable"
    },
    {
      id: 3,
      title: "Possible Conditions",
      description: "Yeast infection, bacterial vaginosis, or rarely, structural abnormalities"
    }
  ];

  const ageTimeline = [
    { age: "Birth-1 week", description: "Most common time for discharge", notes: "May be slightly bloody" },
    { age: "1-4 weeks", description: "Gradually decreases", notes: "Should become less noticeable" },
    { age: "4-6 weeks", description: "Typically resolves", notes: "If persists, consult pediatrician" }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white"
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
              Vaginal Discharge in Babies
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understanding what&apos;s normal and when to seek help
            </p>
            <div className="bg-pink-100 border-l-4 border-pink-500 p-4 rounded-r-lg mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> Vaginal discharge occurs in about 25% of newborn girls due to maternal hormones.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/vaginal-discharge.png"
              alt="Parent caring for newborn baby during diaper change"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Newborn Vaginal Discharge Basics</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Vaginal discharge in newborn girls is a common and typically harmless occurrence caused by exposure to maternal hormones in the womb. This discharge, sometimes called &quot;pseudomenses,&quot; is the body&apos;s natural response to the withdrawal of these hormones after birth.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Occurs in about 1 in 4 female newborns</li>
                <li>Most noticeable in the first 1-2 weeks of life</li>
                <li>Not a sign of infection or poor hygiene</li>
                <li>Requires no special treatment in most cases</li>
              </ul>
            </div>
          </motion.div>

          {/* Normal Characteristics Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Normal Characteristics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {normalCharacteristics.map((step) => (
                <motion.div 
                  key={step.id}
                  className="bg-pink-50 p-6 rounded-lg border border-pink-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {step.id}
                    </span>
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* When to Worry */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">When to Consult Your Pediatrician</h2>
            <div className="space-y-6">
              {whenToWorry.map((step) => (
                <motion.div 
                  key={step.id}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
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

          {/* Age Timeline */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Typical Timeline</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-pink-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Age</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-pink-900">
                  {ageTimeline.map((tip, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-pink-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{tip.age}</td>
                      <td className="py-3 px-4">{tip.description}</td>
                      <td className="py-3 px-4">{tip.notes}</td>
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
                Warning Signs Requiring Medical Attention
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Persistent</strong> bleeding (more than a few drops)</li>
                <li>Discharge that <strong>smells bad</strong> or is green/yellow</li>
                <li>Associated <strong>fever</strong> or irritability</li>
                <li>Redness, swelling, or <strong>rash</strong> in genital area</li>
                <li>Discharge continuing <strong>beyond 6 weeks</strong> of age</li>
              </ul>
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Care and Prevention Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hygiene Practices
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Always wipe front to back</li>
                  <li>Change diapers frequently (every 2-3 hours)</li>
                  <li>Allow diaper-free time when possible</li>
                  <li>Use fragrance-free wipes or plain water</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Comfort Measures
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Apply petroleum jelly if area appears irritated</li>
                  <li>Use lukewarm water for cleaning</li>
                  <li>Pat dry instead of rubbing</li>
                  <li>Avoid bubble baths or harsh soaps</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

export default VaginalDischargeGuide;