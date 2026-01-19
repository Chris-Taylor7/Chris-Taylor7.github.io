import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  // 1. Define color themes to avoid Tailwind class conflicts
  // and give each project a distinct personality.
  const colorVariants = {
    red: {
      tag: "bg-red-50 text-red-700 border-red-100",
      title: "group-hover:text-red-600",
      link: "hover:text-red-600",
      border: "hover:border-red-500",
    },
    blue: {
      tag: "bg-blue-50 text-blue-700 border-blue-100",
      title: "group-hover:text-blue-600",
      link: "hover:text-blue-600",
      border: "hover:border-blue-500",
    },
    indigo: {
      tag: "bg-indigo-50 text-indigo-700 border-indigo-100",
      title: "group-hover:text-indigo-600",
      link: "hover:text-indigo-600",
      border: "hover:border-indigo-500",
    },
    teal: {
      tag: "bg-teal-50 text-teal-700 border-teal-100",
      title: "group-hover:text-teal-600",
      link: "hover:text-teal-600",
      border: "hover:border-teal-500",
    },
    violet: {
      tag: "bg-violet-50 text-violet-700 border-violet-100",
      title: "group-hover:text-violet-600",
      link: "hover:text-violet-600",
      border: "hover:border-violet-500",
    },
    sky: {
      tag: "bg-sky-50 text-sky-700 border-sky-100",
      title: "group-hover:text-sky-600",
      link: "hover:text-sky-600",
      border: "hover:border-sky-500",
    },
    orange: {
      tag: "bg-orange-50 text-orange-700 border-orange-100",
      title: "group-hover:text-orange-600",
      link: "hover:text-orange-600",
      border: "hover:border-orange-500",
    },
    slate: {
      tag: "bg-slate-100 text-slate-700 border-slate-200",
      title: "group-hover:text-slate-700",
      link: "hover:text-slate-700",
      border: "hover:border-slate-500",
    },
  };

  const projects = [
    {
      title: "SubletUC",
      description: "A student housing application built for UC students, by UC students. Meant to be portable to any university.",
      tags: ["Razor Blazor", ".NET Framework", "HTML/CSS", "SQL Server"],
      link: "https://www.subletuc.com/",
      github: null,
      photo: "/SUBLETUC_LOGO_FINAL.png", 
      fit: "contain",
      color: "red" // UC is Red/Black
    },
    {
      title: "AgileBoard.ai",
      description: "A bug tracking app that helps prioritizes tasks, enabled using the Google Gemini AI API.",
      tags: ["Angular.js", "Tailwindcss", "Vercel", "TypeScript", "Prisma"],
      link: "https://bug-tracker-2lzlohlc4-chris-taylor7s-projects.vercel.app/",
      github: "https://github.com/Chris-Taylor7/BugTracker",
      photo: "/Agile.png",
      fit: "contain",
      color: "violet" // AI/Modern feel
    },
    {
      title: "Collegiate Esports Network",
      description: "Website for the non-profit I am a part of called the Collegiate Esports Network.",
      tags: ["Python", "Svelte.js", "Sveltekit"],
      link: "https://collegiateesportsnetwork.org/",
      github: null,
      photo: "/CEN_Logo.webp",
      fit: "contain",
      color: "blue" // CEN Logo is Blue
    },
    {
      title: "SubletUC-React",
      description: "Student housing application built for UC students, built using React.js and .NET 8!",
      tags: [".NET", "React.js", "SQL Express", "Tailwind css"],
      link: "https://sublet-uc-react-git-main-chris-taylor7s-projects.vercel.app/",
      github: "https://github.com/Chris-Taylor7/SubletUC-React",
      photo: "/SUBLETUC_LOGO_FINAL.png", 
      fit: "contain",
      color: "teal" // React is often Teal/Cyan
    },
    {
      title: "CEN Discord Bot",
      description: "Discord Bot using authentication for the non-profit I am a part of called the Collegiate Esports Network.",
      tags: ["Python", "OauthV2", "Discord API"],
      link: null,
      github: "https://github.com/Collegiate-Esports-Network/CEN-Bot",
      photo: "/CEN_Logo.webp",
      fit: "contain",
      color: "indigo" // Discord is Indigo/Blurple
    },
    {
      title: "Flutter Youtube Directory",
      description: "Directory of Flutter documentation on Youtube, built in Flutter for desktop and mobile.",
      tags: ["Flutter", "Google Cloud Platform", "DART"],
      link: "https://flutter-youtube-directory-k9bv1wqoz-chris-taylor7s-projects.vercel.app/",
      github: "https://github.com/Chris-Taylor7/Flutter-Youtube-directory",
      photo: "/flutter.png",
      fit: "cover",
      color: "sky" // Flutter is Sky Blue
    },
    {
      title: "Notes-MAUI",
      description: "Note taking application built in .NET MAUI with a SQL Express database",
      tags: [".NET MAUI", "Mobile Development", "SQL Express"],
      link: null,
      github: "https://github.com/Chris-Taylor7/Notes-MAUI",
      photo: "/Maui.webp", 
      fit: "cover",
      color: "violet" // .NET MAUI uses purple branding
    },
    {
      title: "Login Component",
      description: "Responsive Login component made in native HTML, CSS, and Javascript",
      tags: ["HTML5", "CSS3", "Javascript"],
      link: null,
      github: "https://github.com/Chris-Taylor7/login",
      photo: "/github-logo.png",
      fit: "cover",
      color: "orange" // HTML5 is Orange
    },
    {
      title: "Chris Taylor's Portfolio",
      description: "Want to see how this site was made? Check out the code on GitHub!",
      tags: ["NEXT.js", "Tailwindcss", "Vercel", "GitHub"],
      link: "https://chris-taylor7.github.io/",
      github: "https://github.com/Chris-Taylor7/Chris-Taylor7.github.io",
      photo: "/github-logo.png",
      fit: "cover",
      color: "slate" // GitHub/Neutral
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600">A selection of my recent work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          // Get the color styles based on the project's assigned color
          const theme = colorVariants[project.color || 'blue'];

          return (
            <div
              key={index}
              className={`
                group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden 
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-2 hover:border-transparent ${theme.border}
              `}
            >
              {/* Image Section */}
              <div className="h-48 bg-gray-50 relative border-b border-gray-100 overflow-hidden">
                {project.photo ? (
                  <Image 
                    src={project.photo} 
                    alt={project.title}
                    fill
                    className={`
                      ${project.fit === 'cover' ? 'object-cover' : 'object-contain'} 
                      group-hover:scale-105 transition-transform duration-500
                    `}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    [Photo coming soon!]
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold text-gray-900 mb-2 transition-colors ${theme.title}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${theme.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-semibold text-gray-700 transition-colors ${theme.link}`}
                    >
                      <ExternalLink size={16} className="mr-1.5" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-semibold text-gray-700 transition-colors ${theme.link}`}
                    >
                      <Github size={16} className="mr-1.5" /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}