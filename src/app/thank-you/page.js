import { CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
export const metadata = {
  title: "Thank You - Data Recovery Request Submitted",
  description:
    "Thank you for contacting us about your data recovery needs. Our experts will review your case and contact you shortly.",
  robots: "noindex, nofollow",
}
export default function ThankYouPage() {
  return (
      <>
      {/* Google Ads User Data Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const searchParams = new URLSearchParams(window.location.search);
            const email = searchParams.get('email')?.toLowerCase();
            //const phone = searchParams.get('phone'); // Excluding phone for now

            // Send data to Google Ads
            if (email && typeof gtag !== 'undefined') {
              gtag('set', 'user_data', {
                "email": email,
                //"phone_number": phone // Excluded for now
              });
            }
          `,
        }}
      />

      {/* Event snippet for Submit Lead Form conversion page */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {'send_to': 'AW-17109057717/IMdWCKnZjM4aELWBnt4_'});
            }
          `,
        }}
      />
    <div className="bg-white flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto mb-6 relative">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -inset-2 bg-accent rounded-full opacity-20 animate-pulse"></div>
          </div>

          <CardTitle className="text-4xl lg:text-5xl font-bold text-heading mb-3">
            Thank You!
          </CardTitle>
          <CardDescription className="text-lg lg:text-xl text-body max-w-xl mx-auto">
            Your request has been submitted successfully.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 px-6 pb-8">
          <div className="bg-muted rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-heading">What’s Next?</h3>
            </div>
            <div className="space-y-4 text-base text-body">
              <p>
                Our team is reviewing your submission to ensure we provide the best solution tailored to your needs.
              </p>
              <p>
                One of our data recovery specialists will get back to you as soon as possible.
              </p>
              <p>
                We’ll guide you through the next steps to ensure a smooth and efficient recovery process.
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-5 border border-border text-center">
            <p className="text-base lg:text-lg text-body">
              <strong className="text-heading">Need immediate help?</strong>
              <br />
              Call us at{" "}
              <a
                href={`tel:${COMPANY_INFO.phone.tel}`}
                className="text-accent hover:text-accent-600 font-semibold hover:underline transition-colors"
              >
                {COMPANY_INFO.phone.display}
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
