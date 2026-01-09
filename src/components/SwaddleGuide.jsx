'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SwaddleGuide = () => {
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

  const steps = [
    {
      id: 1,
      title: "Spread the blanket",
      description: [
        "Use a lightweight, breathable blanket (muslin works well)",
        "Lay it flat in a diamond shape on a safe surface",
        "Fold down the top corner about 6 inches to create a straight edge"
      ]
    },
    {
      id: 2,
      title: "Position your baby",
      description: [
        "Place baby on their back with neck supported by the folded edge",
        "Ensure arms are in a natural position at sides",
        "Keep legs in frog-like position for healthy hip development"
      ]
    },
    {
      id: 3,
      title: "Wrap right side",
      description: [
        "Gently hold baby's right arm straight against their side",
        "Pull the right corner across body at shoulder level",
        "Tuck securely under baby's left side",
        "Keep the wrap snug but not tight - you should fit two fingers between blanket and chest"
      ]
    },
    {
      id: 4,
      title: "Fold bottom up",
      description: [
        "Lift the bottom corner up over baby's feet",
        "Tuck it into the top of the swaddle near shoulder",
        "Leave room for legs to move freely in frog position",
        "Avoid straightening legs or forcing them together"
      ]
    },
    {
      id: 5,
      title: "Wrap left side",
      description: [
        "Hold baby's left arm gently against their side",
        "Bring left corner across body and tuck under back",
        "Ensure baby can breathe easily and hips can move",
        "The swaddle should feel like a firm hug, not a restraint"
      ]
    }
  ];

  const benefits = [
    "Mimics womb environment for better transition to outside world",
    "Reduces startle reflex that can wake sleeping babies",
    "May help babies sleep longer stretches (30-90 minutes more)",
    "Can decrease excessive crying by up to 28%",
    "Helps maintain back-sleeping position (reduces SIDS risk when done properly)"
  ];

  const whenToStop = [
    "When baby shows signs of rolling over (usually 2-4 months)",
    "If baby consistently breaks out of swaddle",
    "When baby seems frustrated with being wrapped",
    "If baby shows preference for sleeping with arms free"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Hero Section - Now visible on all devices */}
      <section className="relative py-12 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            variants={itemVariants}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How do I swaddle my baby?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              The complete guide to safe, effective swaddling for better newborn sleep
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Pediatrician-approved:</span> Follow these techniques to create a safe, comforting swaddle.
              </p>
            </div>
          </motion.div>
          
          {/* Image - Now always visible */}
          <motion.div 
            className="w-full md:w-1/2 border-l-[#0371AB]   md:border-l-5 relative aspect-square min-h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/newborn-care/swaddle-baby.png"
              alt="Properly swaddled newborn baby sleeping peacefully"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Swaddle?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Swaddling is an ancient practice that provides newborns with security and comfort similar to the womb environment. When done correctly, it can:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
              <p>
                <strong>Note:</strong> The American Academy of Pediatrics recommends stopping swaddling when babies show signs of rolling over, typically between 2-4 months.
              </p>
            </div>
          </motion.div>

          {/* Step-by-Step Guide */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Step-by-Step Swaddling Technique</h2>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {step.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Section */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Critical Safety Guidelines
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Always</strong> place swaddled babies on their back to sleep</li>
                <li>Ensure the swaddle allows for hip movement (hips should be able to bend up and out)</li>
                <li>Check baby&apos;s temperature frequently - overheating increases SIDS risk</li>
                <li>The swaddle should be snug around arms but loose around hips and legs</li>
                <li>Never cover baby&apos;s head or face with the swaddle blanket</li>
                <li>Stop swaddling immediately if baby shows any signs of rolling</li>
              </ul>
            </div>
          </motion.div>

          {/* When to Stop */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When to Transition Away from Swaddling</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {whenToStop.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700">
                <strong>Transition tip:</strong> Try swaddling with one arm out for a few nights before completely stopping.
              </p>
            </div>
          </motion.div>

          {/* Alternatives */}
          <motion.div 
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Safe Swaddling Alternatives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sleep Sacks
                </h3>
                <p className="text-gray-600 mb-2">Wearable blankets that provide warmth without restricting movement:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Allow natural arm movement</li>
                  <li>Safe for rolling babies</li>
                  <li>Available in different TOG ratings for temperature control</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transitional Swaddles
                </h3>
                <p className="text-gray-600 mb-2">Products that gradually phase out swaddling:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Arm-up designs (like Love to Dream)</li>
                  <li>Convertible swaddle-sleep sacks</li>
                  <li>Weighted sleep sacks (use only those designed for infants)</li>
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

export default SwaddleGuide;