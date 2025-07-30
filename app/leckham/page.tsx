import React from "react";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leckham | Privacy Policy",
  description: "Privacy Policy for Leckham - Offline Book Reading App",
};

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-16 font-lexend">
          Leckham: Minimalist E-Book Reader
        </h1>
        {/* Social Buttons */}
        <div className="flex flex-row gap-3 mt-6 flex-wrap">
          <SocialButtons
            title="See on Google Play Store"
            url="https://play.google.com/store/apps/details?id=com.leckham&hl=en"
            icon="akar-icons:google-fill"
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-12 font-lexend">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-500 mt-3">
          Leckham is committed to protecting your privacy. This Privacy Policy
          outlines our practices regarding your personal information.
        </p>
      </div>

      {/* Privacy Policy Content */}
      <div className="w-full mt-2 flex flex-col gap-6">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
          <p className="text-base text-gray-500 mt-3">
            Thank you for choosing Leckham, an offline book reading application.
            This Privacy Policy is designed to help you understand how Leckham
            handles your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Information Collection
          </h2>
          <p className="text-base text-gray-500 mt-3">
            <strong>Leckham does not collect any personal information.</strong>
            Our application operates completely offline and does not:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Collect or store personal data</li>
            <li>Track your reading habits or preferences</li>
            <li>Access your contacts, location, or device information</li>
            <li>Transmit any data to external servers</li>
            <li>Use analytics or tracking tools</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Data Storage</h2>
          <p className="text-base text-gray-500 mt-3">
            All books and reading progress are stored locally on your device.
            This data remains on your device and is never transmitted to our
            servers or any third parties.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Device Permissions</h2>
          <p className="text-base text-gray-500 mt-3">
            Leckham may request access to your device&apos;s storage only for
            the purpose of accessing and storing books and application data
            locally. No other permissions are required or requested.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Third-Party Services</h2>
          <p className="text-base text-gray-500 mt-3">
            Leckham does not integrate with any third-party services, analytics
            tools, or advertising networks that could collect your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Children&apos;s Privacy
          </h2>
          <p className="text-base text-gray-500 mt-3">
            Our application does not collect information from anyone, including
            children under the age of 13.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Changes to This Privacy Policy
          </h2>
          <p className="text-base text-gray-500 mt-3">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p className="text-base text-gray-500 mt-3">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-2xl font-semibold mt-6">
            Email: elagzeren@gmail.com
            <br />
            Developer: ErenElagz
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: June 10, 2025
          </p>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="w-full border-2 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-10 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight font-lexend">
          Terms and Conditions
        </h1>

        <p className="text-base text-gray-500 mt-0">
          By downloading or using the app, these terms will automatically apply
          to you – you should make sure therefore that you read them carefully
          before using the app.
        </p>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-4">Application Usage</h3>
          <p className="text-base text-gray-500 mt-3">
            Leckham is designed to be used as an offline book reading
            application. You are responsible for ensuring that any content you
            read through our application does not infringe on copyright laws in
            your jurisdiction.
          </p>

          <h3 className="text-xl font-semibold mt-4">Intellectual Property</h3>
          <p className="text-base text-gray-500 mt-3">
            Leckham and its original content, features, and functionality are
            owned by Eren Elagz and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>

          <h3 className="text-xl font-semibold mt-4">Liability</h3>
          <p className="text-base text-gray-500 mt-3">
            Leckham is provided &quot;as is&quot; without any warranties,
            expressed or implied. We do not guarantee that the app will always
            function without disruptions, delays, or imperfections.
          </p>

          <h3 className="text-xl font-semibold mt-4">Changes to These Terms</h3>
          <p className="text-base text-gray-500 mt-3">
            We may update our Terms and Conditions from time to time. We will
            notify you of any changes by posting the new Terms and Conditions on
            this page.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: June 10, 2025
          </p>
        </div>
      </div>
    </>
  );
}
