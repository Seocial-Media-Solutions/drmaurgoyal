'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DecodingCryGuide = () => {
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

  // Color scheme - using calming blues and purples
  const colors = {
    primary: 'bg-indigo-600',
    primaryLight: 'bg-indigo-100',
    primaryBorder: 'border-indigo-200',
    secondary: 'bg-purple-600',
    secondaryLight: 'bg-purple-100',
    secondaryBorder: 'border-purple-200',
    accent: 'bg-blue-500',
    accentLight: 'bg-blue-100',
    accentBorder: 'border-blue-200'
  };

  const cryTypes = [
    {
      type: "Hunger Cry",
      description: "Short, low-pitched, rhythmic with brief pauses",
      characteristics: [
        "Begins with fussing sounds",
        "Turns to rhythmic 'neh' sound",
        "Rooting reflex present",
        "Intensifies if not answered"
      ],
      response: "Offer feeding, check last meal time"
    },
    {
      type: "Tired Cry",
      description: "Whiny, nasal, continuous with yawns",
      characteristics: [
        "Rubbing eyes or face",
        "Glassy-eyed stare",
        "Jerky movements",
        "May fight sleep despite exhaustion"
      ],
      response: "Begin calming routine, reduce stimulation"
    }
  ];

  const otherCries = [
    {
      type: "Discomfort Cry",
      description: "Fussy, squirmy with intermittent intensity",
      causes: [
        "Wet/dirty diaper",
        "Too hot/cold",
        "Clothing tags/scratchy fabric",
        "Gas bubbles"
      ],
      solution: "Check diaper, adjust clothing, burp baby"
    },
    {
      type: "Pain Cry",
      description: "Sudden, loud, high-pitched scream",
      characteristics: [
        "Body stiffens or knees pull up",
        "Facial grimacing",
        "Cannot be consoled",
        "May have fever or other symptoms"
      ],
      action: "Check for illness/injury, call pediatrician if persistent"
    },
    {
      type: "Overstimulation Cry",
      description: "Fussy then escalates to overwhelmed wail",
      triggers: [
        "Loud noises",
        "Bright lights",
        "Too much handling",
        "New environments"
      ],
      solution: "Move to quiet space, swaddle, use white noise"
    }
  ];

  const soothingTechniques = [
    {
      method: "5 S's",
      steps: [
        "Swaddling",
        "Side/Stomach position (while holding)",
        "Shushing sounds",
        "Swinging motion",
        "Sucking (pacifier or clean finger)"
      ],
      effectiveness: "90% success rate for calming newborns"
    },
    {
      method: "Colic Hold",
      description: "Place baby facedown along your forearm",
      benefits: [
        "Gentle abdominal pressure relieves gas",
        "Secure feeling",
        "Easy to rock in this position"
      ]
    },
    {
      method: "White Noise",
      types: [
        "Hair dryer",
        "Vacuum cleaner",
        "Shushing sounds",
        "Rainfall or ambient noise apps"


       


      ],
       note: "Should be louder than baby's crying to be effective"
    }
  ];

  const whenToWorry = [
    {
      symptom: "Cry lasting >3 hours daily",
      possibleCause: "Colic or reflux",
      action: "Discuss with pediatrician"
    },
    {
      symptom: "High-pitched scream",
      possibleCause: "Neurological issue",
      action: "Seek immediate evaluation"
    },
    {
      symptom: "Weak or moaning cry",
      possibleCause: "Illness or fatigue",
      action: "Check for fever, call doctor"
    },
    {
      symptom: "Cry with arching back",
      possibleCause: "Reflux or gas pain",
      action: "Try upright positioning after feeds"
    }
  ];

  const developmentalTimeline = [
    {
      age: "0-6 weeks",
      notes: [
        "Peak crying period (6-8 weeks)",
        "May cry 2-3 hours daily",
        "Often inconsolable in evenings"
      ]
    },
    {
      age: "2-4 months",
      notes: [
        "More alert periods",
        "Cries become more differentiated",
        "Easier to identify needs"
      ]
    },
    {
      age: "5-8 months",
      notes: [
        "May cry when separated from caregivers",
        "Frustration cries emerge",
        "Responds better to verbal comfort"
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
              Decoding Your Baby&apos;s Cry
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understanding different cry types and effective soothing techniques
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> Crying typically peaks at 6-8 weeks, averaging 2-3 hours daily. By 3-4 months, most babies cry about 1 hour per day.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 relative aspect-square min-h-[300px] rounded-xl border-l-[#ff9400]   md:border-l-5 overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/baby-cry.png"
              alt="Newborn baby crying with different facial expressions"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Baby Cries</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Research shows parents can identify cry types with 70% accuracy by 6 weeks. Key findings:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Newborns cry an average of 2 hours daily (peaking at 6-8 weeks)</li>
                <li>Hunger cries have a &quot;neh&quot; sound from sucking reflex</li>
                <li>Pain cries trigger stronger physiological response in listeners</li>
                <li>Mothers brains become wired to respond to their baby&apos;s unique cry</li>
              </ul>
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> The Dunstan Baby Language theory suggests all newborns make 5 universal sounds reflecting different needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cry Types */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Common Cry Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cryTypes.map((method, index) => (
                <motion.div 
                  key={index}
                  className={`${index === 0 ? colors.primaryLight : colors.secondaryLight} p-6 rounded-lg border ${index === 0 ? colors.primaryBorder : colors.secondaryBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.type}</h3>
                  <p className="text-gray-700 italic mb-4">{method.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {method.characteristics.map((sign, idx) => (
                        <li key={idx}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Best Response:</h4>
                    <p className="text-gray-700">{method.response}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Cries */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Other Cry Types & Solutions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {otherCries.map((cry, index) => (
                <motion.div
                  key={index}
                  className={`${colors.accentLight} p-5 rounded-lg border ${colors.accentBorder}`}
                  variants={itemVariants}
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{cry.type}</h3>
                  <p className="text-gray-700 italic mb-3">{cry.description}</p>
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 text-sm mb-1">
                      {cry.causes ? "Common Causes:" : "Characteristics:"}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {(cry.causes?.length ? cry.causes : cry.characteristics || []).map((item, idx) => (
  <li key={idx}>{item}</li>
))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">
                      {cry.solution ? "Solution:" : "Recommended Action:"}
                    </h4>
                    <p className="text-sm text-gray-700">{cry.solution || cry.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soothing Techniques */}
        {/* Soothing Techniques */}
<motion.div className="mb-16" variants={itemVariants}>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Proven Soothing Techniques</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {soothingTechniques.map((tech, index) => (
      <motion.div 
        key={index}
        className={`${index % 2 === 0 ? colors.primaryLight : colors.secondaryLight} p-6 rounded-lg border ${index % 2 === 0 ? colors.primaryBorder : colors.secondaryBorder}`}
        variants={itemVariants}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.method}</h3>

        {tech.steps && (
          <>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-3">
              {tech.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            {tech.effectiveness && (
              <p className="text-sm italic text-gray-600">{tech.effectiveness}</p>
            )}
          </>
        )}

        {tech.description && (
          <>
            <p className="text-gray-700 mb-3">{tech.description}</p>
            {tech.benefits && (
              <>
                <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                  {tech.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {tech.types && (
          <>
            <h4 className="font-medium text-gray-800 mb-2">Types:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
              {tech.types.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
            {tech.note && (
              <p className="text-sm italic text-gray-600">{tech.note}</p>
            )}
          </>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>


          {/* Developmental Timeline */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Crying Developmental Timeline</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden text-[#4F39F6]">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Age</th>
                    <th className="py-3 px-4 text-left">Crying Patterns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {developmentalTimeline.map((stage, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{stage.age}</td>
                      <td className="py-3 px-4">
                        <ul className="list-disc pl-5 space-y-1">
                          {stage.notes.map((note, idx) => (
                            <li key={idx}>{note}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* When to Worry */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Seek Medical Help</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden text-[#4F39F6]">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Symptom</th>
                    <th className="py-3 px-4 text-left">Possible Cause</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {whenToWorry.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{item.symptom}</td>
                      <td className="py-3 px-4">{item.possibleCause}</td>
                      <td className="py-3 px-4">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Expert Tips for Parents</h2>
            <div className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Preventing Overstimulation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Watch for early signs like looking away or yawning</li>
                    <li>Limit visitors in early weeks</li>
                    <li>Create quiet periods throughout the day</li>
                    <li>Use dim lighting during fussy periods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Self-Care While Soothing</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Take turns with partner every 30 minutes</li>
                    <li>Use noise-canceling headphones if needed</li>
                    <li>Remember: Crying doesn&apos;t mean bad parenting</li>
                    <li>Place baby safely in crib if you need a break</li>
                  </ul>
                </div>
              </div>
              <div className={`${colors.accentLight} p-4 rounded-lg mt-6`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Important:</span> Never shake a baby. If feeling overwhelmed, put baby in a safe space and take 5 minutes to regroup.
                </p>
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

export default DecodingCryGuide;