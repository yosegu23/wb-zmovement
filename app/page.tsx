import HyperText from "@/components/magicui/hyper-text";
import RetroGrid from "@/components/magicui/retro-grid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Image
        src="/images/mlbb-removebg.png"
        alt="Mobile Legend Logo"
        width={150}
        height={150}
        className="absolute left-10 top-10"
      />
      <Image
        src="/images/bhsi-manjur.png"
        alt="BHSI Manjur Logo"
        width={150}
        height={150}
        className="absolute right-10 top-10"
      />
      <Image
        src="/images/BHSI_PHOTO.png"
        width={300}
        height={300}
        alt="BHSI"
        className="z-10 absolute top-10 sm:top-15 md:top-6 lg:top-14 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:h-52"
      />
      <HyperText
        className="z-10 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white"
        text="MLBB Championship"
      />
      <HyperText
        className="z-10 text-base sm:text-lg md:text-xl font-normal text-black dark:text-white"
        text="Presented For BHSI By Z Movement"
      />
      <Link href="/auth">
        <button className="px-4 py-2 z-10 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          JOIN THE TOURNAMENT 🚀
        </button>
      </Link>
      <div className="absolute bottom-10 z-10 text-center">
        © 2024 WheelBox. All rights reserved.
      </div>
      <RetroGrid />
    </div>
  );
}
