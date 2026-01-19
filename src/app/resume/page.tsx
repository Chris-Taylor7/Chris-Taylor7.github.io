import React from "react";
import { 
  Shield, 
  Code, 
  Cpu, 
  ShoppingCart, 
  ChevronRight, 
  GraduationCap, 
  Briefcase 
} from "lucide-react";

export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 p-4">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">
          My professional journey and education, starting with the most recent.
        </p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Work Experience
        </h2>
        
        {/* Timeline Container */}
        <div className="border-l-2 border-gray-200 ml-3 space-y-16 pl-8 relative pb-2">
          
          {/* JOB 1: Lincoln Electric (Red) */}
          <div className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow-sm">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            
            <h3 className="text-lg font-bold text-gray-900">Lincoln Electric</h3>
            <div className="text-red-600 font-medium mb-1">Cybersecurity Analyst Co-op</div>
            <div className="text-sm text-gray-500 mb-4">May 2025 - August 2025</div>
            
            <ul className="space-y-3">
              {[
                "Operationalized non-functional security requirements across development teams by implementing CISA secure-by-design practices at the policy and procedure level.",
                "Integrated SAST and SCA tools into developer workflows and effectively communicated security metrics to non-technical stakeholders.",
                "Leveraged Rapid7 Insight AppSec to increase vulnerability identification by 780% across the organization.",
                "Spearheaded an AI-driven initiative to capture institutional knowledge, significantly improving organizational workflows and productivity."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* JOB 2: Schaeffler Group (Blue) */}
          <div className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white bg-green-700 flex items-center justify-center shadow-sm">
              <Code className="w-3.5 h-3.5 text-white" />
            </div>

            <h3 className="text-lg font-bold text-gray-900">Schaeffler Group</h3>
            <div className="text-green-700 font-medium mb-1">Full Stack Software Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">Jan 2024 - May 2024, Aug 2024 - Dec 2024</div>
            
            <ul className="space-y-3">
              {[
                "Developed scalable full-stack applications for internal stakeholders using TypeScript, C# .NET, and SQL databases.",
                "Collaborated directly with end-users to gather requirements and deliver custom solutions tailored to specific business needs.",
                "Streamlined organization-wide communication channels by digitizing and optimizing business-to-customer workflows."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* JOB 3: Midmark Corporation (Cyan) */}
          <div className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white bg-cyan-600 flex items-center justify-center shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-white" />
            </div>

            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-cyan-600 font-medium mb-1">Software Developer Co-op</div>
            <div className="text-sm text-gray-500 mb-4">May 2023 - August 2023</div>
            
            <ul className="space-y-3">
              {[
                "Engineered software solutions for a digital platform serving customers, dealers, and technicians.",
                "Collaborated within a 15-person agile team to deliver high-quality features in two-week sprints.",
                "Maintained and enhanced the customer portal using microfrontend architecture in React.js."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* JOB 4: Midmark Corporation (Cyan) */}
          <div className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white bg-cyan-600 flex items-center justify-center shadow-sm">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>

            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-cyan-600 font-medium mb-1">Cybersecurity Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">August 2022 - December 2022</div>
            
            <ul className="space-y-3">
              {[
                "Automated code coverage and API scanning tools, enabling seamless integration into developer sprint cycles.",
                "Implemented agent-based SCA scanning within CI/CD pipelines to streamline user story creation and accelerate code remediation.",
                "Mitigated potential security threats to protect internal and external personnel and company assets."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* JOB 5: Staples Corporation (Red) */}
          <div className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow-sm">
              <ShoppingCart className="w-3.5 h-3.5 text-white" />
            </div>

            <h3 className="text-lg font-bold text-gray-900">Staples Corporation</h3>
            <div className="text-red-600 font-medium mb-1">Sales and Technology Repair Associate</div>
            <div className="text-sm text-gray-500 mb-4">May 2022 - August 2022</div>
            
            <ul className="space-y-3">
              {[
                "Led technology sales, providing expert consultation to drive high customer satisfaction and revenue.",
                "Achieved the highest sales record of the year for the location in 2022.",
                "Diagnosed and repaired a wide variety of consumer electronics at the technical support desk."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <ChevronRight className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h2>
        <div className="grid grid-cols-1 gap-6">
          
          {/* Education 1 - UC (Red Accent) */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Cybersecurity</h3>
            <div className="text-gray-700 font-medium">University of Cincinnati</div>
            <div className="text-sm text-gray-400 mt-2">August 2021 - May 2026</div>
          </div>

          {/* Education 2 - UC (Red Accent) */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Information Technology - Networking Systems</h3>
            <div className="text-gray-700 font-medium">University of Cincinnati</div>
            <div className="text-sm text-gray-400 mt-2">August 2021 - May 2026</div>
          </div>

           {/* Education 3 - High School (Black/Gray Accent) */}
           <div className="bg-white p-6 rounded-lg border-l-4 border-gray-800 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1">
            <h3 className="text-lg font-bold text-gray-900">High School Diploma</h3>
            <div className="text-gray-700 font-medium">New Philadelphia High School</div>
            <div className="text-sm text-gray-400 mt-2">August 2018 - May 2021</div>
          </div>

        </div>
      </section>
    </div>
  );
}