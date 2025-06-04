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
        <h3 className="text-2xl font-bold text-heading mb-1">
          {effectiveFormTitle}
        </h3>
        {effectiveFormDescription && (
          <p className="text-body text-sm">
            {effectiveFormDescription}
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-3 text-foreground">
        <Input
          id="companyName"
          type="text"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          placeholder="Company Name (Optional)"
          className={inputBaseClass}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
          <Input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="First Name (Required)"
            className={inputBaseClass}
          />
          <Input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Last Name (Required)"
            className={inputBaseClass}
          />
        </div>

        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Email Address (Required)"
          className={inputBaseClass}
        />

        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="Phone Number (Required)"
          className={inputBaseClass}
        />

        <Select
          required
          name="deviceType"
          value={formData.deviceType}
          onValueChange={(value) => handleInputChange("deviceType", value)}
        >
          <SelectTrigger id="deviceType" className={inputBaseClass}>
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
          <p className="text-sm text-body flex items-center justify-center">
            <ShieldCheck className="inline h-4 w-4 mr-2 text-body" />
            Your data is safe.
          </p>
        </div>
      </form>
    </div>
  )
}
