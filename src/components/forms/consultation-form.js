"use client"

import { useState } from "react"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ConsultationForm({
  formTitle,
  formDescription,
  className = "",
}) {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deviceType: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Form submitted! We will contact you shortly.")
    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      deviceType: "",
      message: "",
    })
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const deviceTypes = [
    "Hard Drive (HDD)", "Solid State Drive (SSD)", "RAID Array", "USB Drive",
    "SD Card", "Smartphone", "Laptop", "Desktop Computer", "Server", "Other",
  ]

  const effectiveFormTitle = formTitle || "Get Free Evaluation"
  const effectiveFormDescription = formDescription || "Fill out the form and we'll contact you within 1 hour"

  const inputBaseClass = "w-full h-9 text-sm px-3 py-2 border-input text-foreground bg-background focus:border-ring placeholder:text-muted-foreground"

  return (
    <div className={`bg-accent p-5 sm:p-6 rounded-xl shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <h2 className=" text-xl sm:text-2xl font-bold text-heading mb-1">
          {effectiveFormTitle}
        </h2>
        {effectiveFormDescription && (
          <p className="text-heading text-sm">
            {effectiveFormDescription}
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 text-foreground" noValidate>
        <label htmlFor="companyName" className="sr-only">Company Name</label>
        <Input
          id="companyName"
          type="text"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          placeholder="Company Name (Optional)"
          className={inputBaseClass}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <Input
              id="firstName"
              type="text"
              required
              aria-required="true"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="First Name (Required)"
              className={inputBaseClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <Input
              id="lastName"
              type="text"
              required
              aria-required="true"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Last Name (Required)"
              className={inputBaseClass}
            />
          </div>
        </div>

        <label htmlFor="email" className="sr-only">Email</label>
        <Input
          id="email"
          type="email"
          required
          aria-required="true"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Email Address (Required)"
          className={inputBaseClass}
        />

        <label htmlFor="phone" className="sr-only">Phone</label>
        <Input
          id="phone"
          type="tel"
          required
          aria-required="true"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="Phone Number (Required)"
          className={inputBaseClass}
        />

        <div>
          <label htmlFor="deviceType" className="sr-only">Device Type</label>
          <Select
            required
            name="deviceType"
            value={formData.deviceType}
            onValueChange={(value) => handleInputChange("deviceType", value)}
          >
            <SelectTrigger
              id="deviceType"
              className={inputBaseClass}
              aria-required="true"
              aria-label="Device Type"
            >
              <SelectValue placeholder="Device Type (Required)" />
            </SelectTrigger>
            <SelectContent className="bg-popover text-popover-foreground">
              {deviceTypes.map((device) => (
                <SelectItem key={device} value={device} className="hover:text-white hover:bg-accent">
                  {device}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <label htmlFor="message" className="sr-only">Additional Details</label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Additional Details (Optional)"
          className="w-full text-sm px-3 py-2 border-input text-foreground bg-background focus:border-ring placeholder:text-muted-foreground"
          rows={4}
        />

        <Button type="submit" className="w-full text-base h-10">
          Request Free Evaluation
        </Button>

        <div className="text-center">
          <p className="text-sm text-heading flex items-center justify-center">
            <ShieldCheck className="inline h-4 w-4 mr-2 text-heading" />
            Your data is safe.
          </p>
        </div>
      </form>
    </div>
  )
}
