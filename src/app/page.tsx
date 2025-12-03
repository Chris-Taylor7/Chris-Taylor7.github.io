"use client";

import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Chris Taylor.";

  useEffect(() => {
    let typeInterval: NodeJS.Timeout;
    let loopInterval: NodeJS.Timeout;

    const startTyping = () => {
      let index = 0;
      setText(""); // Clear text to start fresh

      // Type character by character every 100ms
      typeInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        
        // Stop typing when complete
        if (index === fullText.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    };

    // 1. Run immediately on mount
    startTyping();

    // 2. Set up the loop to run every 5 seconds
    loopInterval = setInterval(() => {
      clearInterval(typeInterval); // Safety clear
      startTyping();
    }, 5000);

    // Cleanup on unmount
    return () => {
      clearInterval(typeInterval);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          {/* Min-height ensures the layout doesn't jump when text is empty */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px]">
            {text}
            <span className="animate-pulse text-blue-600">|</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            I'm a software engineer passionate about building accessible, pixel-perfect user interfaces that blend design and function.
          </p>
          
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/chris-taylor-737469212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Chris-Taylor7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-black transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:chtaylor270@gmail.com"
                className="p-3 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://www.instagram.com/christaylorisapunk/"
                className="p-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.discord.com/465965656270045184"
                className="p-3 text-gray-500 hover:text-blue-300 transition-colors"
              >
                <i className="fas fa-discord fa-sm hover:text-blue-300 transition-colors "></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Placeholder */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl bg-gray-100 flex items-center justify-center">
            {/* 
               TODO: To add your real photo:
               1. Save your photo as 'profile.jpg' in the 'public' folder.
               2. Delete the <span> below.
               3. Uncomment the <img /> tag below.
            */}
            <span className="text-gray-400 font-medium">Place Photo Here</span>
            
            {/* <img 
              src="/profile.jpg" 
              alt="Chris Taylor" 
              className="object-cover w-full h-full"
            /> */}
          </div>
        </div>

      </div>
    </div>
  );
}