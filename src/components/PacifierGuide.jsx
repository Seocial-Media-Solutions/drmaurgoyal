'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PacifierGuide = () => {
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

  // Color scheme - using soothing baby blues
  const colors = {
    primary: 'bg-blue-600',
    primaryLight: 'bg-blue-100',
    primaryBorder: 'border-blue-200',
    secondary: 'bg-teal-600',
    secondaryLight: 'bg-teal-100',
    secondaryBorder: 'border-teal-200',
    accent: 'bg-indigo-500',
    accentLight: 'bg-indigo-100',
    accentBorder: 'border-indigo-200'
  };

  const benefits = [
    "Soothes fussy babies between feedings",
    "May reduce SIDS risk when used at sleep times",
    "Helps satisfy strong sucking reflex",
    "Provides comfort during procedures/vaccinations",
    "Can help babies self-soothe to sleep"
  ];

  const risks = [
    "Early introduction may interfere with breastfeeding (wait until 3-4 weeks)",
    "Possible dental problems with prolonged use (especially after age 2)",
    "May increase ear infection risk in older infants",
    "Can become a sleep crutch if overused",
    "Potential for dependency if used constantly"
  ];

  const selectionGuide = [
    {
      type: "Newborn (0-3mo)",
      features: [
        "Small, lightweight design",
        "Orthodontic shape recommended",
        "Single-piece construction",
        "Ventilated shield (at least 1.5\" diameter)"
      ]
    },
    {
      type: "Infant (3-18mo)",
      features: [
        "Slightly larger nipple size",
        "Flexible, soft silicone",
        "Shield with finger grip",
        "BPA-free materials"
      ]
    },
    {
      type: "Older Baby (18mo+)",
      features: [
        "Larger size for growing mouth",
        "Durable construction",
        "May have decorative designs",
        "Consider weaning models"
      ]
    }
  ];

  const safetyTips = [
    "Never tie pacifier around baby's neck",
    "Inspect regularly for tears/weak spots",
    "Replace every 4-8 weeks or when showing wear",
    "Clean with soap/water (avoid your mouth)",
    "Use proper size for baby's age",
    "Avoid pacifiers with liquid/gel filling"
  ];

  const weaningStrategies = [
    {
      age: "6-12 months",
      method: "Gradually limit to sleep times only",
      tips: "Offer comfort in other ways (cuddling, singing)"
    },
    {
      age: "12-24 months",
      method: "Pacifier fairy or exchange for special toy",
      tips: "Choose a low-stress time to begin weaning"
    },
    {
      age: "2+ years",
      method: "Cold turkey with preparation",
      tips: "Read books about saying goodbye to pacifier"
    }
  ];

  const commonQuestions = [
    {
      question: "When should I introduce a pacifier?",
      answer: "For breastfed babies, wait 3-4 weeks until breastfeeding is well established. Formula-fed babies can start earlier if needed."
    },
    {
      question: "How many pacifiers should I have?",
      answer: "3-5 is ideal - one for use, one spare, one in diaper bag, one at daycare, and one for washing rotation."
    },
    {
      question: "My baby refuses the pacifier - what now?",
      answer: "Try different shapes/sizes, offer when calm (not starving), dip in breastmilk, or respect if they prefer thumb-sucking."
    },
    {
      question: "Should I use pacifier clips?",
      answer: "Yes, but use short clips that attach to clothing (not neck) and avoid beads/decoration that could break off."
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
              Pacifier Use & Safety Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              What parents should know about soothing with pacifiers
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> The AAP recommends pacifier use at naptime and bedtime once breastfeeding is established, as it may reduce SIDS risk by up to 90%.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 border-l-[#ff9400]   md:border-l-5  relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/pacifiers.png"
              alt="Newborn baby using pacifier safely"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pacifier Pros & Cons</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Pacifiers are one of the most common baby soothing tools, but should be used thoughtfully. Modern pacifiers are designed with safety and oral development in mind when used appropriately.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Potential Risks</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {risks.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> Pacifier use should be baby-led - never forced. About 70-85% of Western babies use pacifiers, but they&apos;re less common in some other cultures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Selection Guide */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Choosing the Right Pacifier</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {selectionGuide.map((type, index) => (
                <motion.div 
                  key={index}
                  className={`${index === 0 ? colors.primaryLight : index === 1 ? colors.secondaryLight : colors.accentLight} p-6 rounded-lg border ${index === 0 ? colors.primaryBorder : index === 1 ? colors.secondaryBorder : colors.accentBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{type.type}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {type.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder} mt-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pacifier Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Orthodontic</h4>
                  <p className="text-gray-700">Flattened bottom, rounded top to promote natural palate development</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Cherry</h4>
                  <p className="text-gray-700">Round symmetrical shape, traditional design</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Silicone</h4>
                  <p className="text-gray-700">Firm, durable, easy to clean, no odor/taste</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Latex</h4>
                  <p className="text-gray-700">Softer, more flexible, but may degrade faster</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Pacifier Safety Guidelines</h2>
            <div className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do&apos;s</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Choose one-piece construction</li>
                    <li>Use proper size for baby&apos;s age</li>
                    <li>Clean regularly with soap and water</li>
                    <li>Replace every 4-8 weeks</li>
                    <li>Store in clean, dry container</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Don&apos;ts</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Never modify or repair a pacifier</li>
                    <li>Avoid decorative pacifiers with small parts</li>
                    <li>Don&apos;t dip in sweet substances</li>
                    <li>Avoid pacifiers with liquid/gel filling</li>
                    <li>Don&apos;t force baby to take it</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Critical Safety Tips</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className={`${colors.accentLight} p-3 rounded-lg text-center`}>
                      <p className="text-gray-800 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weaning Guide */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Pacifier Weaning Strategies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden text-[#155DFC]">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Age</th>
                    <th className="py-3 px-4 text-left">Recommended Method</th>
                    <th className="py-3 px-4 text-left">Tips</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {weaningStrategies.map((stage, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{stage.age}</td>
                      <td className="py-3 px-4">{stage.method}</td>
                      <td className="py-3 px-4">{stage.tips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className={`${colors.accentLight} p-6 rounded-lg border ${colors.accentBorder} mt-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gradual Weaning Techniques</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">1. Limit Access</h4>
                  <p className="text-gray-700">Only allow at sleep times, then just naps, then just bedtime</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">2. The &quot;Lost&quot; Pacifier</h4>
                  <p className="text-gray-700">&quot;Oops, we can&apos;t find it!&quot; and don&apos;t replace immediately</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">3. Pacifier Fairy</h4>
                  <p className="text-gray-700">Trade pacifiers for a special gift from the &quot;Pacifier Fairy&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Pacifier Questions</h2>
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

export default PacifierGuide;