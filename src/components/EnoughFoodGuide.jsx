'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EnoughFoodGuide = () => {
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

  // Color scheme - using warm food-inspired colors
  const colors = {
    primary: 'bg-amber-600',
    primaryLight: 'bg-amber-100',
    primaryBorder: 'border-amber-200',
    secondary: 'bg-orange-600',
    secondaryLight: 'bg-orange-100',
    secondaryBorder: 'border-orange-200',
    accent: 'bg-yellow-500',
    accentLight: 'bg-yellow-100',
    accentBorder: 'border-yellow-200'
  };

  const feedingSigns = [
    {
      type: "Breastfed Babies",
      positiveSigns: [
        "8-12 feedings per day",
        "Audible swallowing sounds",
        "Breasts feel softer after feeding",
        "Baby seems content after meals"
      ],
      warningSigns: [
        "Fewer than 6 wet diapers daily",
        "Dark yellow urine",
        "Fussiness after feeding"
      ]
    },
    {
      type: "Formula-fed Babies",
      positiveSigns: [
        "6-8 feedings per day",
        "Taking 2-3 oz per feeding (newborn)",
        "Steady weight gain",
        "Regular bowel movements"
      ],
      warningSigns: [
        "Leaving over 1 oz consistently",
        "Spitting up large amounts",
        "Crying during feeds"
      ]
    }
  ];

  const weightGuidelines = [
    {
      age: "0-3 months",
      expectedGain: "5-7 oz (140-200g) per week",
      feedingFrequency: "Every 2-3 hours",
      notes: "Birth weight should double by 4-5 months"
    },
    {
      age: "4-6 months",
      expectedGain: "4-5 oz (110-140g) per week",
      feedingFrequency: "Every 3-4 hours",
      notes: "May start solids around 6 months"
    },
    {
      age: "7-12 months",
      expectedGain: "2-3 oz (60-85g) per week",
      feedingFrequency: "4-5 bottles/day + solids",
      notes: "Breastmilk/formula still primary nutrition"
    }
  ];

  const diaperOutput = [
    {
      age: "Day 1",
      wetDiapers: "1-2",
      dirtyDiapers: "1 (meconium)",
      notes: "Sticky black stools"
    },
    {
      age: "Days 2-3",
      wetDiapers: "2-3",
      dirtyDiapers: "2-3",
      notes: "Transitional greenish stools"
    },
    {
      age: "Days 4-5",
      wetDiapers: "4-6",
      dirtyDiapers: "3-4",
      notes: "Yellow seedy stools (breastfed)"
    },
    {
      age: "Week 2+",
      wetDiapers: "6+",
      dirtyDiapers: "3+ (BF) or 1+ (formula)",
      notes: "Pale yellow or tan stools"
    }
  ];

  const whenToWorry = [
    {
      symptom: "Fewer than 6 wet diapers after day 5",
      urgency: "Call pediatrician immediately"
    },
    {
      symptom: "No weight gain by 2 weeks",
      urgency: "Same-day evaluation needed"
    },
    {
      symptom: "Extreme sleepiness (won't wake to feed)",
      urgency: "Emergency evaluation"
    },
    {
      symptom: "Sunken soft spot or dry mouth",
      urgency: "Urgent medical attention"
    }
  ];

  const commonQuestions = [
    {
      question: "How do I know if my baby is swallowing milk?",
      answer: "Listen for soft 'kuh' sounds every 1-3 sucks. Watch for jaw movement to ears and brief pauses while swallowing."
    },
    {
      question: "Is cluster feeding normal?",
      answer: "Yes! Especially evenings for breastfed babies. It boosts supply and satisfies growth spurts (common at 2-3 weeks, 6 weeks)."
    },
    {
      question: "Should I wake a newborn to feed?",
      answer: "Yes, every 2-3 hours until regained birth weight (usually by 2 weeks). Then can follow baby's cues if gaining well."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-white"
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
              Is My Baby Getting Enough to Eat?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              How to recognize proper feeding and signs of hunger/fullness
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatric note:</span> The AAP states adequate weight gain and 6+ wet diapers daily after day 5 are the best indicators of sufficient intake.
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
              src="/images/newborn-care/enough-food.jpg"
              alt="Newborn baby being fed with clear feeding cues"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recognizing Proper Nutrition</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                New parents often worry about feeding adequacy. According to lactation and pediatric experts:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Stomach size starts at cherry (day 1), grows to walnut (day 3), then apricot (1 week)</li>
                <li>Colostrum (first milk) is measured in teaspoons but packed with nutrients</li>
                <li>Healthy newborns may lose up to 7-10% birth weight before gaining</li>
                <li>Feeding cues matter more than strict schedules</li>
              </ul>
              <div className={`${colors.accentLight} border-l-4 ${colors.accentBorder} p-4 rounded-r-lg`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Key fact:</span> Babies need about 2.5 oz of milk per pound of body weight daily (150-200ml/kg). Watch the baby, not the clock!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feeding Signs */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Signs of Good Feeding</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {feedingSigns.map((method, index) => (
                <motion.div 
                  key={index}
                  className={`${index === 0 ? colors.primaryLight : colors.secondaryLight} p-6 rounded-lg border ${index === 0 ? colors.primaryBorder : colors.secondaryBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.type}</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Positive Signs:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {method.positiveSigns.map((sign, idx) => (
                        <li key={idx}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Warning Signs:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {method.warningSigns.map((sign, idx) => (
                        <li key={idx}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Weight Guidelines */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Weight Gain Expectations</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden text-[#E17100]">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Age</th>
                    <th className="py-3 px-4 text-left">Expected Gain</th>
                    <th className="py-3 px-4 text-left">Feeding Frequency</th>
                    <th className="py-3 px-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {weightGuidelines.map((stage, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{stage.age}</td>
                      <td className="py-3 px-4">{stage.expectedGain}</td>
                      <td className="py-3 px-4">{stage.feedingFrequency}</td>
                      <td className="py-3 px-4">{stage.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Diaper Output */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Diaper Output Guide</h2>
            <div className="grid md:grid-cols-4 gap-4">
            {diaperOutput.map((day, index) => (
  <motion.div 
    key={index}
    className={`bg-blue-50 p-4 rounded-lg border border-blue-200 text-center`}
    variants={itemVariants}
  >
    <h3 className="font-semibold text-gray-900 mb-2">{day.age}</h3>
    <div className="mb-1">
      <span className="font-medium text-gray-800">Wet: {day.wetDiapers}</span> 
    </div>
    <div className="mb-1">
      <span className="font-medium text-gray-800">Dirty: {day.dirtyDiapers}</span>
    </div>
    <p className="text-sm text-gray-700 mt-2">{day.notes}</p>
  </motion.div>
))}

            </div>
          </motion.div>

          {/* Hunger Cues */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recognizing Hunger & Fullness</h2>
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Hunger Cues</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Smacking or licking lips</li>
                    <li>Rooting (turning head with open mouth)</li>
                    <li>Bringing hands to mouth</li>
                    <li>Increased alertness</li>
                    <li>Sucking motions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fullness Signals</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Slowing or stopping sucking</li>
                    <li>Turning head away</li>
                    <li>Closing mouth</li>
                    <li>Relaxed hands and body</li>
                    <li>Falling asleep contentedly</li>
                  </ul>
                </div>
              </div>
              <div className={`${colors.accentLight} p-4 rounded-lg mt-6`}>
                <p className="text-gray-800">
                  <span className="font-semibold">Late hunger cue:</span> Crying is a late sign! Try to feed before this stage. A too-hungry baby may struggle to latch.
                </p>
              </div>
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
                <tbody className="divide-y divide-gray-200 text-[#E17100]">
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

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Feeding Questions</h2>
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

export default EnoughFoodGuide;