"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  company: z.string().optional(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d+$/, "Invalid phone number"),
  description: z.string().optional(),
  deviceType: z.string().optional(),
});

export default function ConsultationForm({
  formTitle,
  formDescription,
  className = "",
}) {
  const [isClient, setIsClient] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    setIsClient(true);

    const checkRecaptcha = setInterval(() => {
      if (typeof window !== "undefined" && window.grecaptcha) {
        setRecaptchaReady(true);
        const container = document.querySelector(".g-recaptcha");
        if (container && !container.hasChildNodes()) {
          window.grecaptcha.render(container, {
            sitekey: "6Lekm7kUAAAAAHeKlzuz9PFPSJUDnfcmJeSqiYkB",
          });
        }
        clearInterval(checkRecaptcha);
      }
    }, 100);

    return () => clearInterval(checkRecaptcha);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const response = document.getElementById("g-recaptcha-response");
      if (!response || response.value.trim() === "") {
        const captchaField = document.getElementsByName("captcha_settings")[0];
        if (captchaField) {
          const settings = JSON.parse(captchaField.value);
          settings.ts = JSON.stringify(new Date().getTime());
          captchaField.value = JSON.stringify(settings);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const inputBaseClass =
    "w-full h-9 text-sm px-3 py-2 border-input text-foreground bg-background focus:border-ring placeholder:text-muted-foreground";

  const onSubmit = (data) => {
    const captchaResponse = document.getElementById(
      "g-recaptcha-response"
    )?.value;
    if (!captchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D4P000000kBh7";

    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value || "";
      form.appendChild(input);
    };

    addField("oid", "00D4P000000kBh7");
    addField("retURL", "https://www.pitsdatarecovery.com/thank-you");
    addField(
      "captcha_settings",
      JSON.stringify({
        keyname: "googlecaptchav2",
        fallback: "true",
        orgId: "00D4P000000kBh7",
        ts: JSON.stringify(new Date().getTime()),
      })
    );
    addField("company", data.company);
    addField("first_name", data.first_name);
    addField("last_name", data.last_name);
    addField("email", data.email);
    addField("phone", data.phone);
    addField("description", data.description);
    addField("device_type__c", data.deviceType);
    addField("g-recaptcha-response", captchaResponse);

    document.body.appendChild(form);
    form.submit();
  };

  const effectiveFormTitle = formTitle || "Get Free Evaluation";
  const effectiveFormDescription =
    formDescription || "Fill out the form and we'll contact you within 1 hour";

  const renderError = (field) =>
    errors[field] ? (
      <p className="text-sm text-destructive bg-white rounded-md px-3 py-1 mt-1">
        {errors[field].message}
      </p>
    ) : null;

  return (
    <div className={`bg-accent p-5 sm:p-6 rounded-xl shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-heading mb-1">
          {effectiveFormTitle}
        </h2>
        <p className="text-heading text-sm">{effectiveFormDescription}</p>
      </div>

      <form
        className="space-y-3 text-foreground"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          id="company"
          placeholder="Company Name (Optional)"
          {...register("company")}
          className={inputBaseClass}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
          <div>
            <Input
              id="first_name"
              placeholder="First Name (Required)"
              {...register("first_name")}
              className={inputBaseClass}
            />
            {renderError("first_name")}
          </div>
          <div>
            <Input
              id="last_name"
              placeholder="Last Name (Required)"
              {...register("last_name")}
              className={inputBaseClass}
            />
            {renderError("last_name")}
          </div>
        </div>

        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email Address (Required)"
            {...register("email")}
            className={inputBaseClass}
          />
          {renderError("email")}
        </div>

        <div>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number (Required)"
            {...register("phone")}
            className={inputBaseClass}
          />
          {renderError("phone")}
        </div>

        <input type="hidden" {...register("deviceType")} />

        <Textarea
          id="description"
          rows={4}
          placeholder="Additional Details (Optional)"
          {...register("description")}
          className="w-full text-sm px-3 py-2 border-input text-foreground bg-background focus:border-ring placeholder:text-muted-foreground"
        />

        {isClient && <div className="g-recaptcha" />}
        {!recaptchaReady && (
          <p className="text-sm text-muted-foreground">Loading reCAPTCHA…</p>
        )}

        <Button type="submit" className="w-full text-base h-10 mt-2">
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
  );
}
