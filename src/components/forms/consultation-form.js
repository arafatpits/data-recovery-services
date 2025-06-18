"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SALESFORCE_ORG_ID = process.env.NEXT_PUBLIC_SALESFORCE_ORG_ID || "00D4P000000kBh7";
const RETURN_URL = process.env.NEXT_PUBLIC_RETURN_URL || "https://help.datarecoveryservices.com/thank-you";

const FormSchema = z.object({
  company: z.string().optional(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[\d+\-() ]+$/, "Invalid phone number"),
  description: z.string().min(1, "Description is required").max(255, "Description must be at most 255 characters"),
  deviceType: z.string().optional(),
});

export default function ConsultationForm({ className = "" }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const getLocalValue = key => {
    try {
      const stored = JSON.parse(localStorage.getItem(key) || "null");
      return stored?.value || "";
    } catch {
      return "";
    }
  };

  const [tracking, setTracking] = useState({ gclid: "", campaignid: "", adgroupid: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["gclid", "campaignid", "adgroupid"];
    const newTracking = {};
    keys.forEach(key => {
      const urlVal = params.get(key);
      const localStored = getLocalValue(key);
      const valueToUse = urlVal || localStored;
      newTracking[key] = valueToUse;
      if (urlVal && urlVal !== localStored) {
        localStorage.setItem(key, JSON.stringify({ value: urlVal, timestamp: Date.now() }));
      }
    });
    setTracking(newTracking);
  }, []);

  const inputBaseClass =
    "w-full h-9 text-sm px-3 py-2 border-input text-foreground bg-background focus:border-ring placeholder:text-muted-foreground";

  const onSubmit = data => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=${SALESFORCE_ORG_ID}`;
    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value || "";
      form.appendChild(input);
    };
    addField("oid", SALESFORCE_ORG_ID);
    addField("retURL", `${RETURN_URL}?phone=${encodeURIComponent(data.phone)}&email=${encodeURIComponent(data.email)}`);
    addField("company", data.company);
    addField("first_name", data.first_name);
    addField("last_name", data.last_name);
    addField("email", data.email);
    addField("phone", data.phone);
    addField("00N4P00000Gxse2", data.description);
    addField("device_type__c", data.deviceType);
    addField("00NUN000002Esgv", tracking.campaignid);
    addField("00NUN000002EsiX", tracking.adgroupid);
    addField("00N6Q000003PTHS", tracking.gclid);
    document.body.appendChild(form);
    form.submit();
  };

  const renderError = field =>
    errors[field] ? (
      <p className="text-sm text-destructive bg-white rounded-md px-3 py-1 mt-1">
        {errors[field].message}
      </p>
    ) : null;

  return (
    <div className={`bg-accent p-5 sm:p-6 rounded-xl shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-heading mb-1">
          HOW MUCH WILL IT COST?
        </h2>
        <p className="text-heading text-sm">Get A Free, No-Obligation Quote</p>
      </div>

      <form className="space-y-3 text-foreground" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input id="company" placeholder="Company Name (Optional)" {...register("company")} className={inputBaseClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
          <div>
            <Input id="first_name" placeholder="First Name (Required)" {...register("first_name")} className={inputBaseClass} />
            {renderError("first_name")}
          </div>
          <div>
            <Input id="last_name" placeholder="Last Name (Required)" {...register("last_name")} className={inputBaseClass} />
            {renderError("last_name")}
          </div>
        </div>

        <div>
          <Input id="email" type="email" placeholder="Email Address (Required)" {...register("email")} className={inputBaseClass} />
          {renderError("email")}
        </div>

        <div>
          <Input id="phone" type="tel" placeholder="Phone Number (Required)" {...register("phone")} className={inputBaseClass} />
          {renderError("phone")}
        </div>

        <input type="hidden" {...register("deviceType")} />

        <div>
          <Textarea id="description" rows={4} maxLength={255} placeholder="Describe your issue (Required, up to 255 chars)" {...register("description")} className={inputBaseClass} />
          {renderError("description")}
        </div>

        <Button type="submit" className="w-full text-base h-10 mt-2 cursor-pointer">
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
