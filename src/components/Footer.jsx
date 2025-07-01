import {
  Footer,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
      <Footer container className="bg-gray-50 dark:bg-gray-800 rounded-none">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row justify-between items-center py-6">
                  {/* Brand */}
                  <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                      <FontAwesomeIcon 
                          icon={faBook} 
                          className="h-6 w-6 text-blue-500 dark:text-blue-400" 
                      />
                      <span className="text-xl font-semibold text-gray-900 dark:text-white">Blogspace</span>
                  </div>
                  
                  {/* Navigation Links */}
                  <FooterLinkGroup className="flex-wrap justify-center">
                      <FooterLink 
                          href="/" 
                          className="text-gray-400 hover:text-white px-3 py-1 "
                      >
                          Home
                      </FooterLink>
                      <FooterLink 
                          href="/blog" 
                          className="text-gray-400 hover:text-white px-3 py-1"
                      >
                          Blog
                      </FooterLink>
                      <FooterLink 
                          href="/about" 
                          className="text-gray-400 hover:text-white px-3 py-1"
                      >
                          About
                      </FooterLink>
                      <FooterLink 
                          href="/contact" 
                          className="text-gray-400 hover:text-white px-3 py-1"
                      >
                          Contact
                      </FooterLink>
                  </FooterLinkGroup>
              </div>
              
              <FooterDivider className="border-gray-800" />
              
              {/* Copyright */}
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center">
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                      © {currentYear} Blogspace. All rights reserved.
                  </p>
              </div>
          </div>
      </Footer>
  );
}