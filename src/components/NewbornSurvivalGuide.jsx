'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NewbornSurvivalGuide = () => {
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

  // Color scheme - using comforting, nurturing colors
  const colors = {
    primary: 'bg-purple-600',
    primaryLight: 'bg-purple-100',
    primaryBorder: 'border-purple-200',
    secondary: 'bg-pink-600',
    secondaryLight: 'bg-pink-100',
    secondaryBorder: 'border-pink-200',
    accent: 'bg-rose-500',
    accentLight: 'bg-rose-100',
    accentBorder: 'border-rose-200'
  };

  const survivalTips = [
    {
      title: "Sleep in Shifts",
      content: "Partner takes 8pm-1am, you take 1am-6am. This guarantees each parent gets 5 uninterrupted hours.",
      icon: "⏰"
    },
    {
      title: "The 5 S's for Soothing",
      content: "Swaddle, Side/Stomach position (in arms), Shush, Swing, Suck (thumb or pacifier). These help calm fussy babies.",
      icon: "👶"
    },
    {
      title: "Meal Prep Before Birth",
      content: "Freeze 2 weeks of meals. Breakfast burritos, soups, and casseroles are lifesavers when exhausted.",
      icon: "🍲"
    },
    {
      title: "Accept All Help",
      content: "Let others do laundry, dishes, or hold baby while you shower. Say yes to every reasonable offer.",
      icon: "🙌"
    },
    {
      title: "Wear Your Baby",
      content: "Baby carriers allow hands-free time while keeping baby content. Practice with doll before birth.",
      icon: "👝"
    },
    {
      title: "Lower Your Standards",
      content: "Dishes can wait. Perfect housekeeping is impossible. Focus on survival basics: feed, sleep, hydrate.",
      icon: "🧹"
    },
    {
      title: "Track Feedings/Diapers",
      content: "Use apps like Huckleberry to spot patterns and reassure yourself baby is getting enough.",
      icon: "📱"
    },
    {
      title: "Cluster Feeding is Normal",
      content: "Evening marathon feedings (5-9pm) help boost supply and satisfy growth spurts. It's not you - it's biology.",
      icon: "🍼"
    },
    {
      title: "Take Shifts for Crying",
      content: "When overwhelmed, tag out after 20 minutes. Fresh arms often calm baby when tired ones can't.",
      icon: "🔄"
    },
    {
      title: "This is Temporary",
      content: "The 'fourth trimester' lasts 12 weeks. By 3 months, babies sleep longer and interact more.",
      icon: "⏳"
    }
  ];

  const mustHaveProducts = [
    {
      category: "Sleep Essentials",
      items: [
        "Swaddle blankets (muslin or Velcro)",
        "White noise machine",
        "Bassinet with easy access",
        "Blackout curtains"
      ]
    },
    {
      category: "Feeding Helpers",
      items: [
        "Nursing pillow (even for bottle feeding)",
        "Haakaa silicone pump",
        "Slow-flow bottles",
        "Burp cloths (minimum 10)"
      ]
    },
    {
      category: "Sanity Savers",
      items: [
        "Hands-free pumping bra",
        "Giant water bottle with straw",
        "One-handed snacks",
        "Long phone charger"
      ]
    }
  ];

  const mentalHealthTips = [
    {
      tip: "Baby Blues vs PPD",
      detail: "Mood swings days 3-5 are normal. Persistent sadness/anger beyond 2 weeks warrants professional help."
    },
    {
      tip: "Daily Fresh Air",
      detail: "Even 5 minutes outside improves mood. Walk to mailbox or sit on porch with baby."
    },
    {
      tip: "The 5-5-5 Rule",
      detail: "Will this matter in 5 hours? 5 days? 5 weeks? Helps prioritize in sleep-deprived state."
    },
    {
      tip: "Text Don't Call",
      detail: "Set messaging status: 'We're in newborn bubble - texts welcome, calls later!'"
    }
  ];

  const partnerTips = [
    "Take over diaper changes when home",
    "Handle all nighttime burping after feeds",
    "Be the gatekeeper for visitors",
    "Learn baby's hunger/sleep cues too",
    "Give uninterrupted shower time daily",
    "Say 'You're doing great' often"
  ];

  const whenToCallDoctor = [
    {
      symptom: "Mom: Fever >100.4°F, heavy bleeding, or severe headache",
      urgency: "Call immediately - could indicate infection"
    },
    {
      symptom: "Baby: No wet diapers for 12+ hours",
      urgency: "Urgent call - risk of dehydration"
    },
    {
      symptom: "Yellow skin (jaundice) spreading to arms/legs",
      urgency: "Same-day evaluation needed"
    },
    {
      symptom: "Rectal temperature <97°F or >100.4°F",
      urgency: "Immediate medical attention"
    },
    {
      symptom: "Inability to console baby for 2+ hours",
      urgency: "Call for advice - could indicate pain"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white"
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
              10 Lifesaving Tips for Surviving the Newborn Stage
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Practical strategies from parents who&apos;ve been there
            </p>
            <div className={`${colors.primaryLight} border-l-4 ${colors.primaryBorder} p-4 rounded-r-lg mb-8`}>
              <p className="text-gray-800">
                <span className="font-semibold">Pediatrician note:</span> The first 40 days are about survival, not perfection. Your only jobs are feeding baby, resting, and bonding - everything else can wait.
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 border-l-[#F00480]   md:border-l-5 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/parents-with-newborn.webp"
              alt="happy parents with newborn"
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
        <div className="max-w-4xl  mx-auto">
          {/* Survival Tips */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Essential Survival Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {survivalTips.map((tip, index) => (
                <motion.div 
                  key={index}
                  className={`${index % 3 === 0 ? colors.primaryLight : index % 3 === 1 ? colors.secondaryLight : colors.accentLight} p-6 rounded-lg border ${index % 3 === 0 ? colors.primaryBorder : index % 3 === 1 ? colors.secondaryBorder : colors.accentBorder}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl ">{tip.icon}</span>
                    <div>
                      <h3 className="text-xl  font-[5px] text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-700">{tip.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Must-Have Products */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Newborn Must-Haves (That Actually Help)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {mustHaveProducts.map((category, index) => (
                <motion.div 
                  key={index}
                  className={`${index === 0 ? colors.primaryLight : index === 1 ? colors.secondaryLight : colors.accentLight} p-6 rounded-lg border ${index === 0 ? colors.primaryBorder : index === 1 ? colors.secondaryBorder : colors.accentBorder}`}
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {category.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder} mt-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pro Tip: The 10% Rule</h3>
              <p className="text-gray-700">
                Only 10% of baby products marketed as &quot;essential&quot; truly are. Borrow or buy secondhand first - you&apos;ll discover what actually works for YOUR baby. The $300 bassinet isn&apos;t necessarily better than the $100 one.
              </p>
            </div>
          </motion.div>

          {/* Mental Health */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Protecting Your Mental Health</h2>
            <div className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}>
              <div className="grid md:grid-cols-2 gap-6">
                {mentalHealthTips.map((item, index) => (
                  <div key={index}>
                    <h3 className="  text-gray-800 mb-2 font-bold ">{item.tip}</h3>
                    <p className="text-gray-700">{item.detail}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Partners: How to Truly Help</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {partnerTips.map((tip, index) => (
                    <div key={index} className={`${colors.accentLight} p-3 rounded-lg text-center`}>
                      <p className="text-gray-800 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* When to Worry */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Call the Pediatrician</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className={`${colors.primary} text-white`}>
                  <tr>
                    <th className="py-3 px-4 text-left">Symptom</th>
                    <th className="py-3 px-4 text-left">Urgency Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-[#9810FA]">
                  {whenToCallDoctor.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? `${colors.primaryLight} bg-opacity-50` : 'bg-white'}>
                      <td className="py-3   px-4 font-medium">{item.symptom}</td>
                      <td className="py-3    px-4">{item.urgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className={`${colors.accentLight} p-6 rounded-lg border ${colors.accentBorder} mt-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Remember: You Know Your Baby Best</h3>
              <p className="text-gray-700">
                Never hesitate to call about concerns, even if not on this list. Pediatric staff expect 10-20 calls in the first month - you won&apos;t bother them. Better safe than sorry with newborns.
              </p>
            </div>
          </motion.div>

          {/* Encouragement */}
          <motion.div 
            className={`${colors.primary} text-white p-8 rounded-lg mb-16 text-center`}
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">You Will Get Through This</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              The days are long but the years are short. What feels impossible now will become routine in just weeks. One hour at a time.
            </p>
            <div className="text-purple-200 text-sm">
              <p>Parenting mantra: &quot;This is a phase. This is temporary. We can do hard things.&quot;</p>
            </div>
          </motion.div>

          {/* Final Tips */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Final Pro Tips from Veteran Parents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${colors.primaryLight} p-6 rounded-lg border ${colors.primaryBorder}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Sleep Deprivation</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Keep a water bottle and snacks by nursing/bottle station</li>
                  <li>Sleep when baby sleeps (yes, really) - chores can wait</li>
                  <li>15-minute power nap &gt; scrolling phone when exhausted</li>

                </ul>
              </div>
              <div className={`${colors.secondaryLight} p-6 rounded-lg border ${colors.secondaryBorder}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Emotional Survival</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Take daily &quot;proof of life&quot; photos - you&apos;ll want them later</li>
                  <li>Text other new parents - you&apos;re not alone</li>
                  <li>Remember: fed is best, safe sleep is flexible, and love matters more than perfection</li>
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

export default NewbornSurvivalGuide;