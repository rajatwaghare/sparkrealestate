import Image from "next/image";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/logo.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className=" mb-2 mt-10  font-bold text-xl ">Website Coming Soon!</p>
        <p className="  pt-2 mb-2 border-t text-gray-600">For any query contact:</p>
        <p className=" font-bold text-gray-600 " ><AiOutlineWhatsApp className=" inline-block mr-2 " /> 7769933910</p>
        <p className=" font-bold text-gray-600 " ><MdOutlineMail className=" inline-block mr-2 " /> sparkventurerealtor@gmail.com</p>
      </main>
    </div>
  );
}
