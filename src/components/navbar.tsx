"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail, ChevronDown, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    name: 'About',
    href: '/about',
    icon: <User className="w-4 h-4" />
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <Code className="w-4 h-4" />
  },
];

export default function ProjectNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const currentItem = navigationItems.find(item => item.href === pathname);
    if (currentItem) {
      setActiveSection(currentItem.name);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName);
    setIsMobileMenuOpen(false);
  };

  const handleHireMeClick = () => {
    setIsContactOpen(true);
  };

  const contactInfo = {
    email: "futureiitianisme@gmail.com",
    phone: "+91 9942575131",
    location: "Bokaro, India",
    social: {
      github: "https://github.com/SATVIKsynopsis",
      linkedin: "https://www.linkedin.com/in/satvik-upadhyaya-073978334/",
      twitter: "https://x.com/SatvikUpadhyaya"
    }
  };

  return (
    <>
      {/* Background Lines Pattern */}
      <div className='bg-neutral-950'>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="20%" x2="100%" y2="60%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
          <line x1="0" y1="80%" x2="100%" y2="40%" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
        </svg>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-900/50 shadow-2xl' 
          : 'bg-neutral-950/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <div className={`flex items-center transition-all duration-700 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <Link href="/" className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-neutral-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <div className="w-10 h-10 bg-neutral-900/80 rounded-lg flex items-center justify-center shadow-lg border border-neutral-800/50 group-hover:border-neutral-700/70 transition-all duration-300">
                    <span className="text-neutral-700 font-bold text-lg">S</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-neutral-500 ">
                      Satvik Upadhyaya
                    </h1>
                    <p className="text-xs text-neutral-500">Software Developer</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100 + 200}ms`,
                    animationDelay: `${index * 100 + 200}ms`
                  }}
                >
                  {/* Active background */}
                  <div className={`absolute inset-0 rounded-xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/40 transition-all duration-300 ${
                    activeSection === item.name 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100'
                  }`}></div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center space-x-2">
                    <span className={`transition-colors duration-300 ${
                      activeSection === item.name 
                        ? 'text-neutral-300' 
                        : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`font-medium transition-colors duration-300 ${
                      activeSection === item.name 
                        ? 'text-neutral-200' 
                        : 'text-neutral-400 group-hover:text-neutral-200'
                    }`}>
                      {item.name}
                    </span>
                  </div>

                  {/* Active indicator */}
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neutral-500 rounded-full transition-all duration-300 ${
                    activeSection === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}></div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`hidden md:block transition-all duration-700 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <button 
                onClick={handleHireMeClick}
                className="relative group px-6 py-2 bg-neutral-900/80 hover:bg-neutral-800/80 text-neutral-200 rounded-xl font-medium border border-neutral-800/50 hover:border-neutral-700/70 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-neutral-800/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group p-2 rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-neutral-700/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/50">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group block ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 rounded-xl bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <span className={`transition-colors duration-300 ${
                    activeSection === item.name 
                      ? 'text-neutral-300' 
                      : 'text-neutral-400 group-hover:text-white'
                  }`}>
                    {item.icon}
                  </span>
                  <span className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name 
                      ? 'text-white' 
                      : 'text-neutral-300 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-neutral-800/50">
              <button 
                onClick={handleHireMeClick}
                className="w-full px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl font-medium border border-neutral-600/30 shadow-lg transition-all duration-300"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-neutral-900/95 border border-neutral-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-neutral-400" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-100 mb-2">Get In Touch</h2>
              <p className="text-neutral-400">Let's work together on your next project</p>
            </div>

            {/* Contact Info */}
            <div className="p-6 space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-neutral-200 hover:text-neutral-100 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/30">
                <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-neutral-200">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-neutral-800">
              <p className="text-neutral-400 mb-3 text-sm">Follow me on</p>
              <div className="flex space-x-3">
                <a
                  href={contactInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-neutral-400" />
                </a>
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-neutral-400" />
                </a>
                <a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg border border-neutral-700/30 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 border-t border-neutral-800">
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xl font-medium border border-neutral-700 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1">
        <div 
          className="h-full bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-600 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
      </div>
    </>
  );
}