'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DiaperRashGuide = () => {
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

  const preventionTips = [
    {
      id: 1,
      title: "Diapering Habits",
      tips: [
        "Change diapers every 2-3 hours (immediately after bowel movements)",
        "Allow 5-10 minutes of diaper-free time after changes",
        "Avoid overly tight diapers that prevent airflow",
        "Consider switching diaper brands if rashes persist"
      ]
    },
    {
      id: 2,
      title: "Cleaning Methods",
      tips: [
        "Use fragrance-free wipes or soft cloth with warm water",
        "Pat dry instead of rubbing (moisture worsens rash)",
        "For severe rash, use squeeze bottle of warm water to clean",
        "Avoid alcohol-based wipes or harsh soaps"
      ]
    },
    {
      id: 3,
      title: "Barrier Protection",
      tips: [
        "Apply thick layer of zinc oxide cream at first sign of redness",
        "Look for ointments with 10-40% zinc oxide content",
        "Petroleum jelly can help prevent rash between outbreaks",
        "Avoid talcum powder (inhalation risk)"
      ]
    }
  ];

  const treatmentStages = [
    {
      stage: "Mild Rash",
      symptoms: "Slight redness, small affected area",
      treatment: [
        "Increase diaper changes",
        "Apply zinc oxide cream with each change",
        "Use warm water cleanses instead of wipes"
      ]
    },
    {
      stage: "Moderate Rash",
      symptoms: "Bright red patches, may have small bumps",
      treatment: [
        "Add 1% hydrocortisone cream (2x daily for 3-5 days)",
        "Consider antifungal cream if yeast suspected",
        "Switch to super-absorbent diapers overnight"
      ]
    },
    {
      stage: "Severe Rash",
      symptoms: "Bleeding, blisters, or open sores",
      treatment: [
        "Consult pediatrician immediately",
        "May need prescription antifungal/antibiotic",
        "Temporary switch to cloth diapers may help"
      ]
    }
  ];

  const homeRemedies = [
    {
      name: "Oatmeal Bath",
      preparation: "Grind 1/3 cup oats, mix in warm bathwater",
      application: "Soak baby's bottom for 10-15 minutes",
      frequency: "2-3 times daily until improved"
    },
    {
      name: "Coconut Oil",
      preparation: "Use virgin, cold-pressed coconut oil",
      application: "Apply thin layer after cleaning",
      frequency: "With each diaper change"
    },
    {
      name: "Breast Milk",
      preparation: "Express small amount of milk",
      application: "Dab on affected area, let air dry",
      frequency: "2-3 times daily"
    }
  ];

  const productRecommendations = [
    {
      category: "Creams",
      products: [
        "Desitin Maximum Strength (40% zinc oxide)",
        "Boudreaux's Butt Paste",
        "Aquaphor Baby Healing Ointment"
      ]
    },
    {
      category: "Wipes",
      products: [
        "WaterWipes Sensitive Baby Wipes",
        "Pampers Pure Protection Wipes",
        "Honest Company Fragrance-Free Wipes"
      ]
    },
    {
      category: "Diapers",
      products: [
        "Pampers Swaddlers Sensitive",
        "Huggies Special Delivery",
        "Seventh Generation Free & Clear"
      ]
    }
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
              Diaper Rash Treatment Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Effective solutions to soothe and prevent painful diaper rash
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric fact:</span> 50% of babies experience diaper rash between 4-15 months, with peak occurrence at 9-12 months.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full border-l-[#0371AB]   md:border-l-5 md:w-1/2 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/diaper-rash.png"
              alt="Baby with diaper rash being treated gently"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Diaper Rash</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Diaper dermatitis occurs when skin is exposed to prolonged moisture, friction, and irritants from urine/stool. The American Academy of Dermatology identifies three main types:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Irritant dermatitis</strong> (most common) - red, shiny patches on convex surfaces</li>
                <li><strong>Yeast infection</strong> - bright red with satellite lesions, often after antibiotics</li>
                <li><strong>Allergic reaction</strong> - matches diaper shape, may occur with new products</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-gray-800">
                  <span className="font-semibold">When to worry:</span> If rash doesn&apos;t improve in 2-3 days, spreads beyond diaper area, or includes pus-filled blisters, consult your pediatrician.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Prevention Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Prevention Strategies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {preventionTips.map((category) => (
                <motion.div 
                  key={category.id}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {category.id}
                    </span>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Treatment Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Treatment by Severity</h2>
            <div className="space-y-6">
              {treatmentStages.map((stage, index) => (
                <motion.div 
                  key={index}
                  className={`p-6 rounded-lg border ${
                    stage.stage === "Mild Rash" ? "bg-green-50 border-green-100" :
                    stage.stage === "Moderate Rash" ? "bg-yellow-50 border-yellow-100" :
                    "bg-rose-50 border-rose-100"
                  }`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start">
                    <div className={`${
                      stage.stage === "Mild Rash" ? "bg-green-500" :
                      stage.stage === "Moderate Rash" ? "bg-yellow-500" :
                      "bg-rose-500"
                    } text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.stage}</h3>
                      <p className="text-gray-700 mb-3"><span className="font-medium">Symptoms:</span> {stage.symptoms}</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {stage.treatment.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Home Remedies */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Natural Home Remedies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {homeRemedies.map((remedy, index) => (
                <motion.div 
                  key={index}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{remedy.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800">Preparation:</h4>
                      <p className="text-gray-700">{remedy.preparation}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Application:</h4>
                      <p className="text-gray-700">{remedy.application}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Frequency:</h4>
                      <p className="text-gray-700">{remedy.frequency}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Recommendations */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pediatrician-Recommended Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {productRecommendations.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded mr-2">{idx + 1}</span>
                        <span className="text-gray-700">{product}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Diaper Rash FAQs</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: How can I tell if it&apos;s a yeast infection vs regular diaper rash?</h3>
                <p className="text-gray-700">
                  <span className="font-medium">Yeast infections:</span> Bright red with distinct borders, satellite lesions outside main area, doesn&apos;t respond to typical creams, often after antibiotic use. 
                  <span className="font-medium block mt-2">Regular rash:</span> More diffuse redness, improves with standard treatments, limited to diaper contact areas.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: Should I use powder for diaper rash?</h3>
                <p className="text-gray-700">
                  Most pediatricians recommend against talcum powder due to inhalation risks. If using powder, choose cornstarch-based and apply carefully to your hands first, not directly on baby. Barrier creams are generally more effective and safer.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: Can certain foods make diaper rash worse?</h3>
                <p className="text-gray-700">
                  Yes, acidic foods (citrus, tomatoes), new foods during weaning, and antibiotic use can all contribute. During outbreaks, consider temporarily eliminating suspected trigger foods and reintroducing gradually.
                </p>
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

export default DiaperRashGuide;