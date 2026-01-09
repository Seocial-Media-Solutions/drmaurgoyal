'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CommonConditionsGuide = () => {
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

  const commonConditions = [
    {
      id: 1,
      title: "Skin Conditions",
      conditions: [
        {
          name: "Erythema toxicum",
          description: "Red blotches with small white/yellow bumps (appears 1-4 days after birth)",
          action: "No treatment needed, resolves in 1-2 weeks"
        },
        {
          name: "Milia",
          description: "Tiny white bumps on nose/chin (blocked oil glands)",
          action: "Disappear on their own in weeks"
        },
        {
          name: "Baby acne",
          description: "Small red bumps on face (from maternal hormones)",
          action: "Keep clean, avoid creams, resolves in months"
        }
      ]
    },
    {
      id: 2,
      title: "Physical Changes",
      conditions: [
        {
          name: "Swollen genitals",
          description: "From maternal hormones (both boys and girls)",
          action: "Resolves in days to weeks"
        },
        {
          name: "Cradle cap",
          description: "Flaky, crusty scalp (not contagious or painful)",
          action: "Gentle washing, soft brush, baby oil if needed"
        },
        {
          name: "Umbilical granuloma",
          description: "Small pink lump at belly button after cord falls off",
          action: "May need silver nitrate treatment by doctor"
        }
      ]
    },
    {
      id: 3,
      title: "Behavioral Patterns",
      conditions: [
        {
          name: "Crossed eyes",
          description: "Common in first 6 months as muscles develop",
          action: "Should straighten by 6 months"
        },
        {
          name: "Startle reflex",
          description: "Sudden jerking movements when startled",
          action: "Normal, decreases by 3-4 months"
        },
        {
          name: "Hiccups",
          description: "Frequent and normal for newborns",
          action: "No intervention needed"
        }
      ]
    }
  ];

  const warningSigns = [
    {
      symptom: "Fever (100.4°F/38°C or higher)",
      urgency: "Emergency - call pediatrician immediately"
    },
    {
      symptom: "Difficulty breathing",
      urgency: "Emergency - seek care immediately"
    },
    {
      symptom: "Yellow skin/eyes worsening after first week",
      urgency: "Call pediatrician within 24 hours"
    },
    {
      symptom: "No wet diapers for 12+ hours",
      urgency: "Call pediatrician same day"
    },
    {
      symptom: "Persistent vomiting (not just spit-up)",
      urgency: "Call pediatrician same day"
    }
  ];

  const timeline = [
    { 
      time: "Birth-3 days", 
      changes: [
        "Peeling skin (especially hands/feet)",
        "Vernix caseosa (white coating) wearing off",
        "Possible breast buds (from maternal hormones)"
      ] 
    },
    { 
      time: "1-2 weeks", 
      changes: [
        "Umbilical cord drying/falling off",
        "Jaundice peaking then fading",
        "Birthmarks may appear"
      ] 
    },
    { 
      time: "3-6 weeks", 
      changes: [
        "Baby acne may develop",
        "More alert periods during day",
        "Cradle cap may appear"
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
              Common Newborn Conditions
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understanding what&apos;s normal and when to seek help
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric insight:</span> Most newborn peculiarities are temporary and resolve without intervention.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 border-l-[#4A89B3]   md:border-l-5 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/common-conditions.png"
              alt="Newborn baby with common skin conditions"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Newborn Normalities</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Newborns undergo dramatic changes as they adapt to life outside the womb. Many temporary conditions concern parents but are completely normal. The American Academy of Pediatrics notes that:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>About 60% of newborns develop some form of harmless skin condition</li>
                <li>Hormonal changes from mother can cause temporary effects lasting weeks</li>
                <li>Reflexes and nervous system immaturity cause many &quot;strange&quot; behaviors</li>
                <li>Most birthmarks fade significantly by age 2</li>
              </ul>
            </div>
          </motion.div>

          {/* Common Conditions Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Common Temporary Conditions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {commonConditions.map((category) => (
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
                  <div className="space-y-4">
                    {category.conditions.map((condition, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-md">
                        <h4 className="font-medium text-gray-900">{condition.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{condition.description}</p>
                        <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {condition.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Warning Signs */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">When to Seek Help</h2>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Red Flags Requiring Medical Attention
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-rose-200">
                      <th className="py-3 px-4 text-left text-rose-700">Symptom</th>
                      <th className="py-3 px-4 text-left text-rose-700">Urgency Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-100">
                    {warningSigns.map((sign, index) => (
                      <tr key={index}>
                        <td className="py-3 text-pink-900 px-4 font-medium">{sign.symptom}</td>
                        <td className="py-3 text-pink-900 px-4">{sign.urgency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Developmental Timeline */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Newborn Changes Timeline</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((period, index) => (
                <motion.div 
                  key={index}
                  className="bg-green-50 p-6 rounded-lg border border-green-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{period.time}</h3>
                  <ul className="space-y-2">
                    {period.changes.map((change, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{change}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Parent Questions Answered</h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: How can I tell normal newborn breathing from concerning breathing?</h3>
                <p className="text-gray-700">
                  <span className="font-medium">Normal:</span> Periodic breathing (pauses 10 sec), rates of 40-60 breaths/min during active periods, nasal flaring when crying. 
                  <span className="font-medium block mt-2">Concerning:</span> Grunting, chest retractions, sustained rapid breathing (60/min at rest), blue lips/tongue.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: My newborn&apos;s eyes sometimes cross or wander - is this normal?</h3>
                <p className="text-gray-700">
                  Yes, intermittent crossing or wandering is normal until about 4 months as eye muscles strengthen. Consistent crossing after 6 months or inability to track objects by 3 months should be evaluated.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Q: What&apos;s the difference between baby acne and a rash?</h3>
                <p className="text-gray-700">
                  Baby acne appears as small red bumps, often with whiteheads, primarily on face. Rashes typically cover larger areas, may have different textures (raised, scaly, blistery), and often spread. Heat rash has tiny red spots in skin folds. When in doubt, photograph and consult your pediatrician.
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

export default CommonConditionsGuide;