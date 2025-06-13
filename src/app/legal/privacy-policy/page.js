export const metadata = {
  title: "Privacy Policy - DataRecoveryServices",
  description: "Learn how DataRecoveryServices collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-heading mb-6">Privacy Policy</h1>

      <p className="text-base text-body mb-4">
        At DataRecoveryServices, your privacy is important to us. This Privacy Policy outlines how we collect, use,
        and protect your information when you interact with our website or services.
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">Information We Collect</h2>
      <p className="text-base text-body mb-4">
        We may collect personal information you provide to us, such as your name, email address, phone number, and
        information about your device or data loss scenario. This information is used solely to communicate with you
        and provide our services.
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">How We Use Your Information</h2>
      <p className="text-base text-body mb-4">
        Your information is used to evaluate your recovery case, provide you with a quote, perform data recovery
        services, and contact you regarding updates or support. We do not sell or share your personal information with
        third parties for marketing purposes.
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">Data Security</h2>
      <p className="text-base text-body mb-4">
        We implement industry-standard measures to protect your data. All recovered data is handled securely and only
        accessible by authorized personnel.
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">Cookies and Tracking</h2>
      <p className="text-base text-body mb-4">
        Our website may use cookies and third-party tools (like Google Analytics) to enhance user experience and
        monitor website usage. You can manage cookie settings in your browser.
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">Third-Party Services</h2>
      <p className="text-base text-body mb-4">
        For certain services, we may work with trusted third-party providers. These parties are contractually obligated
        to maintain the confidentiality and security of your information.
      </p>
      <p className="text-base text-body mb-4">
        You may also review Google's privacy practices here:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          https://policies.google.com/privacy
        </a>
        .
      </p>
      <p className="text-base text-body mb-4">
        If you are located in the EU or UK, and have unresolved privacy concerns, you may contact JAMS for
        dispute resolution at:{" "}
        <a
          href="https://www.jamsadr.com/dpf-dispute-resolution"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          https://www.jamsadr.com/dpf-dispute-resolution
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold text-heading mt-8 mb-3">Contact Us</h2>
      <p className="text-base text-body">
        For any questions or concerns regarding this policy, please contact us at{" "}
        <a href="mailto:info@datarecoveryservices.com" className="text-accent underline">
          info@datarecoveryservices.com
        </a>
        .
      </p>
    </main>
  )
}
