'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const RoomTemperatureGuide = () => {
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

  // Color scheme - using blue tones for temperature theme
  const colors = {
    primary: 'bg-blue-600',
    primaryLight: 'bg-blue-100',
    primaryBorder: 'border-blue-200',
    secondary: 'bg-indigo-600',
    secondaryLight: 'bg-indigo-100',
    secondaryBorder: 'border-indigo-200',
    accent: 'bg-cyan-500',
    accentLight: 'bg-cyan-100',
    accentBorder: 'border-cyan-200'
  };

  const temperatureRecommendations = [
    {
      age: "Newborns (0-3 months)",
      range: "68-72°F (20-22°C)",
      considerations: "Very sensitive to temperature changes, need consistent warmth",
      dressing: "Onesie + swaddle or sleep sack"
    },
    {
      age: "Infants (3-12 months)",
      range: "65-70°F (18-21°C)",
      considerations: "Can tolerate slightly cooler temps as they grow",
      dressing: "Footed pajamas or wearable blanket"
    },
    {
      age: "Toddlers (1-3 years)",
      range: "62-68°F (16-20°C)",
      considerations: "More active, can overheat if too warm",
      dressing: "Light pajamas + light blanket if needed"
    }
  ];

  const temperatureDangers = [
    {
      issue: "Overheating",
      signs: [
        "Sweating",
        "Damp hair",
        "Flushed cheeks",
        "Rapid breathing",
        "Heat rash"
      ],
      risks: "Increased SIDS risk",
      action: "Remove layers, lower temp by 2-3°F"
    },
    {
      issue: "Too Cold",
      signs: [
        "Cool chest/back",
        "Pale skin",
        "Fussiness",
        "Reduced activity",
        "Cold hands/feet (normal)"
      ],
      risks: "Disrupted sleep, hypothermia risk",
      action: "Add layer, increase temp by 2-3°F"
    }
  ];

  const whenToWorry = [
    {
      symptom: "Baby feels hot to touch with fever",
      urgency: "Call pediatrician immediately"
    },
    {
      symptom: "Room temperature below 60°F (15°C)",
      urgency: "Use safe heating methods immediately"
    },
    {
      symptom: "Persistent sweating despite cool room",
      urgency: "Medical evaluation needed"
    },
    {
      symptom: "Blue lips or extremities",
      urgency: "Emergency care required"
    }
  ];

  const commonQuestions = [
    {
      question: "How can I accurately measure nursery temperature?",
      answer: "Place a digital thermometer at crib level, away from windows/heaters. Smart monitors can track trends."
    },
    {
      question: "Is it better to err on warmer or cooler side?",
      answer: "Slightly cooler is safer than too warm. Overheating is a greater SIDS risk factor than being slightly cool."
    },
    {
      question: "How does room humidity affect temperature comfort?",
      answer: "Ideal humidity is 40-60%. Dry air feels cooler, humid air retains heat. Use a humidifier if needed."
    }
  ];

  const temperatureMonitoringTools = [
    {
      name: "Digital Thermometer",
      features: [
        "Accurate readings",
        "Memory function",
        "Portable"
      ],
      placement: "Crib-side at baby's level"
    },
    {
      name: "Wi-Fi Baby Monitor",
      features: [
        "Real-time alerts",
        "Historical data",
        "Remote monitoring"
      ],
      placement: "Wall-mounted near crib"
    },
    {
      name: "Smart Thermostat",
      features: [
        "Automated schedules",
        "Room-specific control",
        "Energy efficient"
      ],
      placement: "Central location in nursery"
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
        <div className="max-w-6xl mx-auto   flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2  order-2 md:order-1"
            variants={itemVariants}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Ideal Nursery Temperature
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Creating the perfect sleep environment for your baby
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> The American Academy of Pediatrics recommends 68-72°F (20-22°C) for newborns to reduce SIDS risk.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full border-l-[#ff9400]   md:border-l-5 md:w-1/2 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/room-temperature.png"
              alt="Nursery with thermometer showing ideal temperature"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Room Temperature Matters</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Babies, especially newborns, can&apos;t regulate their body temperature as effectively as adults. Research shows:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Overheating increases SIDS risk by up to 4.5 times</li>
                <li>Newborns lose heat 4 times faster than adults</li>
                <li>Temperature fluctuations disrupt sleep cycles</li>
                <li>Proper temperature supports healthy weight gain</li>
              </ul>
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> A baby&apos;s room temperature is more critical than outdoor temperature since they spend 16-20 hours/day sleeping.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Temperature Recommendations */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Recommended Temperature Ranges</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {temperatureRecommendations.map((stage, index) => (
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
                  <div className="flex items-center mb-4">
                    <div className={`text-2xl font-bold mr-2 ${
                      index === 0 ? 'text-blue-600' : 
                      index === 1 ? 'text-indigo-600' : 
                      'text-cyan-600'
                    }`}>
                      {stage.range}
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Key Considerations:</h4>
                  <p className="text-gray-700 mb-3">{stage.considerations}</p>
                  <h4 className="font-medium text-gray-800 mb-1">Recommended Dressing:</h4>
                  <p className="text-gray-700">{stage.dressing}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Temperature Dangers */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Temperature Extremes to Avoid</h2>
            <div className="space-y-6">
              {temperatureDangers.map((danger, index) => (
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{danger.issue}</h3>
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-800 mb-1">Warning Signs:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {danger.signs.map((sign, idx) => (
                            <li key={idx}>{sign}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-3">
                        <h4 className="font-medium text-gray-800 mb-1">Risks:</h4>
                        <p className="text-gray-700">{danger.risks}</p>
                      </div>
                      <div className={`${colors.accentLight} px-3 py-2 rounded-lg`}>
                        <p className="font-medium text-gray-800">Action: <span className="font-normal">{danger.action}</span></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Monitoring Tools */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Temperature Monitoring Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {temperatureMonitoringTools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                  <h4 className="font-medium text-gray-800 mb-1">Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                    {tool.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-medium text-gray-800 mb-1">Ideal Placement:</h4>
                  <p className="text-gray-700">{tool.placement}</p>
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
                <tbody className="divide-y divide-gray-200 text-[#155DFC]">
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

          {/* Temperature Adjustment Tips */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Adjusting Room Temperature</h2>
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cooling the Nursery</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Use blackout curtains during daytime</li>
                    <li>Place a bowl of ice before a fan (out of reach)</li>
                    <li>Open windows at night if safe</li>
                    <li>Use breathable cotton sheets</li>
                    <li>Run AC on low with indirect airflow</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Warming the Nursery</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Use a space heater with auto-shutoff (3+ feet from crib)</li>
                    <li>Install thermal curtains</li>
                    <li>Place a hot water bottle in crib 30 mins before bedtime (remove before baby)</li>
                    <li>Use wool or fleece sleep sacks</li>
                    <li>Add a humidifier for dry heat</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Safety note:</span> Never place heating/cooling devices near crib. Maintain 3-foot clearance from all baby equipment.
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

export default RoomTemperatureGuide;