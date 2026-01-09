'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GreenPoopGuide = () => {
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

  // Color scheme - using green tones for this guide
  const colors = {
    primary: 'bg-green-600',
    primaryLight: 'bg-green-100',
    primaryBorder: 'border-green-200',
    secondary: 'bg-teal-600',
    secondaryLight: 'bg-teal-100',
    secondaryBorder: 'border-teal-200',
    accent: 'bg-lime-500',
    accentLight: 'bg-lime-100',
    accentBorder: 'border-lime-200'
  };

  const normalGreenStoolTypes = [
    {
      age: "Breastfed babies",
      color: "Yellow-green",
      name: "Foremilk/hindmilk imbalance",
      description: "Occurs when baby gets more foremilk (watery milk) than hindmilk (fat-rich milk)",
      consistency: "Frothy or seedy"
    },
    {
      age: "Formula-fed babies",
      color: "Green-brown",
      name: "Iron-fortified formula",
      description: "Iron in formula can cause greenish tint, especially in older formulas",
      consistency: "Paste-like"
    },
    {
      age: "Starting solids",
      color: "Dark green",
      name: "Vegetable pigments",
      description: "Green veggies like peas, spinach or beans can color stools",
      consistency: "Thicker, more formed"
    }
  ];

  const concerningGreenVariations = [
    {
      color: "Bright green with mucus",
      causes: [
        "Viral infection",
        "Food sensitivity (dairy in mom's diet)",
        "Gastrointestinal irritation"
      ],
      action: "Consult pediatrician if persistent"
    },
    {
      color: "Green with white specks",
      causes: [
        "Possible yeast infection",
        "Undigested milk fat",
        "Parasitic infection (rare)"
      ],
      action: "Medical evaluation recommended"
    },
    {
      color: "Green-black",
      causes: [
        "Possible blood in stool",
        "Certain medications",
        "Excess iron supplements"
      ],
      action: "Pediatrician visit within 24 hours"
    }
  ];

  const whenToWorry = [
    {
      symptom: "Green stools with blood streaks",
      urgency: "Call pediatrician immediately"
    },
    {
      symptom: "Foul-smelling green diarrhea",
      urgency: "Seek same-day evaluation"
    },
    {
      symptom: "Accompanied by vomiting, fever, or rash",
      urgency: "Emergency care if severe"
    },
    {
      symptom: "Persistent bright green stools for 3+ days",
      urgency: "Schedule pediatric visit"
    }
  ];

  const commonQuestions = [
    {
      question: "Is green poop a sign of infection?",
      answer: "Not usually, but if accompanied by fever, vomiting, or behavior changes, it could indicate illness."
    },
    {
      question: "Can my diet cause green stools in my breastfed baby?",
      answer: "Yes, certain foods (like leafy greens) or food dyes can sometimes affect stool color, but typically not dramatically."
    },
    {
      question: "How long after starting formula will green stools appear?",
      answer: "Formula-fed babies often have greenish stools within 2-3 days of starting formula, especially iron-fortified types."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-green-50 to-white"
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
              Green Baby Stools
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understanding when green poop is normal and when it needs attention
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> Green stools are usually normal but the shade and consistency matter more than color alone.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 relative aspect-square min-h-[300px] rounded-xl  border-l-[#0371AB]   md:border-l-5 overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/green-poop.png"
              alt="Baby diaper showing green stool variations"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Green Stools</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Green stools are common in babies and usually nothing to worry about. According to pediatric gastroenterologists:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>50-60% of breastfed babies have green stools at some point</li>
                <li>Formula-fed babies often have greenish-tan stools</li>
                <li>The speed of digestion affects green color (faster = greener)</li>
                <li>Color alone is rarely concerning without other symptoms</li>
              </ul>
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> Bile starts out green but turns brown as it travels through intestines. Fast digestion means less time for this color change.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Normal Green Stool Types */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Normal Green Stool Variations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {normalGreenStoolTypes.map((stage, index) => (
                <motion.div 
                  key={index}
                  className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{stage.age}</h3>
                  <div className={`w-full h-4 rounded-full mb-4 ${
                    stage.color === 'Yellow-green' ? 'bg-lime-400' : 
                    stage.color === 'Green-brown' ? 'bg-green-700' : 
                    'bg-green-800'
                  }`}></div>
                  <h4 className="font-medium text-gray-800 mb-1">Color:</h4>
                  <p className="text-gray-700 mb-3">{stage.color}</p>
                  <h4 className="font-medium text-gray-800 mb-1">Name:</h4>
                  <p className="text-gray-700 mb-3">{stage.name}</p>
                  <h4 className="font-medium text-gray-800 mb-1">Description:</h4>
                  <p className="text-gray-700 mb-3">{stage.description}</p>
                  <h4 className="font-medium text-gray-800 mb-1">Consistency:</h4>
                  <p className="text-gray-700">{stage.consistency}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Concerning Variations */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Concerning Green Stool Types</h2>
            <div className="space-y-6">
              {concerningGreenVariations.map((variation, index) => (
                <motion.div 
                  key={index}
                  className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start">
                    <div className={`${colors.secondary} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{variation.color}</h3>
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-800 mb-1">Possible Causes:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {variation.causes.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${colors.accentLight} px-3 py-2 rounded-lg`}>
                        <p className="font-medium text-gray-800">Action: <span className="font-normal">{variation.action}</span></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* When to Worry */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Seek Medical Help</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Symptom</th>
                    <th className="py-3 px-4 text-left">Urgency Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-[#00A63E]">
                  {whenToWorry.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{item.symptom}</td>
                      <td className="py-3 px-4">{item.urgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Photo Reference */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Green Stool Color Reference</h2>
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {/* Color swatches */}
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-lime-300 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Light green</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-green-500 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Medium green</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-green-700 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Dark green</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-green-900 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Green-black</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-lime-100 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Frothy green</p>
                </div>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Tip:</span> Green stools that look like algae or have a fluorescent quality may indicate infection.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Parent Questions</h2>
            <div className="space-y-4">
              {commonQuestions.map((q, index) => (
                <div 
                  key={index} 
                  className={`${index % 2 === 0 ? colors.primaryLight : colors.secondaryLight} p-6 rounded-lg border ${index % 2 === 0 ? colors.primaryBorder : colors.secondaryBorder}`}
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: {q.question}</h3>
                  <p className="text-gray-700">{q.answer}</p>
                </div>
              ))}
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

export default GreenPoopGuide;