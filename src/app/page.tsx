import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center min-h-[60vh] space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Hi, I'm Chris Taylor.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          I'm a software engineer passionate about building accessible, pixel-perfect user interfaces that blend design and function.
          Hello! My name is Christopher Taylor and I am a cybersecurity major from the University of Cincinnati. I am passionate about security, digital forensics, software development, and making the internet a kinder place to engage in. I am looking for any analyst position, with a focus in the law enforcement field. 

Most recently, I was employed at Lincoln Electric pioneering DevSecOps across the organization. This comes in many forms, from operationalizing non-functional requirements to sitting down with developers to build customized security scanning pipelines. I enjoy meeting a lot of new people this way! Making the employees we work everyday with have easier lives for the 8 hours they are clocked in is my biggest passion. 

In my free time, I am the president of one of UC's satellite clubs of UC Esports, and I help run a charity called the Collegiate Esports Network, in which we organize events to raise money for various charities, including The Red Cross and A Kid Again! 

I look forward to hearing from you. Thanks for visiting!
        </p>
        
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="https://www.linkedin.com/in/chris-taylor-737469212/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/" // Update this if you have one
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-black transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 text-gray-500 hover:text-red-500 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}