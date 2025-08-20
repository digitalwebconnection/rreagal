"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Eye, Lock, FileText, Users, Database } from "lucide-react"

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false)

  const privacySections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, make an inquiry, or contact us. This includes your name, email address, phone number, and any other information you choose to provide.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information Sharing",
      content:
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted partners who assist us in operating our website and conducting our business.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your Rights",
      content:
        "You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us at any time by following the instructions in those communications.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent">
              Privacy & Security
            </h2>
          </div>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our priority. We are committed to protecting your personal information and being transparent
            about how we collect, use, and share your data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {privacySections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-amber-700">{section.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-amber-900">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 leading-relaxed text-center">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Read Full Privacy Policy
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-amber-900 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Complete Privacy Policy
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] pr-4">
                <div className="space-y-6 text-amber-800">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-900">1. Information Collection</h3>
                    <p className="leading-relaxed mb-4">We collect information you provide directly to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Create an account or register for our services</li>
                      <li>Make an inquiry about our properties</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Contact us through our website or other channels</li>
                      <li>Participate in surveys, contests, or promotional activities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-900">2. Use of Information</h3>
                    <p className="leading-relaxed mb-4">We use your personal information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To provide and maintain our services</li>
                      <li>To process your inquiries and transactions</li>
                      <li>To send you important notices and communications</li>
                      <li>To improve our website and services</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-900">3. Data Protection</h3>
                    <p className="leading-relaxed">
                      We implement industry-standard security measures to protect your personal information. This
                      includes encryption, secure servers, and regular security audits. We limit access to your personal
                      information to employees and contractors who need it to perform their job functions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-900">4. Contact Information</h3>
                    <p className="leading-relaxed">
                      If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                      <p>
                        <strong>Email:</strong> privacy@mankol.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </p>
                      <p>
                        <strong>Address:</strong> 123 Privacy Street, Secure City, SC 12345
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-amber-600 pt-4 border-t border-amber-200">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
