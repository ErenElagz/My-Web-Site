import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import LinkButton from "../components/LinkButton/LinkButton";
import Footer from "@/components/Footer/Footer";

export default function Designes() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Navigation */}
      <NavBar />

      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Design Portfolio
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also designing. You can check my designs in Dribbble and Behance.
        </p>
      </div>

      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My Dribbble Profile"
          url="https://dribbble.com/ErenElagz"
          icon="akar-icons:dribbble-fill"
        />
        <SocialButtons
          title="My Behance Account"
          url="https://behance.com/in/ErenElagz"
          icon="akar-icons:behance-fill"
        />
        <SocialButtons
          title="My Pinterest Account"
          url="https://pinterest.com/ErenElagz"
          icon="akar-icons:pinterest-fill"
        />
      </div>
      <div className="w-full mt-8 flex flex-col gap-4">
        {/* HitBis */}
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
        <Link href="/projects/company-os" passHref className="hover:underline">
          <div className="w-full border rounded-3xl flex flex-row  justify-between">
            <div className="flex flex-col gap-3 w-full p-5 py-8">
              <p className="text-sm font-bold tracking-tight font-geist">
                21/07/2025
              </p>
              <p className="text-base font-bold tracking-tight font-geist">
                Best React Native Map Libraries, Comparison of the 7 Map Module
              </p>
              <p className="text-sm text-gray-400 font-lexend">
                Top React Native Map Libraries based on performance and
                features.
              </p>
            </div>
            <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
              <Image
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KTl3-WbilK8qvMt8EnUEwA.jpeg" // ✅ URL'den resim alır
                alt="Blog Image"
                width={750} // Genişlik belirtmek zorundasın
                height={760} // Yükseklik belirtmek zorundasın
              />
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
