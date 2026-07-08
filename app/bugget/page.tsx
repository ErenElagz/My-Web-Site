import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bugget | Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for Bugget - Expense Tracker App",
};

export default function BuggetPage() {
  return (
    <>
      {/* Header */}
      <div>
        <Image
          src="/bugget.svg"
          alt="Bugget Logo"
          width={72}
          height={72}
          className="mt-5 md:mt-16"
        />
        <h1 className="text-4xl font-semibold tracking-tight mt-5 font-lexend">
          Bugget
        </h1>
        <p className="text-base text-gray-500 mt-3">
          Bugget is a privacy-first expense tracking mobile app. Your financial
          data is stored locally on your device — we never see it.
        </p>
      </div>

      {/* Privacy Policy */}
      <div className="w-full mt-10 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold tracking-tight font-lexend">
          Privacy Policy
        </h1>

        <p className="text-base text-gray-500 mt-0">
          <strong>Effective Date:</strong> July 8, 2026
        </p>

        <p className="text-base text-gray-500 mt-0">
          Welcome to Bugget (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). We are committed to protecting your privacy. This
          Privacy Policy explains how your information is collected, used, and
          disclosed by Bugget when you use our mobile application (the
          &ldquo;App&rdquo;).
        </p>

        <p className="text-base text-gray-500 mt-0">
          By using Bugget, you agree to the data practices described in this
          policy. If you do not agree with these terms, please do not use the
          App.
        </p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-6">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            A. Information Stored Locally on Your Device
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Bugget is designed with a privacy-first approach. Your primary
            financial data&mdash;including accounts, transactions, budgets,
            subscriptions, and categories&mdash;is stored{" "}
            <strong>locally on your device</strong> using an internal database.
            We do not transmit, collect, or store this financial data on our
            servers.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            B. Information Collected Automatically
          </h3>
          <p className="text-base text-gray-500 mt-3">
            To help us improve the App and provide essential features, we use
            third-party services that automatically collect certain non-personal
            and analytical data:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              <strong>Google Analytics for Firebase:</strong> We collect
              anonymous usage data (such as page views, button clicks, and app
              stability metrics) to understand how users interact with Bugget.
              This helps us identify bugs and improve user experience.
            </li>
            <li>
              <strong>Firebase Cloud Messaging (FCM):</strong> We collect your
              device&apos;s unique push notification token to send you important
              alerts, such as subscription reminders.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect device-specific
              information such as operating system version, device model, and
              unique device identifiers necessary for crash reporting and
              analytics.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            2. How We Use Your Information
          </h2>
          <p className="text-base text-gray-500 mt-3">
            We use the automatically collected information solely for the
            following purposes:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              To deliver and maintain the functionality of the App (e.g.,
              triggering push notifications).
            </li>
            <li>
              To monitor and analyze trends, usage, and activities in
              connection with our App to improve functionality and user
              experience.
            </li>
            <li>
              To detect, investigate, and prevent technical issues, crashes, or
              security incidents.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            3. Third-Party Services
          </h2>
          <p className="text-base text-gray-500 mt-3">
            We use the following third-party services, which may collect and
            process data according to their own privacy policies:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              <strong>Google Analytics for Firebase:</strong>{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-400 hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase Cloud Messaging:</strong>{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-400 hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
          </ul>
          <p className="text-base text-gray-500 mt-3">
            We do not sell, rent, or share your personal information with third
            parties for marketing or advertising purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
          <p className="text-base text-gray-500 mt-3">
            Because your financial data is stored locally on your device, the
            security of this data relies on your device&apos;s built-in security
            features (such as passcode, FaceID, or fingerprint locks). We highly
            recommend keeping these security features enabled.
          </p>
          <p className="text-base text-gray-500 mt-3">
            The analytical data transmitted to our third-party services
            (Firebase) is encrypted in transit and stored securely according to
            industry standards.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            5. Your Rights &amp; Choices
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>
              <strong>Opt-out of Push Notifications:</strong> You can opt-out of
              receiving push notifications at any time by modifying the
              notification settings within your device&apos;s system settings.
            </li>
            <li>
              <strong>Data Deletion:</strong> Because your financial data is
              stored locally, you can permanently delete it simply by
              uninstalling the Bugget app from your device.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            6. Children&apos;s Privacy
          </h2>
          <p className="text-base text-gray-500 mt-3">
            Bugget is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have inadvertently received personal
            information from a child under 13, we will delete such information
            from our records.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-base text-gray-500 mt-3">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy within the App
            or updating the &ldquo;Effective Date&rdquo; at the top of this
            document.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
          <p className="text-base text-gray-500 mt-3">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at:{" "}
            <strong>support@erenelagz.com</strong>.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: July 8, 2026
          </p>
        </div>
      </div>

      {/* Terms of Service */}
      <div className="w-full border-2 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-10 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight font-lexend">
          Terms of Service
        </h1>

        <p className="text-base text-gray-500 mt-0">
          <strong>Effective Date:</strong> July 8, 2026
        </p>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-4">
            1. Acceptance of Terms
          </h3>
          <p className="text-base text-gray-500 mt-3">
            By downloading, installing, or using Bugget, you agree to be bound
            by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree
            to these Terms, <strong>please do not use the App.</strong>
          </p>

          <h3 className="text-xl font-semibold mt-4">2. License</h3>
          <p className="text-base text-gray-500 mt-3">
            Bugget grants you a limited, non-exclusive, non-transferable,
            revocable license to use the App for personal, non-commercial
            purposes, subject to these Terms.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            3. Privacy-First Design
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Bugget stores all your financial data locally on your device. We do
            not have access to your financial information. You are solely
            responsible for maintaining backups of your data.
          </p>

          <h3 className="text-xl font-semibold mt-4">4. Acceptable Use</h3>
          <p className="text-base text-gray-500 mt-3">
            You agree not to use Bugget for:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-400">
            <li>Any illegal or unauthorized purpose.</li>
            <li>
              Attempting to reverse engineer, modify, or create derivative works
              of the App.
            </li>
            <li>
              Interfering with or disrupting the functionality of the App or
              associated services.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            5. Third-Party Services
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Bugget uses third-party services such as Google Analytics and
            Firebase Cloud Messaging. By using Bugget, you also agree to comply
            with the terms of those services. Their respective privacy policies
            govern how they handle your data.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            6. Disclaimer of Warranties
          </h3>
          <p className="text-base text-gray-500 mt-3">
            Bugget is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without any warranties, express or implied. We do
            not guarantee that the App will be error-free, secure, or
            uninterrupted.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            7. Limitation of Liability
          </h3>
          <p className="text-base text-gray-500 mt-3">
            To the fullest extent permitted by law, Bugget and its developers
            shall not be liable for any damages, losses, or claims arising from
            your use of the App, including but not limited to data loss or
            financial discrepancies.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            8. Changes to These Terms
          </h3>
          <p className="text-base text-gray-500 mt-3">
            We reserve the right to update or modify these Terms at any time. If
            we make material changes, we will notify you by updating the
            &ldquo;Effective Date&rdquo; at the top of this document or through
            in-app notifications. Continued use of Bugget after changes
            constitute acceptance of the updated Terms.
          </p>

          <h3 className="text-xl font-semibold mt-4">9. Governing Law</h3>
          <p className="text-base text-gray-500 mt-3">
            These Terms shall be governed by and construed in accordance with
            the laws of Turkey, without regard to its conflict of law
            provisions.
          </p>

          <h3 className="text-xl font-semibold mt-4">10. Contact Us</h3>
          <p className="text-base text-gray-500 mt-3">
            For questions about these Terms, please contact us at:
          </p>
          <p className="text-2xl font-semibold mt-3">
            📧 support@erenelagz.com
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: July 8, 2026
          </p>
        </div>
      </div>
    </>
  );
}
