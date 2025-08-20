"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Send } from "lucide-react"

interface InquiryPopupProps {
  children: React.ReactNode
  triggerText?: string
}

export function InquiryPopup({ children, triggerText = "Schedule Site Visit" }: InquiryPopupProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "site-visit",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you within 24 hours.")
    setOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "site-visit",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-2 border-primary/20">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-center text-primary mb-2">Quick Inquiry</DialogTitle>
          <p className="text-center text-muted-foreground text-sm">Get instant callback from our property experts</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="popup-name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="popup-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="popup-phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="popup-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="popup-email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="popup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="popup-interest" className="text-sm font-medium">
              I'm Interested In
            </Label>
            <select
              id="popup-interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-input rounded-md bg-background text-foreground text-sm"
            >
              <option value="site-visit">Schedule Site Visit</option>
              <option value="plots">Premium Plots</option>
              <option value="villas">Villa Plots</option>
              <option value="corner">Corner Plots</option>
              <option value="brochure">Download Brochure</option>
              <option value="pricing">Pricing Information</option>
            </select>
          </div>

          <div>
            <Label htmlFor="popup-message" className="text-sm font-medium">
              Message (Optional)
            </Label>
            <Textarea
              id="popup-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements..."
              rows={3}
              className="mt-1"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Send Inquiry
            </Button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@mankol.com</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
