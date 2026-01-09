'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlackPoopGuide = () => {
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

  // Color scheme
  const colors = {
    primary: 'bg-teal-600',
    primaryLight: 'bg-teal-100',
    primaryBorder: 'border-teal-200',
    secondary: 'bg-purple-600',
    secondaryLight: 'bg-purple-100',
    secondaryBorder: 'border-purple-200',
    accent: 'bg-amber-500',
    accentLight: 'bg-amber-100',
    accentBorder: 'border-amber-200'
  };

  const normalStoolTypes = [
    {
      age: "First 1-3 days",
      color: "Black/tar-like",
      name: "Meconium",
      description: "Thick, sticky substance made of mucus, amniotic fluid, and skin cells",
      consistency: "Very sticky, difficult to wipe"
    },
    {
      age: "Days 3-5",
      color: "Dark green",
      name: "Transitional stool",
      description: "Mix of meconium and breast milk/formula stools",
      consistency: "Less sticky, more paste-like"
    },
    {
      age: "After 1 week",
      color: "Yellow/mustard (breastfed) or tan (formula)",
      name: "Mature stool",
      description: "Indicates proper digestion of milk",
      consistency: "Soft and seedy (BF) or firmer (formula)"
    }
  ];

  const concerningVariations = [
    {
      color: "Black after first week",
      causes: [
        "Iron supplements",
        "Blood from upper GI tract (digested blood)",
        "Certain medications"
      ],
      action: "Consult pediatrician immediately"
    },
    {
      color: "White/chalky",
      causes: [
        "Liver or gallbladder issues",
        "Inadequate bile production"
      ],
      action: "Urgent medical evaluation needed"
    },
    {
      color: "Bright red streaks",
      causes: [
        "Anal fissures",
        "Milk protein allergy",
        "Lower GI bleeding"
      ],
      action: "Pediatrician visit within 24 hours"
    }
  ];

  const whenToWorry = [
    {
      symptom: "Black stools after 3 days with no iron supplements",
      urgency: "Call pediatrician immediately"
    },
    {
      symptom: "Stools with metallic smell",
      urgency: "Seek same-day evaluation"
    },
    {
      symptom: "Accompanied by vomiting, fever, or lethargy",
      urgency: "Emergency care needed"
    },
    {
      symptom: "White/gray stools with dark urine",
      urgency: "Urgent liver function tests required"
    }
  ];

  const commonQuestions = [
    {
      question: "Does iron-fortified formula cause black stools?",
      answer: "Yes, iron can darken stools but typically makes them dark green rather than black. True black stools on formula should be evaluated."
    },
    {
      question: "How many meconium stools are normal initially?",
      answer: "Expect 1-2 meconium stools per day for first 2-3 days. Delayed passage (beyond 48 hours) may indicate issues."
    },
    {
      question: "Can breastfeeding affect stool color?",
      answer: "Yes, breastfed babies typically have mustard-yellow stools, while formula-fed babies often have tan/brown stools. Green variations are also normal."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-teal-50 to-white"
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
              Newborn Stool Colors
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understanding black poop and other stool variations in babies
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> Black meconium is normal for the first 2-3 days but should transition by day 4.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full border-l-[#0371AB]   md:border-l-5  md:w-1/2 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/black-poop.png"
              alt="Newborn diaper showing typical black meconium stool"
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
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Newborn Stool Development</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                A baby&apos;s stool undergoes dramatic changes in the first week of life. The American Academy of Pediatrics states that:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>All newborns should pass meconium within 24-48 hours after birth</li>
                <li>Transition to yellowish stools should occur by day 4-5</li>
                <li>Stool frequency varies from 10x/day (breastfed) to 1x every few days (formula-fed)</li>
                <li>Color changes alone aren&apos;t diagnostic without other symptoms</li>
              </ul>
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> About 99% of healthy full-term babies pass meconium by 48 hours. Delayed passage may indicate intestinal blockages.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Normal Stool Progression */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Normal Stool Progression</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {normalStoolTypes.map((stage, index) => (
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
                  <div className={`w-full h-4 rounded-full mb-4 ${stage.color === 'Black/tar-like' ? 'bg-gray-900' : stage.color === 'Dark green' ? 'bg-green-800' : 'bg-amber-300'}`}></div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Concerning Stool Variations</h2>
            <div className="space-y-6">
              {concerningVariations.map((variation, index) => (
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
                <tbody className="divide-y divide-gray-200 text-[#009689]">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Stool Color Reference Guide</h2>
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {/* Color swatches */}
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-gray-900 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Meconium</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-green-900 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Transitional</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-amber-300 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Breastfed</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-red-700 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">Bloody</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded-md bg-gray-300 mb-2 mx-auto"></div>
                  <p className="text-sm font-medium">White/Clay</p>
                </div>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Tip:</span> Take photos of unusual stools to show your pediatrician. Lighting can affect how colors appear.
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

export default BlackPoopGuide;