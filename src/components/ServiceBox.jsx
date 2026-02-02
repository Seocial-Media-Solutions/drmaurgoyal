"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceBox = ({ service, bgColor }) => {
  return (
    <motion.div 
      className={`rounded-3xl p-8 md:p-10 lg:p-12 w-full md:w-9/10 mx-auto shadow-sm hover:shadow-md transition-shadow mb-6 ${bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left section with icon, title and description */}
        <div className="flex flex-col items-start w-full lg:w-2/5 mb-8 lg:mb-0">
          <div className="text-teal-500 mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {service.icon}
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h2>
          <p className="text-gray-700 md:text-xl text-lg">
            {service.description}
          </p>
          
          {/* Read More button */}
          
          <Link className='flex   w-full place-content-center' href={service.href}>
            <motion.button 
              className="mt-6 mb-5 bg-teal-500 hover:bg-teal-600 text-white  font-medium py-3 px-8 rounded-full flex items-center group transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link> 
          <div className='w-full  h-full flex items-center justify-center'>
  <img className='h-60 ' src={service.imgurl} alt="Service" />
</div>

        </div>
        
        {/* Right section with content */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-8">
            {service.contentType === 'sections' ? (
              service.sections.map((section, index) => (
                <div key={index} className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-teal-100 text-teal-500 w-8 h-8 rounded-full flex items-center justify-center text-lg font-medium">{index + 1}</div>
                    <h4 className="text-xl font-bold text-gray-800">{section.question}</h4>
                  </div>
                  {Array.isArray(section.answer) ? (
                    section.answer.map((paragraph, i) => (
                      <div key={i} className="text-gray-700 pl-11 md:text-xl text-lg mb-4 last:mb-0">
                        {/* Add icons for specific sections */}
                        {(section.question === "Our Vaccination Services Include" || 
                          section.question === "Our Adolescent Health Services Include") ? (
                          <div className="flex items-start mb-2">
                            <span className="text-teal-500 font-bold mr-2 mt-1">✅</span>
                            <span>{paragraph}</span>
                          </div>
                        ) : (
                          <p>{paragraph}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700 md:text-xl text-lg pl-11">{section.answer}</p>
                  )}
                </div>
              ))
            ) : service.contentType === 'bulletList' ? (
              <>
                <h3 className="text-2xl font-bold text-gray-800 pt-2">{service.listTitle}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {service.bulletPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 md:text-xl text-lg">{point}</li>
                  ))}
                </ul>
                {service.whyChooseUs && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 pt-4">{service.whyChooseUs.title}</h3>
                    <ul className="space-y-2">
                      {service.whyChooseUs.points.map((point, index) => (
                        <li key={index} className="text-gray-700 md:text-xl text-lg flex items-start">
                          <span className="text-teal-500 font-bold mr-2">✅</span> {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : service.contentType === 'supportServices' ? (
              service.categories.map((category, catIndex) => (
                <div key={catIndex} className="border-t border-gray-200 pt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="text-teal-500 mr-2">{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((item, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        {/* Image placeholder - you can update these paths */}
                        <div className="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={item.imagePath || `/images/services/${item.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback to placeholder if image doesn't exist
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBzdHJva2U9IiM5Q0E0QUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTQwIDk1TDE2MCA4NUwxNzUgMTAwTDE2NSAxMTBMMTQwIDk1WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K';
                            }}
                          />
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0">
                            {category.title === "Support Services" ? "🩺" : 
                             category.title === "In-House Facilities" ? "🏥" : 
                             "🌟"}
                          </span>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{item.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceBoxes = () => {
  const services = [
    // {
    //   title: "General Pediatrics OPD",
    //   description: "Caring for Your Child's Health, Every Step of the Way",
    //   href: "/services/general-pediatrics-opd",
    //   icon: (
    //     <>
    //       <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    //       <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    //       <path d="M30 18L18 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    //       <path d="M30 30L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    //     </>
    //   ),
    //   imgurl:"images/services/General-Pediatrics-OPD.webp",
    //   contentType: 'sections',
    //   sections: [
    //     {
    //       question: "Expert Pediatric Care",
    //       answer: "At Mayur Childern Hospital, our General Pediatrics OPD is your first stop for expert, compassionate care for children from birth to 18 years. Led by our Medical Director, Dr. Mayur Goyal (MD, Pediatrics, Fellow Neonatology (IAP)), and his team are committed to keeping your child healthy, happy, and thriving."
    //     },
    //     {
    //       question: "Comprehensive Services",
    //       answer: "Whether it's a routine check-up, a minor illness, or developmental concerns, our OPD provides comprehensive evaluation, diagnosis, and treatment — all in a child-friendly environment where your little one feels safe and cared for."
    //     },
    //     {
    //       question: "We Offer",
    //       answer: [
    //         "Treatment for common childhood illnesses like fever, cough, cold, diarrhea, and infections",
    //         "Growth and development monitoring",
    //         "Nutrition and feeding advice",
    //         "Vaccination guidance and immunization",
    //         "Management of allergies, asthma, and chronic conditions",
    //         "Parental counselling and health education"
    //       ]
    //     }
    //   ]
    // },
    {
      title: "24x7 Pediatric Emergency Services",
      description: "Quick, Expert & Compassionate Care When It Matters Most",
      href: "/services/pediatrics-emergency-services",
      imgurl:"images/services/24emergency.webp",
      icon: (
        <>
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 18V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 24H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      contentType: 'bulletList',
      listTitle: "We Handle:",
      bulletPoints: [
        "High fever, dehydration, and severe infections",
        "Breathing difficulties and asthma attacks",
        "Seizures and unconsciousness",
        "Accidental injuries and burns",
        "Allergic reactions",
        "Newborn emergencies"
      ],
      whyChooseUs: {
        title: "Why Choose Us?",
        points: [
          "Pediatrician available round-the-clock",
          "Child-friendly emergency rooms",
          "Advanced NICU & PICU support",
          "Immediate access to pediatric specialists",
          "Fast lab and imaging services"
        ]
      }
    },
    {
      title: "Advanced Pediatric Critical Care (PICU)",
      description: "Specialized Care for Seriously ill Children",
      href: "/services/pediatric-critical-care",
      imgurl:"images/services/PICU.webp",
      icon: (
        <>
          <path d="M32 20C32 22.1217 31.1571 24.1566 29.6569 25.6569C28.1566 27.1571 26.1217 28 24 28C21.8783 28 19.8434 27.1571 18.3431 25.6569C16.8429 24.1566 16 22.1217 16 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 28V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 38H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12C25.1046 12 26 11.1046 26 10C26 8.89543 25.1046 8 24 8C22.8954 8 22 8.89543 22 10C22 11.1046 22.8954 12 24 12Z" fill="currentColor"/>
        </>
      ),
      contentType: 'bulletList',
      listTitle: "Our PICU Specializes In:",
      bulletPoints: [
        "Severe infections and sepsis",
        "Respiratory failure and ventilator support",
        "Acute asthma and severe pneumonia",
        "Seizures and neurological emergencies",
        "Post-surgical critical care",
        "Trauma and accident care",
        "Management of poisoning and metabolic crises"
      ],
      whyChooseUs: {
        title: "Why Choose Our PICU?",
        points: [
          "Dedicated pediatric intensivists available 24x7",
          "Advanced monitoring and life-support technology",
          "Child-friendly, emotionally supportive environment",
          "Multidisciplinary team approach (specialists, nurses, therapists)",
          "Family counseling and support during critical times"
        ]
      }
    },
    {
      title: "Newborn Screening",
      description: "Early Detection, Healthier Tomorrows",
      href: "/services/neonatology-services",
      imgurl:"images/services/Screnning.webp",
      icon: (
        <>
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 12V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 30V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 24H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      contentType: 'bulletList',
      listTitle: "Our Newborn Screening Covers:",
      bulletPoints: [
        "Metabolic disorders (like thyroid and enzyme deficiencies)",
        "Genetic disorders",
        "Blood disorders (such as sickle cell disease)",
        "Hormonal problems",
        "Hearing screening"
      ],
      whyChooseUs: {
        title: "Why Choose Early Screening?",
        points: [
          "Detects hidden conditions early — before symptoms appear",
          "Prevents serious health problems, disabilities, and delays",
          "Simple, safe, and quick tests",
          "Expert counseling and follow-up support if needed"
        ]
      }
    },
    {
      title: "Neonatology Services",
      description: "Expert Care for Your Newborn’s Bright Future",
      href: "/services/neonatology-services",
      imgurl:"images/services/Neoto.webp",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 24H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 18L30 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 30L30 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      contentType: 'sections',
      sections: [
        {
          question: "Advanced Neonatal Intensive Care",
          answer: "Our hospital is equipped with an advanced Neonatal Intensive Care Unit (NICU) designed to provide life-saving support for premature, low birth weight, and critically ill newborns. With cutting-edge technology and a compassionate approach, our neonatology team ensures each baby receives individualized care for the best possible start in life."
        },
        {
          question: "We Care For",
          answer: [
            "Premature and low birth weight babies",
            "Babies with breathing problems, infections, or birth complications",
            "Neonatal jaundice management",
            "Congenital (birth) anomalies",
            "Support after high-risk deliveries",
            "Specialized feeding support and growth monitoring"
          ]
        },
        {
          question: "Why Parents Trust Us",
          answer: [
            "✅ Level III NICU with advanced life-support systems",
            "✅ 24x7 Neonatologist-led team",
            "✅ Family-centered newborn care approach",
            "✅ Dedicated neonatal nursing team",
            "✅ Counseling and emotional support for families"
          ]
        }
      ]
    },
    
    {
      title: "Vaccination Programs",
      description: "Protect Your Family, Protect Your Future",
      href: "/services/vacination-programs",
      imgurl:"images/services/Vaxination.webp",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 12L18 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M18 12L30 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      contentType: 'sections',
      sections: [
        {
          question: "Comprehensive Vaccination Services",
          answer: "We offer comprehensive vaccination services to safeguard the health of your entire family — from newborns to adults. Vaccinations are one of the most effective and simple ways to protect against a wide range of diseases. Our Vaccination Center follows the latest national and international immunization guidelines, ensuring that all age groups receive the safest and most effective vaccines. All vaccines are administered by our expert pediatrician, ensuring the highest standard of care and comfort for your little ones."
        },
        {
          question: "Our Vaccination Services Include",
          answer: [
            "Newborn and Childhood Vaccinations (as per the National Immunization Schedule and IAP recommendations)",
            "Adolescent Vaccines (HPV, Tdap, Meningococcal vaccines, etc.)",
            "Adult Vaccines (Influenza, Hepatitis, Typhoid, Tetanus boosters, COVID-19, etc.)",
            "Travel Vaccinations (for international travel needs)",
            "Special Vaccinations for High-Risk Groups (pregnant women, elderly, people with chronic illnesses)"
          ]
        },
        {
          question: "Why Get Vaccinated at Mayur Childern Hospital?",
          answer: [
            "✅ Certified vaccines stored under strict quality conditions",
            "✅ Expert vaccination counseling and reminders",
            "✅ Safe, child-friendly environment",
            "✅ Emergency support available if needed",
            "✅ Vaccination records and certificates provided"
          ]
        }
      ]
    },
    
    {
      title: "Adolescent Health Services",
      description: "Empowering Teens with Comprehensive Care for a Healthy Future",
      href: "/services/adolescent-health-services",
      imgurl:"images/services/Adoctae.webp",
      icon: (
        <>
          <path d="M24 12V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36 24H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 18L18 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 30L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </>
      ),
      contentType: 'sections',
      sections: [
        {
          question: "Specialized Care for Teens",
          answer: "Adolescence is a crucial time of growth and development, and we are committed to providing expert care and guidance for your teenager's unique health needs. Led by our experienced team of pediatricians, we offer specialized services to support your adolescent's physical, emotional, and mental well-being. From routine check-ups to addressing specific health concerns, our Adolescent Health Services are designed to empower young individuals to take charge of their health, now and in the years to come."
        },
        {
          question: "Our Adolescent Health Services Include",
          answer: [
            "Physical and mental health evaluations (to track growth, puberty, and emotional well-being)",
            "Counseling for stress, anxiety, and behavioral issues",
            "Nutrition and weight management support",
            "Sexual and reproductive health education and care",
            "Vaccination and preventive health check-ups",
            "Management of chronic conditions (asthma, diabetes, etc.)"
          ]
        },
        {
          question: "Why Choose Mayur Childern Hospital for Your Teen's Health?",
          answer: [
            "✅ Comprehensive care for both physical and mental health",
            "✅ Private, confidential consultations with caring pediatricians",
            "✅ Empowering teenagers with knowledge and support for healthy life choices",
            "✅ Specialized counseling for adolescent issues",
            "✅ Convenient appointment scheduling and flexible hours"
          ]
        }
      ]
    },
   
  ];



  const service = {
    title: "Comprehensive Child Care Services",
    description: "Complete Support for Your Child's Health and Development",
    href: "/services/support-services",
    imgurl: "images/services/rightsideimag.webp",
    icon: (
      <>
        <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 18V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 24H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </>
    ),
    contentType: 'supportServices',
    categories: [
      // paste your categories array here exactly as you provided
      {
        title: "Support Services",
        icon: "🌟",
        services: [
          {
            name: "Pediatric Physiotherapy and Rehabilitation",
            description: "Specialized movement therapies for cerebral palsy, developmental delays, sports injuries, and post-surgical rehabilitation.",
            imagePath: "/images/services/physiotherapy.jpeg"
          },
          {
            name: "Child Psychology and Psychiatry",
            description: "Emotional/behavioral support for anxiety, depression, trauma, and neurodevelopmental disorders.",
            imagePath: "/images/services/psychology.webp"
          },
          {
            name: "Diet and Nutrition Counseling",
            description: "Personalized meal plans for obesity, failure to thrive, food allergies, and special dietary needs.",
            imagePath: "/images/services/nutrition.jpeg"
          },
          {
            name: "Speech and Language Therapy",
            description: "Treatment for speech delays, articulation disorders, stuttering, and communication challenges.",
            imagePath: "/images/services/speech-therapy.jpeg"
          },
          {
            name: "Occupational Therapy",
            description: "Improves fine motor skills, sensory processing, and daily living activities for children with special needs.",
            imagePath: "/images/services/occupational-therapy.jpeg"
          },
          {
            name: "Dental Care for Children",
            description: "Preventive care, cavity treatment, orthodontic evaluations, and dental trauma management.",
            imagePath: "/images/services/dental-care.jpeg"
          }
        ]
      },
      {
        title: "In-House Facilities",
        icon: "🌟",
        services: [
          {
            name: "NICU and PICU",
            description: "Level III NICU for premature infants and PICU with advanced life support for critically ill children.",
            imagePath: "/images/services/nicu-picu.webp"
          },
         
          {
            name: "Radiology and Imaging",
            description: "Child-friendly X-ray, pediatric protocols and radiation protection.",
            imagePath: "/images/services/radiology.jpeg"
          },
          {
            name: "Pathology and Laboratory",
            description: "Rapid blood tests, cultures, and specialized pediatric lab investigations.",
            imagePath: "/images/services/laboratory-workbench.jpeg"
          },
          {
            name: "In-house Pharmacy",
            description: "Child-appropriate medications with proper dosing guidance.",
            imagePath: "/images/slide3.webp"
          },
          {
            name: "Vaccination",
            description: "Complete immunization schedules in a comforting environment.",
            imagePath: "/images/services/Vaxination.webp"
          },
          {
            name: "Growth Monitoring",
            description: "Regular tracking of height, weight, and developmental milestones.",
            imagePath: "/images/services/growth-monitoring.webp"
          }
        ]
      },
      {
        title: "Other Special Services",
        icon: "🌟",
        services: [
          {
            name: "Parent Education Programs",
            description: "Workshops on breastfeeding, newborn care, child safety, and positive parenting techniques.",
            imagePath: "/images/services/parent-education.webp"
          },
          {
            name: "Preventive Health Check-ups",
            description: "Comprehensive age-appropriate screenings for early detection of health issues.",
            imagePath: "/images/services/health-checkup.jpeg"
          },
          {
            name: "Asthma and Allergy",
            description: "Personalized asthma action plans, allergy testing, and immunotherapy options.",
            imagePath: "/images/services/asthma-allergy.webp"
          },
          {
            name: "Weight Management",
            description: "Holistic programs for childhood obesity or undernutrition with diet and activity plans.",
            imagePath: "/images/services/weight-management.jpeg"
          },
          {
            name: "Chronic Illness Counseling",
            description: "Support for families managing diabetes, genetic conditions, and long-term health challenges.",
            imagePath: "/images/services/chronic-illness.jpeg"
          }
        ]
      }
    ]
  };


  // Array of background color classes
  const bgColors = [
    "bg-[#F1FBF9]", // Original teal-50
    "bg-[#F9F1FB]", // Light purple
    "bg-[#FBF9F1]", // Light yellow
    "bg-[#F1F8FB]", // Light blue
    "bg-[#FBF1F1]", // Light red
    "bg-[#F9F1FB]", // Light mint
    "bg-[#F1FBF9]"  // Back to teal for the last one
  ];

  return (
    <div className="container mx-auto px-4 bg-white py-12">
      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <ServiceBox 
            key={index} 
            service={service} 
            bgColor={bgColors[index % bgColors.length]} // Cycle through colors
          />
        ))}
      </div>
      <motion.div
      className="rounded-3xl p-8 md:p-10 lg:p-12 w-full md:w-9/10 mx-auto shadow-sm hover:shadow-md transition-shadow mb-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start w-full mb-8">
           
        <div className="w-full flex flex-col items-center justify-center text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    {service.title}
  </h2>
  <p className="text-gray-700 md:text-xl text-lg">
    {service.description}
  </p>
</div>

          <Link className='flex w-full place-content-center' href={service.href}>
            <motion.button
              className="mt-6  bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full flex items-center group transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link>
          {/* <div className='w-full h-full flex items-center justify-center mt-6'>
            <img className='h-60' src={service.imgurl} alt="Service" />
          </div> */}
        </div>

        {/* Mapped Support Services */}
        <div className="w-full">
          {service.categories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-teal-500 mr-2">{category.icon}</span>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.imagePath}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default ServiceBoxes;