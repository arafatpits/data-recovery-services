"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ConsultationForm from "../forms/consultation-form"

export default function FormDialogButton({
  children,
  className = "",
  size = "default",
  variant = "default",
  ...buttonProps
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          variant={variant}
          className={`cursor-pointer ${className}`}
          {...buttonProps}
        >
          {children}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-2xl w-[95vw] max-h-[80vh] overflow-y-auto p-4 sm:p-6 [&>button]:!w-8 [&>button]:!h-8"
      >
        <DialogTitle className="sr-only">Consultation Form</DialogTitle>
        <DialogDescription className="sr-only">
          This form allows you to request a data recovery quote from our engineers.
        </DialogDescription>
        <ConsultationForm recaptchaId="recaptcha-form2" className="mt-8" />
      </DialogContent>
    </Dialog>
  )
}
