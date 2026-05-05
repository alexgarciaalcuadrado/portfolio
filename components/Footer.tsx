import { socialIcons } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <div className="container mx-auto 2xl pt-[50px] pb-8">
    <div className="pb-10 justify-center flex">
      {socialIcons.map((social) => (
        <Link
          href={social.link}
          rel="noopener noreferrer"
          target="_blank"
          key={social.alt}
          className="z-[1]"
        >
          <Image
            src={social.image}
            height={30}
            width={30}
            className="mx-5"
            alt={social.alt}
          />
        </Link>
      ))}
    </div>
    <p className="text-gray-300 text-center text-sm">
      Created with ❤️ using Next.js
    </p>
  </div>
);

export default Footer;
