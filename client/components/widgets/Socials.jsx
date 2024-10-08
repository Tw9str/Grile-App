import React from "react";
import Link from "next/link";
import {
  MdiFacebook,
  MdiInstagram,
  MdiYoutube,
  RiTwitterXFill,
} from "./SocialIcons";

export default function Socials({ className, color }) {
  return (
    <ul className={className}>
      <li className="hover:scale-110 duration-300">
        <Link href="/" aria-label="twitter">
          <RiTwitterXFill fill={color} />
        </Link>
      </li>
      <li className="hover:scale-110 duration-300">
        <Link href="/" aria-label="instagram">
          <MdiInstagram fill={color} />
        </Link>
      </li>
      <li className="hover:scale-110 duration-300">
        <Link href="/" aria-label="facebook">
          <MdiFacebook fill={color} />
        </Link>
      </li>
      <li className="hover:scale-110 duration-300">
        <Link href="/" aria-label="youtube">
          <MdiYoutube fill={color} />
        </Link>
      </li>
    </ul>
  );
}
