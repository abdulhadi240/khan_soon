import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import * as lucideIcons from "lucide-react"

export default function ComingSoonPage() {
  // Calculate the date 24 days from now
  const targetDate = new Date(Date.now() + 24 * 24 * 60 * 60 * 1000).toISOString()

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container flex flex-col min-h-screen px-4 py-8 mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Khan & Co Logo"
            width={100}
            height={75}
            className=""
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
              Building Tomorrow&apos;s Landmarks Today
            </h1>
            <p className="text-xl text-gray-600 mb-2">Since 2014</p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Khan & Co is preparing to unveil our new online presence. We specialize in construction and infrastructure
              development, creating lasting landmarks that define cities.
            </p>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer days={24} />

          {/* Services Preview */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-4xl sm:px-4">
            {[
              {
                title: "Construction",
                icon: "Building2",
                description: "State-of-the-art commercial buildings and office spaces.",
              },
              {
                title: "Infrastructure",
                icon: "Globe",
                description: "Critical infrastructure projects that connect communities.",
              },
              {
                title: "Project Management",
                icon: "ClipboardCheck",
                description: "Expert management of real estate projects, from planning to execution, ensuring timely delivery, cost efficiency, and quality control.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.5rem)] sm:flex-1 sm:min-w-[280px] p-4 sm:p-6 rounded-lg bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center mb-4 sm:flex-row sm:items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mb-2 sm:mb-0 sm:mr-3">
                    {React.createElement(lucideIcons[service.icon], { className: "w-5 h-5 text-gray-600" })}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center items-center md:mt-1 sm:text-left">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="w-full max-w-md space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Get Notified When We Launch</h3>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
              <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                Notify Me
              </Button>
            </form>
          </div>
        </div>

        {/* Footer with Contact and Social */}
        <div className="mt-12 text-center space-y-6">
          <div className="space-y-2">
            <p className="text-gray-600">Contact us at:</p>
            <p className="text-xl text-gray-900">info@khanandco.com</p>
            <p className="text-xl text-gray-900">+92 315 2751837</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <p className="text-sm text-gray-600">© 2024 Khan & Co. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

