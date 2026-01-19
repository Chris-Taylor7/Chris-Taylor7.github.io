import React from "react";
import { 
  Shield, 
  Code, 
  Cpu, 
  ShoppingCart, 
  ChevronRight, 
  GraduationCap, 
  Briefcase,
  LucideIcon 
} from "lucide-react";

// --- Types ---
interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  icon: LucideIcon;
  points: string[];
  // We store specific color classes to ensure Tailwind scans them correctly
  colors: {
    timelineBg: string; // The circle background
    roleText: string;   // The role title color
    bulletIcon: string; // The chevron color
  };
}

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  borderColor: string; // e.g., "border-red-600"
}

// --- Data ---
const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Lincoln Electric",
    role: "Cybersecurity Analyst Co-op",
    date: "May 2025 - August 2025",
    icon: Shield,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Operationalized non-functional security requirements across development teams by implementing CISA secure-by-design practices at the policy and procedure level.",
      "Integrated SAST and SCA tools into developer workflows and effectively communicated security metrics to non-technical stakeholders.",
      "Leveraged Rapid7 Insight AppSec to increase vulnerability identification by 780% across the organization.",
      "Spearheaded an AI-driven initiative to capture institutional knowledge, significantly improving organizational workflows and productivity."
    ]
  },
  {
    company: "Schaeffler Group",
    role: "Full Stack Software Engineering Co-op",
    date: "Jan 2024 - May 2024, Aug 2024 - Dec 2024",
    icon: Code,
    colors: { timelineBg: "bg-green-700", roleText: "text-green-700", bulletIcon: "text-green-700" },
    points: [
      "Developed scalable full-stack applications for internal stakeholders using TypeScript, C# .NET, and SQL databases.",
      "Collaborated directly with end-users to gather requirements and deliver custom solutions tailored to specific business needs.",
      "Streamlined organization-wide communication channels by digitizing and optimizing business-to-customer workflows."
    ]
  },
  {
    company: "Midmark Corporation",
    role: "Software Developer Co-op",
    date: "May 2023 - August 2023",
    icon: Cpu,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Engineered software solutions for a digital platform serving customers, dealers, and technicians.",
      "Collaborated within a 15-person agile team to deliver high-quality features in two-week sprints.",
      "Maintained and enhanced the customer portal using microfrontend architecture in React.js."
    ]
  },
  {
    company: "Midmark Corporation",
    role: "Cybersecurity Engineering Co-op",
    date: "August 2022 - December 2022",
    icon: Shield,
    colors: { timelineBg: "bg-cyan-600", roleText: "text-cyan-600", bulletIcon: "text-cyan-600" },
    points: [
      "Automated code coverage and API scanning tools, enabling seamless integration into developer sprint cycles.",
      "Implemented agent-based SCA scanning within CI/CD pipelines to streamline user story creation and accelerate code remediation.",
      "Mitigated potential security threats to protect internal and external personnel and company assets."
    ]
  },
  {
    company: "Staples Corporation",
    role: "Sales and Technology Repair Associate",
    date: "May 2022 - August 2022",
    icon: ShoppingCart,
    colors: { timelineBg: "bg-red-600", roleText: "text-red-600", bulletIcon: "text-red-600" },
    points: [
      "Led technology sales, providing expert consultation to drive high customer satisfaction and revenue.",
      "Achieved the highest sales record of the year for the location in 2022.",
      "Diagnosed and repaired a wide variety of consumer electronics at the technical support desk."
    ]
  }
];

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science in Cybersecurity",
    school: "University of Cincinnati",
    date: "August 2021 - May 2026",
    borderColor: "border-red-600"
  },
  {
    degree: "Bachelor of Information Technology - Networking Systems",
    school: "University of Cincinnati",
    date: "August 2021 - May 2026",
    borderColor: "border-red-600"
  },
  {
    degree: "High School Diploma",
    school: "New Philadelphia High School",
    date: "August 2018 - May 2021",
    borderColor: "border-gray-800"
  }
];

// --- Component ---
export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-slide-up p-4">
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
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative group">
              {/* Timeline Icon */}
              <div className={`absolute -left-[43px] top-0 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${job.colors.timelineBg}`}>
                <job.icon className="w-3.5 h-3.5 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
              <div className={`${job.colors.roleText} font-medium mb-1`}>{job.role}</div>
              <div className="text-sm text-gray-500 mb-4">{job.date}</div>
              
              <ul className="space-y-3">
                {job.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3 text-gray-600">
                    <ChevronRight className={`w-5 h-5 shrink-0 mt-0.5 ${job.colors.bulletIcon}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg border-l-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 ${edu.borderColor}`}
            >
              <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
              <div className="text-gray-700 font-medium">{edu.school}</div>
              <div className="text-sm text-gray-400 mt-2">{edu.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}