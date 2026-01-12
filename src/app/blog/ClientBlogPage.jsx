// ClientBlogPage.jsx (client component with animations and pagination)
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Baby, Brain, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo } from 'react';

const ClientBlogPage = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Sort blogs by date (newest first) and calculate pagination
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [blogs]);

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    return sortedBlogs.slice(startIndex, startIndex + blogsPerPage);
  }, [sortedBlogs, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    document.getElementById('blog-section')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  // Set up intersection observers for different sections
  const [badgeRef, badgeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [tagsRef, tagsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [credentialsRef, credentialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <motion.div 
                ref={badgeRef}
                initial={{ opacity: 0, y: 10 }}
                animate={badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-semibold mb-4"
              >
                Child Health Insights
              </motion.div>
              
              <motion.h1 
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl pb-2 md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-6"
              >
                Pediatric Health Blog by Dr. Mayur Kumar Goyal
              </motion.h1>
              
              <motion.p 
                ref={descRef}
                initial={{ opacity: 0, y: 30 }}
                animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8 max-w-3xl"
              >
                {`Expert articles on pediatrics, neonatal care, and raising healthy children from one of Ajmer's leading pediatricians.`}
              </motion.p>

              <motion.div 
                ref={tagsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={tagsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                  <Baby className="h-4 w-4 mr-1" />
                  Neonatal Care
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm">
                  <Brain className="h-4 w-4 mr-1" />
                  Child Development
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                  <Stethoscope className="h-4 w-4 mr-1" />
                  Pediatric Advice
                </span>
              </motion.div>
            </div>
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3 relative"
            >
              <div className="aspect-square w-full h-full relative">
                <Image 
                  src="/images/second.jpg" 
                  alt="Dr. Mayur Kumar Goyal - Pediatrician & Neonatologist in Ajmer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
          {/* Doctor credentials */}
          <motion.div 
            ref={credentialsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 md:p-8"
          >
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Dr. Mayur Kumar Goyal</h3>
                <p className="text-blue-100">Pediatrician & Neonatologist</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Mayur Childern Hospital, Ajmer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Blog Section Header */}
        <div id="blog-section" className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Latest Articles ({sortedBlogs.length} total)
            </h2>
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image 
                  src={blog.image || '/images/placeholder.jpg'} 
                  alt={blog.alt || blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fit transition-transform duration-500 group-hover:scale-110"
                  priority={blog.id <= 3}
                />
                {blog.tags && blog.tags[0] && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full">
                    {blog.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-blue-600">{blog.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.heading}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-5 line-clamp-3">
                  {blog.excerpt || blog.content.substring(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags && blog.tags.slice(1).map((tag, index) => (
                    <span key={index} className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read Full Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-1">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                  disabled={page === '...'}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-sm'
                      : page === '...'
                      ? 'text-gray-400 cursor-default'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
              aria-label="Next page"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientBlogPage;