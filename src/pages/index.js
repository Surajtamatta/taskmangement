import Image from "next/image";
import localFont from "next/font/local";
import React,{useState} from "react";
import Navbar from "@/components/Navbar";
import Advertize from "@/components/Advertize";
import Layouts from "@/components/Layout";
import Hero from "@/views/TaskManager";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {
  return (
   
      <div className="w-full flex justify-center">
        <Hero/>
      </div>
  
  );
}
