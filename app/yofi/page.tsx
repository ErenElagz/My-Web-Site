import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yofi | Privacy Policy & Terms of Service",
  description:
    "Privacy Policy and Terms of Service for Yofi - Expense Tracker App",
};

export default function YofiPage() {
  return (
    <div className="space-y-12">
      <header className="pt-4 sm:pt-8">
        <div className="flex items-center gap-4">
          <Image
            src="/yofi.svg"
            alt="Yofi Logo"
            width={48}
            height={48}
            className="rounded-xl border border-border"
          />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Legal &amp; Product
            </p>
            <h1 className="mt-1 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
              Yofi
            </h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Yofi is a privacy-first expense tracking mobile app. Your financial
          data is stored locally on your device, we never see it.
        </p>
      </header>

      {/* Privacy Policy */}
      <section className="space-y-5 border-t border-border pt-8 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-text-primary">
            Privacy Policy
          </h2>
          <p className="mt-1 font-mono text-xs text-text-muted">
            Effective Date: July 8, 2026
          </p>
        </div>

        <p>
          Welcome to Yofi (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). We are committed to protecting your privacy. This
          Privacy Policy explains how your information is collected, used, and
          disclosed by Yofi when you use our mobile application (the
          &ldquo;App&rdquo;).
        </p>
        <p>
          By using Yofi, you agree to the data practices described in this
          policy. If you do not agree with these terms, please do not use the
          App.
        </p>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-text-primary">
            1. Information We Collect
          </h3>
          <h4 className="text-sm font-medium text-text-primary">
            A. Information Stored Locally on Your Device
          </h4>
          <p>
            Yofi is designed with a privacy-first approach. Your primary
            financial data&mdash;including accounts, transactions, budgets,
            subscriptions, and categories&mdash;is stored{" "}
            <strong className="font-medium text-text-primary">
              locally on your device
            </strong>{" "}
            using an internal database. We do not transmit, collect, or store
            this financial data on our servers.
          </p>

          <h4 className="text-sm font-medium text-text-primary">
            B. Information Collected Automatically
          </h4>
          <p>
            To help us improve the App and provide essential features, we use
            third-party services that automatically collect certain non-personal
            and analytical data:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="font-medium text-text-primary">
                Google Analytics for Firebase:
              </strong>{" "}
              We collect anonymous usage data (such as page views, button
              clicks, and app stability metrics) to understand how users
              interact with Yofi. This helps us identify bugs and improve user
              experience.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                Firebase Cloud Messaging (FCM):
              </strong>{" "}
              We collect your device&apos;s unique push notification token to
              send you important alerts, such as subscription reminders.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                Device Information:
              </strong>{" "}
              We may collect device-specific information such as operating
              system version, device model, and unique device identifiers
              necessary for crash reporting and analytics.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            2. How We Use Your Information
          </h3>
          <p>
            We use the automatically collected information solely for the
            following purposes:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              To deliver and maintain the functionality of the App (e.g.,
              triggering push notifications).
            </li>
            <li>
              To monitor and analyze trends, usage, and activities in connection
              with our App to improve functionality and user experience.
            </li>
            <li>
              To detect, investigate, and prevent technical issues, crashes, or
              security incidents.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            3. Third-Party Services
          </h3>
          <p>
            We use the following third-party services, which may collect and
            process data according to their own privacy policies:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="font-medium text-text-primary">
                Google Analytics for Firebase:
              </strong>{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-text-primary"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                Firebase Cloud Messaging:
              </strong>{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-text-primary"
              >
                Google Privacy Policy
              </a>
            </li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for marketing or advertising purposes.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            4. Data Security
          </h3>
          <p>
            Because your financial data is stored locally on your device, the
            security of this data relies on your device&apos;s built-in security
            features (such as passcode, FaceID, or fingerprint locks). We highly
            recommend keeping these security features enabled.
          </p>
          <p>
            The analytical data transmitted to our third-party services
            (Firebase) is encrypted in transit and stored securely according to
            industry standards.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            5. Your Rights &amp; Choices
          </h3>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="font-medium text-text-primary">
                Opt-out of Push Notifications:
              </strong>{" "}
              You can opt-out of receiving push notifications at any time by
              modifying the notification settings within your device&apos;s
              system settings.
            </li>
            <li>
              <strong className="font-medium text-text-primary">
                Data Deletion:
              </strong>{" "}
              Because your financial data is stored locally, you can permanently
              delete it simply by uninstalling the Yofi app from your device.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            6. Children&apos;s Privacy
          </h3>
          <p>
            Yofi is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have inadvertently received personal
            information from a child under 13, we will delete such information
            from our records.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            7. Changes to This Privacy Policy
          </h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy within the App
            or updating the &ldquo;Effective Date&rdquo; at the top of this
            document.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            8. Contact Us
          </h3>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at:{" "}
            <strong className="font-mono font-medium text-text-primary">
              support@erenelagz.com
            </strong>
          </p>
          <p className="font-mono text-xs text-text-muted">
            Last Updated: July 8, 2026
          </p>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="space-y-5 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-text-primary">
            Terms of Service
          </h2>
          <p className="mt-1 font-mono text-xs text-text-muted">
            Effective Date: July 8, 2026
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            1. Acceptance of Terms
          </h3>
          <p>
            By downloading, installing, or using Yofi, you agree to be bound by
            these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to
            these Terms,{" "}
            <strong className="font-medium text-text-primary">
              please do not use the App.
            </strong>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            2. License
          </h3>
          <p>
            Yofi grants you a limited, non-exclusive, non-transferable,
            revocable license to use the App for personal, non-commercial
            purposes, subject to these Terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            3. Privacy-First Design
          </h3>
          <p>
            Yofi stores all your financial data locally on your device. We do
            not have access to your financial information. You are solely
            responsible for maintaining backups of your data.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            4. Acceptable Use
          </h3>
          <p>You agree not to use Yofi for:</p>
          <ul className="list-disc space-y-1.5 pl-5">
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
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            5. Third-Party Services
          </h3>
          <p>
            Yofi uses third-party services such as Google Analytics and Firebase
            Cloud Messaging. By using Yofi, you also agree to comply with the
            terms of those services. Their respective privacy policies govern
            how they handle your data.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            6. Disclaimer of Warranties
          </h3>
          <p>
            Yofi is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            without any warranties, express or implied. We do not guarantee that
            the App will be error-free, secure, or uninterrupted.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            7. Limitation of Liability
          </h3>
          <p>
            To the fullest extent permitted by law, Yofi and its developers
            shall not be liable for any damages, losses, or claims arising from
            your use of the App, including but not limited to data loss or
            financial discrepancies.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            8. Changes to These Terms
          </h3>
          <p>
            We reserve the right to update or modify these Terms at any time. If
            we make material changes, we will notify you by updating the
            &ldquo;Effective Date&rdquo; at the top of this document or through
            in-app notifications. Continued use of Yofi after changes
            constitute acceptance of the updated Terms.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            9. Governing Law
          </h3>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Turkiye, without regard to its conflict of law
            provisions.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            10. Contact Us
          </h3>
          <p>
            For questions about these Terms, please contact us at:{" "}
            <strong className="font-mono font-medium text-text-primary">
              support@erenelagz.com
            </strong>
          </p>
          <p className="font-mono text-xs text-text-muted">
            Last Updated: July 8, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
