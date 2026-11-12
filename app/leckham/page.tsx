import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons/SocialButtons";

export const metadata: Metadata = {
  title: "Leckham | Privacy Policy & Terms",
  description: "Privacy Policy and Terms for Leckham - Offline Book Reading App",
};

export default function Privacy() {
  return (
    <div className="space-y-12">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Legal &amp; Product
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          Leckham: Minimalist E-Book Reader
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          Leckham is committed to protecting your privacy. This Privacy Policy
          outlines our practices regarding your personal information.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <SocialButtons
            title="See on Google Play Store"
            url="https://play.google.com/store/apps/details?id=com.leckham&hl=en"
            icon="akar-icons:google-fill"
          />
        </div>
      </header>

      <section className="space-y-5 border-t border-border pt-8 text-sm leading-relaxed text-text-secondary">
        <h2 className="text-xl font-medium tracking-tight text-text-primary">
          Privacy Policy
        </h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Introduction
          </h3>
          <p>
            Thank you for choosing Leckham, an offline book reading application.
            This Privacy Policy is designed to help you understand how Leckham
            handles your personal information.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Information Collection
          </h3>
          <p>
            <strong className="font-medium text-text-primary">
              Leckham does not collect personal information such as your name,
              email, or reading content.
            </strong>{" "}
            However, the app does use{" "}
            <strong className="font-medium text-text-primary">
              Firebase Analytics
            </strong>{" "}
            to collect{" "}
            <strong className="font-medium text-text-primary">
              anonymous usage data
            </strong>{" "}
            such as:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Button clicks (e.g., Add Book, Share App)</li>
            <li>App open events and session duration</li>
            <li>Device information like model and OS version</li>
          </ul>
          <p>
            This data is used solely for{" "}
            <strong className="font-medium text-text-primary">
              improving the app
            </strong>{" "}
            and understanding how users interact with it. It is{" "}
            <strong className="font-medium text-text-primary">
              not linked to any personal identity
            </strong>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Data Storage
          </h3>
          <p>
            All books and reading progress are stored locally on your device.
            Analytics data is stored by Google on their secure servers in
            accordance with Firebase policies.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Device Permissions
          </h3>
          <p>
            Leckham may request access to your device&apos;s storage only for
            the purpose of accessing and storing books and application data
            locally. No other permissions are required or requested.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Third-Party Services
          </h3>
          <p>
            Leckham integrates only with{" "}
            <strong className="font-medium text-text-primary">
              Firebase Analytics
            </strong>{" "}
            for anonymous usage tracking. No advertising networks or other
            third-party analytics tools are used.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Children&apos;s Privacy
          </h3>
          <p>
            Our application does not collect information from anyone, including
            children under the age of 13.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Changes to This Privacy Policy
          </h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Contact Us
          </h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="font-mono text-sm font-medium text-text-primary">
            Email: elagzeren@gmail.com · Developer: ErenElagz
          </p>
          <p className="font-mono text-xs text-text-muted">
            Last Updated: October 19, 2025
          </p>
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-text-secondary">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-text-primary">
            Terms and Conditions
          </h2>
          <p className="mt-2">
            By downloading or using the app, these terms will automatically apply
            to you – you should make sure therefore that you read them carefully
            before using the app.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Application Usage
          </h3>
          <p>
            Leckham is designed to be used as an offline book reading
            application. You are responsible for ensuring that any content you
            read through our application does not infringe on copyright laws in
            your jurisdiction.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Intellectual Property
          </h3>
          <p>
            Leckham and its original content, features, and functionality are
            owned by Eren Elagz and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">Liability</h3>
          <p>
            Leckham is provided &quot;as is&quot; without any warranties,
            expressed or implied. We do not guarantee that the app will always
            function without disruptions, delays, or imperfections.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-text-primary">
            Changes to These Terms
          </h3>
          <p>
            We may update our Terms and Conditions from time to time. We will
            notify you of any changes by posting the new Terms and Conditions on
            this page.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Last Updated: October 19, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
