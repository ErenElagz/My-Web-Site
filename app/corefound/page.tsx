import React from "react";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoreFounders | Privacy Policy",
  description: "Privacy Policy for CoreFounders - Build Together",
};

export default function CorefoundersSection() {
  return (
    <>
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-16 font-lexend">
          CoreFounders: Build Together
        </h1>
        {/* Social Buttons */}
        <div className="flex flex-row gap-3 mt-6 flex-wrap">
          <SocialButtons
            title="See on Google Play Store"
            url="https://play.google.com/store/apps/details?id=com.corefounders&hl=en"
            icon="akar-icons:google-fill"
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-12 font-lexend">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-500 mt-3">
          Last Updated: October 12, 2025
        </p>
      </div>

      {/* Privacy Policy Content */}
      <div className="w-full mt-2 flex flex-col gap-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-6">
            1. Information We Collect
          </h2>
          <p className="text-base text-gray-500 mt-3">
            To provide and improve our service, we collect the following
            information:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              <strong>Personal Information:</strong> Your Name and E-mail
              Address, used for account creation, management, and login.
            </li>
            <li>
              <strong>User Profile Information:</strong> Optional information
              you choose to provide, such as a profile picture, bio, location,
              and skill tags. This data is used to help other users connect with
              you.
            </li>
            <li>
              <strong>User-Generated Content:</strong> The projects you post
              (including titles, descriptions, and tags), applications you send,
              and any other content you create within the app. This is essential
              for the app&apos;s core functionality.
            </li>
            <li>
              <strong>Usage Data:</strong> Anonymous data about your
              interactions with the app, collected via services like Google
              Analytics, to help us identify issues and improve user experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            2. How We Use Your Information
          </h2>
          <p className="text-base text-gray-500 mt-3">
            Your information is used for the following purposes:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>To create and manage user accounts.</li>
            <li>To provide login and authentication services.</li>
            <li>
              To improve the functionality, performance, and security of the
              app.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            3. Third-Party Services
          </h2>
          <p className="text-base text-gray-500 mt-3">
            CoreFound uses trusted third-party services to operate effectively:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>Firebase (Authentication, Database, Push Notifications)</li>
            <li>
              Google Analytics & Crashlytics (Analytics and App Performance
              Tracking)
            </li>
          </ul>
          <p className="text-base text-gray-500 mt-3">
            These third parties may collect limited information in accordance
            with their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            4. KVKK & GDPR Compliance
          </h2>
          <p className="text-base text-gray-500 mt-3">
            In accordance with the Turkish Personal Data Protection Law (KVKK)
            and the European General Data Protection Regulation (GDPR), users
            have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>Request access to their stored personal data.</li>
            <li>Request correction or deletion of their personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>
              File a complaint with the relevant data protection authority.
            </li>
          </ul>
          <p className="text-base text-gray-500 mt-3">
            All collected data is stored securely and is not used beyond the
            purposes stated in this Privacy Policy. Your data is not sold or
            transferred to third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Data Sharing</h2>
          <p className="text-base text-gray-500 mt-3">
            We do not share your personal information with anyone except the
            third-party services listed above required for app functionality.
          </p>
          <p className="text-base text-gray-500 mt-3">
            <strong>
              When a user applies for a project and their application is
              accepted, the necessary profile information is shown to the
              project owner for the sole purpose of enabling collaboration.
            </strong>
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Data Retention</h2>
          <p className="text-base text-gray-500 mt-3">
            We retain your personal data for as long as your account remains
            active. This includes all data listed in Section 1, such as your
            profile information and user-generated content. Once you delete your
            account, this data will be removed according to our data deletion
            process.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Data Deletion</h2>
          <p className="text-base text-gray-500 mt-3">
            You may request deletion of your account and associated data at any
            time by:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              Sending an email to <strong>elagzeren@gmail.com</strong>
            </li>
            <li>Using the in-app Contact section.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-base text-gray-500 mt-3">
            Our service is not intended for use by anyone under the age of 13
            (&quot;Children&quot;). We do not knowingly collect personally identifiable
            information from children under 13. If you are a parent or guardian
            and you become aware that your child has provided us with Personal
            Data, please contact us so we can take steps to remove that
            information from our servers.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Consent</h2>
          <p className="text-base text-gray-500 mt-3">
            By signing up for CoreFound, you acknowledge and agree to this
            Privacy Policy. A link to this Privacy Policy and our Terms of
            Service is provided on the sign-up screen.
          </p>

          <h2 className="text-2xl font-semibold mt-6">10. Contact Us</h2>
          <p className="text-base text-gray-500 mt-3">
            For questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-2xl font-semibold mt-3">📧 elagzeren@gmail.com</p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: October 12, 2025
          </p>
        </div>
      </div>

      {/* Terms of Services */}
      <div className="w-full border-2 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-10 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight font-lexend">
          Terms of Services
        </h1>

        <p className="text-base text-gray-500 mt-0">
          Last Updated: October 12, 2025
        </p>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h3>
          <p className="text-base text-gray-500 mt-3">
            By signing up or using CoreFound, you agree to these Terms and our
            Privacy Policy. If you do not agree,{" "}
            <strong>please do not use the App.</strong>
          </p>

          <h3 className="text-xl font-semibold mt-4">2. Eligibility</h3>
          <p className="text-base text-gray-500 mt-3">
            You must be at least 13 years old to use CoreFound. By creating an
            account, you represent and warrant that you are at least 13 years of
            age and have the legal capacity to enter into these Terms.
          </p>

          <h3 className="text-xl font-semibold mt-4">3. User Accounts</h3>
          <p className="text-base text-gray-500 mt-3">
            You must provide accurate and complete information when creating an
            account.
          </p>
          <p className="text-base text-gray-500 mt-3">
            You are responsible for maintaining the confidentiality of your
            login information and for all activity that occurs under your
            account.
          </p>

          <h3 className="text-xl font-semibold mt-4">4. Acceptable Use</h3>
          <p className="text-base text-gray-500 mt-3">
            You agree not to use CoreFound for:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>Illegal or unauthorized activities.</li>
            <li>
              Attempting to hack, disrupt, or gain unauthorized access to the
              App or its systems.
            </li>
            <li>Sharing false or misleading information.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            5. Third-Party Services
          </h3>
          <p className="text-base text-gray-500 mt-3">
            CoreFound integrates with third-party services such as Firebase,
            Google Analytics, and Crashlytics. By using CoreFound, you also
            agree to comply with the terms of those services.
          </p>

          <h3 className="text-xl font-semibold mt-4">6. Termination</h3>
          <p className="text-base text-gray-500 mt-3">
            We reserve the right to suspend or terminate your account if you
            violate these Terms or misuse the App. You may also delete your
            account at any time through the support options provided.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            7. Limitation of Liability
          </h3>
          <p className="text-base text-gray-500 mt-3">
            CoreFound is provided &quot;as is.&quot; We are not liable for any
            damages, losses, or issues arising from your use of the App.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            8. Changes to the Terms
          </h3>
          <p className="text-base text-gray-500 mt-3">
            We may update these Terms from time to time. Continued use of
            CoreFound after changes are posted constitutes acceptance of the
            updated Terms.
          </p>

          <h3 className="text-xl font-semibold mt-4">9. Contact Us</h3>
          <p className="text-base text-gray-500 mt-3">
            For questions about these Terms, please contact us at:
          </p>
          <p className="text-2xl font-semibold mt-3">📧 elagzeren@gmail.com</p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: October 12, 2025
          </p>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="w-full border-2 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-10 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight font-lexend">
          Community Guidelines
        </h1>

        <p className="text-base text-gray-500 mt-0">
          CoreFound is a platform where entrepreneurs, developers, and creators
          can find teammates, share opportunities, and collaborate. To ensure a
          safe, respectful, and productive environment, please follow these
          guidelines:
        </p>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-4">
            1. Respect and Professionalism
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Do not engage in hate speech, harassment, or discrimination based on
            race, gender, language, religion, political views, or any personal
            characteristic.
          </p>
          <p className="text-base text-gray-500 mt-3">
            Always communicate in a respectful, constructive, and professional
            manner.
          </p>

          <h3 className="text-xl font-semibold mt-4">2. Spam and Misuse</h3>
          <p className="text-base text-gray-500 mt-3">
            Spamming, duplicate postings, and fake applications are strictly
            prohibited.
          </p>
          <p className="text-base text-gray-500 mt-3">
            Only apply to opportunities you genuinely intend to join.
          </p>
          <p className="text-base text-gray-500 mt-3">
            Fake profiles, misleading content, or fraudulent activity are not
            allowed.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            3. Job and Post Content
          </h3>
          <p className="text-base text-gray-500 mt-3">
            After sharing post you cannot edit. You can delete and repost if you
            need to make changes.
          </p>
          <p className="text-base text-gray-500 mt-3">
            Posts must not include illegal activities, gambling, adult content,
            weapons/drugs, or fake documents.
          </p>
          <p className="text-base text-gray-500 mt-3">
            Job descriptions should be clear, accurate, and directly related to
            your project.
          </p>

          <h3 className="text-xl font-semibold mt-4">4. Safety</h3>
          <p className="text-base text-gray-500 mt-3">
            Do not share sensitive personal information (e.g., home address, ID
            numbers, bank details) publicly.
          </p>
          <p className="text-base text-gray-500 mt-3">
            If you notice suspicious activity or inappropriate content, use the
            &quot;Report&quot; button immediately.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            5. Collaboration and Engagement
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Be honest during the application process: do not apply unless you
            are genuinely interested.
          </p>
          <p className="text-base text-gray-500 mt-3">
            If you are accepted into a project, take responsibility and follow
            through on your commitments.
          </p>
          <p className="text-base text-gray-500 mt-3">
            CoreFound facilitates connections but is not responsible for
            agreements or outcomes between users.
          </p>
        </div>
      </div>
    </>
  );
}
