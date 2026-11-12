import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons/SocialButtons";

export const metadata: Metadata = {
  title: "CoreFound | Privacy Policy & Terms",
  description: "Privacy Policy, Terms of Service, and Community Guidelines for CoreFound - Build Together",
};

export default function CoreFoundSection() {
  return (
    <div className="space-y-12">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Legal & Product
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          CoreFound: Build Together
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Last Updated: October 12, 2025
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <SocialButtons
            title="See on Google Play Store"
            url="https://play.google.com/store/apps/details?id=com.corefound"
            icon="akar-icons:google-fill"
          />
        </div>
      </header>

      {/* Privacy Policy */}
      <section className="space-y-5 border-t border-border pt-8 text-sm leading-relaxed text-text-secondary">
        <h2 className="text-xl font-medium tracking-tight text-text-primary">
          Privacy Policy
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            1. Information We Collect
          </h3>
          <p>
            To provide and improve our service, we collect the following
            information:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="font-medium text-text-primary">
                Personal Information:
              </strong>{" "}
              Your Name and E-mail Address, used for account creation,
              management, and login.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                User Profile Information:
              </strong>{" "}
              Optional information you choose to provide, such as a profile
              picture, bio, location, and skill tags. This data is used to help
              other users connect with you.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                User-Generated Content:
              </strong>{" "}
              The projects you post (including titles, descriptions, and tags),
              applications you send, and any other content you create within the
              app. This is essential for the app&apos;s core functionality.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                Usage Data:
              </strong>{" "}
              Anonymous data about your interactions with the app, collected via
              services like Google Analytics, to help us identify issues and
              improve user experience.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            2. How We Use Your Information
          </h3>
          <p>Your information is used for the following purposes:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>To create and manage user accounts.</li>
            <li>To provide login and authentication services.</li>
            <li>
              To improve the functionality, performance, and security of the
              app.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            3. Third-Party Services
          </h3>
          <p>
            CoreFound uses trusted third-party services to operate effectively:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Firebase (Authentication, Database, Push Notifications)</li>
            <li>
              Google Analytics &amp; Crashlytics (Analytics and App Performance
              Tracking)
            </li>
          </ul>
          <p>
            These third parties may collect limited information in accordance
            with their own privacy policies.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            4. KVKK &amp; GDPR Compliance
          </h3>
          <p>
            In accordance with the Turkish Personal Data Protection Law (KVKK)
            and the European General Data Protection Regulation (GDPR), users
            have the right to:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Request access to their stored personal data.</li>
            <li>Request correction or deletion of their personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>
              File a complaint with the relevant data protection authority.
            </li>
          </ul>
          <p>
            All collected data is stored securely and is not used beyond the
            purposes stated in this Privacy Policy. Your data is not sold or
            transferred to third parties for marketing purposes.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            5. Data Sharing
          </h3>
          <p>
            We do not share your personal information with anyone except the
            third-party services listed above required for app functionality.
          </p>
          <p>
            <strong className="font-medium text-text-primary">
              When a user applies for a project and their application is
              accepted, the necessary profile information is shown to the
              project owner for the sole purpose of enabling collaboration.
            </strong>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            6. Data Retention
          </h3>
          <p>
            We retain your personal data for as long as your account remains
            active. This includes all data listed in Section 1, such as your
            profile information and user-generated content. Once you delete your
            account, this data will be removed according to our data deletion
            process.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            7. Data Deletion
          </h3>
          <p>
            You may request deletion of your account and associated data at any
            time by:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Sending an email to{" "}
              <strong className="font-medium text-text-primary">
                elagzeren@gmail.com
              </strong>
            </li>
            <li>Using the in-app Contact section.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            8. Children&apos;s Privacy
          </h3>
          <p>
            Our service is not intended for use by anyone under the age of 13
            (&quot;Children&quot;). We do not knowingly collect personally
            identifiable information from children under 13. If you are a parent
            or guardian and you become aware that your child has provided us
            with Personal Data, please contact us so we can take steps to remove
            that information from our servers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            9. Consent
          </h3>
          <p>
            By signing up for CoreFound, you acknowledge and agree to this
            Privacy Policy. A link to this Privacy Policy and our Terms of
            Service is provided on the sign-up screen.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            10. Contact Us
          </h3>
          <p>
            For questions about this Privacy Policy, please contact us at:{" "}
            <strong className="font-mono font-medium text-text-primary">
              elagzeren@gmail.com
            </strong>
          </p>
          <p className="font-mono text-xs text-text-muted">
            Last Updated: October 12, 2025
          </p>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="space-y-5 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-text-primary">
            Terms of Services
          </h2>
          <p className="mt-1 font-mono text-xs text-text-muted">
            Last Updated: October 12, 2025
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            1. Acceptance of Terms
          </h3>
          <p>
            By signing up or using CoreFound, you agree to these Terms and our
            Privacy Policy. If you do not agree,{" "}
            <strong className="font-medium text-text-primary">
              please do not use the App.
            </strong>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            2. Eligibility
          </h3>
          <p>
            You must be at least 13 years old to use CoreFound. By creating an
            account, you represent and warrant that you are at least 13 years of
            age and have the legal capacity to enter into these Terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            3. User Accounts
          </h3>
          <p>
            You must provide accurate and complete information when creating an
            account. You are responsible for maintaining the confidentiality of
            your login information and for all activity that occurs under your
            account.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            4. Acceptable Use
          </h3>
          <p>You agree not to use CoreFound for:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Illegal or unauthorized activities.</li>
            <li>
              Attempting to hack, disrupt, or gain unauthorized access to the
              App or its systems.
            </li>
            <li>Sharing false or misleading information.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            5. Third-Party Services
          </h3>
          <p>
            CoreFound integrates with third-party services such as Firebase,
            Google Analytics, and Crashlytics. By using CoreFound, you also
            agree to comply with the terms of those services.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            6. Termination
          </h3>
          <p>
            We reserve the right to suspend or terminate your account if you
            violate these Terms or misuse the App. You may also delete your
            account at any time through the support options provided.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            7. Limitation of Liability
          </h3>
          <p>
            CoreFound is provided &quot;as is.&quot; We are not liable for any
            damages, losses, or issues arising from your use of the App.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            8. Changes to the Terms
          </h3>
          <p>
            We may update these Terms from time to time. Continued use of
            CoreFound after changes are posted constitutes acceptance of the
            updated Terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            9. Contact Us
          </h3>
          <p>
            For questions about these Terms, please contact us at:{" "}
            <strong className="font-mono font-medium text-text-primary">
              elagzeren@gmail.com
            </strong>
          </p>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="space-y-5 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-text-primary">
            Community Guidelines
          </h2>
          <p className="mt-2">
            CoreFound is a platform where entrepreneurs, developers, and
            creators can find teammates, share opportunities, and collaborate.
            To ensure a safe, respectful, and productive environment, please
            follow these guidelines:
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            1. Respect and Professionalism
          </h3>
          <p>
            Do not engage in hate speech, harassment, or discrimination based on
            race, gender, language, religion, political views, or any personal
            characteristic. Always communicate in a respectful, constructive,
            and professional manner.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            2. Spam and Misuse
          </h3>
          <p>
            Spamming, duplicate postings, and fake applications are strictly
            prohibited. Only apply to opportunities you genuinely intend to
            join. Fake profiles, misleading content, or fraudulent activity are
            not allowed.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            3. Job and Post Content
          </h3>
          <p>
            After sharing post you cannot edit. You can delete and repost if you
            need to make changes. Posts must not include illegal activities,
            gambling, adult content, weapons/drugs, or fake documents. Job
            descriptions should be clear, accurate, and directly related to your
            project.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">4. Safety</h3>
          <p>
            Do not share sensitive personal information (e.g., home address, ID
            numbers, bank details) publicly. If you notice suspicious activity
            or inappropriate content, use the &quot;Report&quot; button
            immediately.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            5. Collaboration and Engagement
          </h3>
          <p>
            Be honest during the application process: do not apply unless you
            are genuinely interested. If you are accepted into a project, take
            responsibility and follow through on your commitments. CoreFound
            facilitates connections but is not responsible for agreements or
            outcomes between users.
          </p>
        </div>
      </section>
    </div>
  );
}
