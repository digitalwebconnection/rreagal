"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="-mt-40  ">
                <img src="/relogopng.png" alt=""  className="  w-160 h-100"/>
              </div>

              <p className="text-primary-foreground/80 mb-4 -mt-30">
                Your Weekend Paradise - Premium plots and villas in the heart of Gujarat's emerging real estate hub.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#home" className="hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-accent transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#site-plan" className="hover:text-accent transition-colors">
                    Site Plan
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-accent transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-accent transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-accent transition-colors">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Premium Plots</li>
                <li>Villa Plots</li>
                <li>Corner Plots</li>
                <li>Site Visits</li>
                <li>Investment Consultation</li>
                <li>Documentation Support</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>State Highway SH-74, Mankol, Ahmedabad, Gujarat</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <p>info@mankol.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm">© 2024 Mankol. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  RERA Disclaimer
                </a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-primary-foreground/60 text-xs">
                RERA Application in Process. This is a conceptual presentation for reference purposes only.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, make an
                  inquiry, or contact us for support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, and communicate with you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information Sharing</h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at info@mankol.com or +91 98765
                  43210.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
