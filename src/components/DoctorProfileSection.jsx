'use client';
import Image from 'next/image'
import { color, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const DoctorProfileSection = () => {
  // Set up multiple intersection observers for different sections
  const [headerRef, headerInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const [imageRef, imageInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2,
    delay: 200
  });
  
  const [contentRef, contentInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const [credentialsRef, credentialsInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const [collaborationsRef, collaborationsInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const [contactRef, contactInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const listItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fcf9ff] overflow-hidden relative">
      {/* SVG Background Element - simple fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-2/5 -right-64 opacity-30 pointer-events-none"
      >
        <svg width="1190" height="381" viewBox="0 0 1190 311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 213.749C217.5 284.895 741.344 412.557 911.844 99.5572C999.304 -60.9999 1145.5 13.0001 1179.5 182" stroke="url(#paint0_linear_215_16960)" strokeWidth="80"></path>
          <defs>
            <linearGradient id="paint0_linear_215_16960" x1="1554" y1="-43.1433" x2="4" y2="-43.1434" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FECE53" stopOpacity="0"></stop>
              <stop offset="0.493158" stopColor="#F4B647"></stop>
              <stop offset="1" stopColor="#F1D4E5" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">


          {/* Doctor Image Container with animation */}
          <motion.div 
            className="w-full lg:w-2/5 relative  order-2 lg:order-1"
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="relative  ">
              {/* Doctor image with rounded border */}
              <motion.div 
                className="rounded-lg overflow-hidden relative w-full h-96 md:h-[500px] mx-auto shadow-lg border-4 border-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={imageInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Image 
                  src="/images/second.jpg"
                  alt="Dr. Mayur Goyal - Best Child Specialist in Ajmer" 
                  fill
                  style={{ objectFit: 'fit' }}
                  className="rounded-lg"
                  priority
                />


  
                
              </motion.div>
              
              {/* Experience badge with pop animation */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-teal-500 text-white px-6 py-4 rounded-full shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={imageInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <p className="font-bold text-2xl">15+ Years</p>
                <p className="text-sm">Experience</p>
              </motion.div>
            </div>
            <div className="hidden lg:block">
  <div style={{ marginTop: "150px", position: "relative", width: "100%", height: "400px" }}>
    <Image 
      src="/images/Award.webp"
      alt="Dr. Mayur Goyal - Best Child Specialist in Ajmer" 
      fill
      style={{ objectFit: 'contain' }}
      className="shadow-lg border-4 border-white rounded-[5%]"
      priority
    />
  </div>
</div>
  
          </motion.div>
          
        


          {/* Text content with animations */}
          <div className="w-full lg:w-3/5 order-2 lg:order-2">
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={staggerChildren}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
               <span className='text-2xl md:text-4xl'> Dr. Mayur Kumar Goyal</span><br></br> ( Consultant Pediatrician & Neonatologist )
              </motion.h2>
              <motion.h2
                className="text-1xl md:text-2xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Director  — Mayur Childern Hospital
              </motion.h2>
              <div className="space-y-4 text-justify text-lg text-gray-600">
                <motion.p  variants={fadeInUp}>
                <strong> Dr. Mayur Kumar Goyal </strong> is widely regarded as one of the best child specialists in Ajmer, dedicating his practice to the health and well-being of children since 2017. He is the founder and chief consultant at <strong> Mayur Childern Hospital </strong>, a trusted pediatric facility located near Lions Club, Vaishali Nagar, Ajmer, where families across the city and nearby regions seek specialized care for their little ones.
                </motion.p>
                  <motion.p variants={fadeInUp}>
               Dr. Goyal’s academic journey is both inspiring and commendable. He earned his <strong> MBBS degree from Bharati Vidyapeeth University, Pune,</strong> and went on to complete his <strong>MD in Pediatrics from NIMS University, Jaipur.</strong> To further refine his expertise, he pursued a ,<strong>Fellowship in Neonatology from Neo Clinic Children’s Hospital, Jaipur,</strong> achieving an impressive distinction by securing <strong> 2nd rank at the national level. </strong>His advanced training allows him to focus on the delicate care of newborns, particularly those who are premature, underweight, or in critical need of specialized neonatal management.
                </motion.p>

                 <motion.p variants={fadeInUp}>
              Over the years, Dr. Goyal has gathered invaluable experience by working with some of the country’s most prestigious medical institutions, including <strong> JLN Medical College, Ajmer; Neo Clinic Children Hospital, Jaipur; Fortis Hospital; and Santokba Durlabhji Memorial Hospital. </strong> His professional affiliations with respected organizations such as the <strong> Indian Academy of Pediatrics (IAP), IAP NEOCHAP, National Neonatology Forum (NNF), PGHTN, and the Indian Medical Association (IMA) </strong> reflect his dedication to staying updated with the latest advancements in pediatric and neonatal medicine.
                
                </motion.p>
<motion.p variants={fadeInUp}>
              Known for his compassionate approach and clinical excellence, Dr. Mayur Goyal brings together years of training, skill, and experience to provide comprehensive care for infants and children, with a special focus on <strong> advanced neonatal care and emergency management. </strong> His vision through Mayur Childern Hospital is to offer the highest standard of pediatric healthcare to the community, ensuring that every child receives the attention and treatment they deserve.
                </motion.p>

                {/* <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
                    Why Dr. Goyal Is the <strong>Best Pediatrician in Ajmer</strong>
                  </h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <motion.li variants={listItemAnimation}>
                      <strong>Neonatology & Critical-Care</strong>: Advanced care for premature, underweight, and high-risk newborns.
                    </motion.li>
                    <motion.li variants={listItemAnimation}>
                      <strong>Full-Spectrum Pediatrics</strong>: Management of infectious diseases, allergies, vaccinations, and chronic conditions through adolescence.
                    </motion.li>
                    <motion.li variants={listItemAnimation}>
                      <strong>Top Credentials</strong>: Member of IMA, NNF & IAP—ensuring you get the latest in national and international pediatric protocols.
                    </motion.li>
                  </ul>
                  <motion.p className="mt-3" variants={fadeInUp}>
                    Parents across Ajmer trust him as their <strong>child doctor Ajmer</strong> and <strong>bacho ka doctor Ajmer</strong> for even the most difficult cases referred to him.
                  </motion.p>
                </motion.div> */}
                
                {/* <motion.div 
                  className="pt-6"
                  ref={collaborationsRef}
                  initial="hidden"
                  animate={collaborationsInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-teal-600 mb-4"
                    variants={fadeInUp}
                  >
                    Comprehensive Care & Collaborations
                  </motion.h3>
                  <motion.p variants={fadeInUp}>
                    While Dr. Goyal leads our pediatric wing, we also partner with Ajmer's finest specialists to deliver <strong>holistic care</strong>:
                  </motion.p>
                  <ul className="space-y-3 pl-5 mt-3 list-disc">
                    <motion.li variants={listItemAnimation}>
                      <strong>Best Neurologist in Ajmer</strong> for seizure and developmental-delay workups
                    </motion.li>
                    <motion.li variants={listItemAnimation}>
                      <strong>Best Gastroenterologist in Ajmer</strong> for digestive and nutritional concerns
                    </motion.li>
                    <motion.li variants={listItemAnimation}>
                      <strong>Best Dermatologist in Ajmer</strong> for skin conditions in children
                    </motion.li>
                    <motion.li variants={listItemAnimation}>
                      In-house <strong>physician in Ajmer</strong> services for family medicine and adult follow-up
                    </motion.li>
                  </ul>
                </motion.div> */}
                
                <motion.div 
                  className="pt-6 border-t border-gray-200 mt-6"
                  ref={contactRef}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-teal-600 mb-4"
                    variants={fadeInUp}
                  >
                    Book Your Consultation Today
                  </motion.h3>
                  <motion.p variants={fadeInUp}>
                    Whether you need a <strong>pediatrician in Ajmer</strong>/ a <strong>child specialist doctor in Ajmer</strong>, or you're searching for the <strong>best child doctor in Ajmer</strong>, Dr. Goyal and our team are here to provide expert care.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 bg-white p-4 rounded-lg shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl"><IoLocation style={{ color: "#186FDC" }} /></span>
                      <span className="font-medium">Location:</span>
                    </div>
                    <a
  href="https://maps.app.goo.gl/UHxPkSetKZ2od93X7"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-gray-700 hover:text-blue-600 hover:underline  "
>
  B-15, Aravali Vihar, Near Lions Club, Vaishali Nagar, Ajmer, Rajasthan, 305001
</a>

                  </motion.div>
                  <motion.div 
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 bg-white p-4 rounded-lg shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex  items-center gap-2">
                      <span className="text-xl"><FaPhoneAlt style={{ color: "#186FDC" }}/></span>
                      <span className="font-medium">Call & Book:</span>
                    </div>
                   <div className="space-y-2 text-center">
  <motion.a
    href="tel:+919024988677"
    className=" text-lg text-blue-600  hover:underline"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    +91 90249 88677
  </motion.a>
   <br></br>
  <motion.a
    href="tel:+918955966990"
    className=" text-lg   text-blue-600 hover:underline"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    +91 89559 66990
  </motion.a>
</div>

                  </motion.div>
              
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfileSection;
// 'use client';
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const DoctorProfileSection = () => {
//   // Set up multiple intersection observers for different sections
//   const [headerRef, headerInView] = useInView({ 
//     triggerOnce: true, 
//     threshold: 0.1 
//   });
  
//   const [imageRef, imageInView] = useInView({ 
//     triggerOnce: true, 
//     threshold: 0.2,
//     delay: 200
//   });
  
//   const [contentRef, contentInView] = useInView({ 
//     triggerOnce: true, 
//     threshold: 0.1 
//   });
  
//   const [credentialsRef, credentialsInView] = useInView({ 
//     triggerOnce: true, 
//     threshold: 0.1 
//   });
  
//   const [careRef, careInView] = useInView({ 
//     triggerOnce: true, 
//     threshold: 0.1 
//   });

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8 } }
//   };
  
//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const tagAnimation = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fcf9ff] overflow-hidden relative">
//       {/* SVG Background Element - simple fade in */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         className="absolute top-2/5 -right-64 opacity-30 pointer-events-none"
//       >
//         <svg width="1190" height="381" viewBox="0 0 1190 311" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M4 213.749C217.5 284.895 741.344 412.557 911.844 99.5572C999.304 -60.9999 1145.5 13.0001 1179.5 182" stroke="url(#paint0_linear_215_16960)" strokeWidth="80"></path>
//           <defs>
//             <linearGradient id="paint0_linear_215_16960" x1="1554" y1="-43.1433" x2="4" y2="-43.1434" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#FECE53" stopOpacity="0"></stop>
//               <stop offset="0.493158" stopColor="#F4B647"></stop>
//               <stop offset="1" stopColor="#F1D4E5" stopOpacity="0"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//       </motion.div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header with fade-in animation */}
//         <motion.div 
//           className="mb-4"
//           ref={headerRef}
//           initial="hidden"
//           animate={headerInView ? "visible" : "hidden"}
//           variants={fadeInUp}
//         >
//           <h3 className="text-gray-700 font-medium tracking-wide uppercase text-sm">
//             MEET OUR DOCTOR
//           </h3>
//         </motion.div>
        
//         {/* Main content container */}
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//           {/* Doctor Image Container with animation */}
//           <motion.div 
//             className="w-full lg:w-2/5 relative order-2 lg:order-1"
//             ref={imageRef}
//             initial="hidden"
//             animate={imageInView ? "visible" : "hidden"}
//             variants={fadeIn}
//           >
//             <div className="relative">
//               {/* Doctor image with rounded border */}
//               <motion.div 
//                 className="rounded-lg overflow-hidden relative w-full h-96 md:h-[500px] mx-auto shadow-lg border-4 border-white"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={imageInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <Image 
//                   src="/images/second.jpg"
//                   alt="Dr. Mayur Kumar Goyal - Pediatrician" 
//                   fill
//                   style={{ objectFit: 'fit' }}
//                   className="rounded-lg"
//                   priority
//                 />
//               </motion.div>
              
//               {/* Experience badge with pop animation */}
//               <motion.div 
//                 className="absolute -bottom-6 -right-6 bg-teal-500 text-white px-6 py-4 rounded-full shadow-lg"
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={imageInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//                 transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
//               >
//                 <p className="font-bold text-2xl">15+ Years</p>
//                 <p className="text-sm">Experience</p>
//               </motion.div>
//             </div>
//           </motion.div>
          
//           {/* Text content with animations */}
//           <div className="w-full lg:w-3/5 order-1 lg:order-2">
//             <motion.div
//               ref={contentRef}
//               initial="hidden"
//               animate={contentInView ? "visible" : "hidden"}
//               variants={staggerChildren}
//             >
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//                 variants={fadeInUp}
//               >
//                 Dr. Mayur Kumar Goyal
//               </motion.h2>
//               <motion.h1 
//                 className="text-xl text-teal-600 font-medium mb-6"
//                 variants={fadeInUp}
//               >
//                 Pediatrician & Neonatologist
//               </motion.h1>
              
//               <div className="space-y-4 text-lg md:text-xl text-gray-600">
//                 <motion.p variants={fadeInUp}>
//                   Dr. Mayur Kumar Goyal is an upcoming Pediatrician and one of the best child specialist (pediatrician) doctor in Ajmer and has been practicing since 2017. He practices at Mayur Childern Hospital located near Lions Club, Vaishali Nagar, Ajmer.
//                 </motion.p>
                
//                 <motion.p variants={fadeInUp}>
//                   He completed his MBBS from BVP Pune in 2012, MD (Pediatrics) from NIMS Jaipur in 2016 and Fellowship in Neonatology (IAP) from Neo Clinic Children Hospital Jaipur in 2018 and was ranked 2nd pan India. His specialization lies in care and treatment of newborns, primarily those who are premature, underweight or otherwise in need of acute care.
//                 </motion.p>
                
//                 <motion.p variants={fadeInUp}>
//                   Dr. Mayur worked in various facilities like JLN Medical College- Ajmer, Neo Clinic Children Hospital, Fortis Hospital and Santokba Durlabhji Memorial Hospital. He is also a member of IAP, IAP NEOCHAP, PGHTN and IMA communities. He has good experience in advanced Neonatal care and managed cases of Neonatal emergencies.
//                 </motion.p>
                
//                 <motion.div 
//                   className="pt-4 border-t border-gray-200"
//                   ref={careRef}
//                   initial="hidden"
//                   animate={careInView ? "visible" : "hidden"}
//                   variants={fadeInUp}
//                 >
//                   <motion.h3 
//                     className="text-xl font-semibold text-gray-800 mb-3"
//                     variants={fadeInUp}
//                   >
//                     About Mayur Childern Hospital
//                   </motion.h3>
//                   <motion.p variants={fadeInUp}>
//                     Mayur Childern Hospital was established in 2018. The Care Center offers Immunization, Regular Check-ups, 24 hours admission facilities, day care, pharmacy and laboratory investigations Neonatal Care, Counselling and OPD Consultation for its patients. Mayur Childern Hospital also offers online Personal appointment booking facility. Mayur Childern Hospital offers 24 hours pediatric health care facilities.
//                   </motion.p>
//                 </motion.div>
                
//                 {/* Credentials list with staggered animation */}
//                 <motion.div 
//                   className="pt-6 flex flex-wrap gap-3"
//                   ref={credentialsRef}
//                   initial="hidden"
//                   animate={credentialsInView ? "visible" : "hidden"}
//                   variants={staggerChildren}
//                 >
//                   <motion.span 
//                     className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
//                     variants={tagAnimation}
//                   >
//                     MBBS - BVP Pune
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
//                     variants={tagAnimation}
//                   >
//                     MD Pediatrics - NIMS Jaipur
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
//                     variants={tagAnimation}
//                   >
//                     Fellowship in Neonatology (IAP)
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
//                     variants={tagAnimation}
//                   >
//                     Member of IAP, IAP NEOCHAP
//                   </motion.span>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DoctorProfileSection;