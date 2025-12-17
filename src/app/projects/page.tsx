import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SubletUC",
      description: "A student housing application built for UC students, by UC students. Meant to be portable to any university.",
      tags: ["Razor Blazor", ".NET Framework", "HTML/CSS", "SQL Server"],
      link: "https://www.subletuc.com/",
      github: null,
      photo: "/SUBLETUC_LOGO_FINAL.png", 
    },
    {
      title: "SubletUC-React",
      description: "Student housing application built for UC students, built using React.js and .NET 8!",
      tags: [".NET", "React.js", "SQL Express", "Tailwind css"],
      link: "https://sublet-uc-react-git-main-chris-taylor7s-projects.vercel.app/",
      github: "https://github.com/Chris-Taylor7/SubletUC-React",
      photo: "/SUBLETUC_LOGO_FINAL.png", 
    },
    {
      title: "Flutter Youtube Directory",
      description: "Directory of Flutter documentation on Youtube, built in Flutter for desktop and mobile.",
      tags: ["Flutter", "Google Cloud Platform", "DART"],
      link: "https://flutter-youtube-directory-k9bv1wqoz-chris-taylor7s-projects.vercel.app/",
      github: "https://github.com/Chris-Taylor7/Flutter-Youtube-directory",
      photo: "/flutter.png",
    },
    {
      title: "Collegiate Esports Network",
      description: "Website for the non-profit I am a part of called the Collegiate Esports Network.",
      tags: ["Python", "Svelte.js", "Sveltekit"],
      link: "https://collegiateesportsnetwork.org/",
      github: null,
      photo: "/CEN_Logo.webp",
    },
    {
      title: "Notes-MAUI",
      description: "Note taking application built in .NET MAUI with a SQL Express database",
      tags: [".NET MAUI", "Mobile Development", "SQL Express"],
      link: null,
      github: "https://github.com/Chris-Taylor7/Notes-MAUI",
      photo: "/Maui.webp", 
    },
    {
      title: "Login Component",
      description: "Responsive Login component made in native HTML, CSS, and Javascript",
      tags: ["HTML5", "CSS3", "Javascript"],
      link: null,
      github: "https://github.com/Chris-Taylor7/login",
      photo: "/login.png",
    },
    {
      title: "Chris Taylor's Portfolio",
      description: "Want to see how this site was made? Check out the code on GitHub!",
      tags: ["NEXT.js", "Tailwindcss", "Vercel", "GitHub"],
      link: "https://chris-taylor7.github.io/",
      github: "https://github.com/Chris-Taylor7/Chris-Taylor7.github.io",
      photo: "/github-logo.png",
    }
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600">A selection of my recent work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-100 relative">
              {project.photo ? (
                <Image 
                  src={project.photo} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  [Photo coming soon!]
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    <Github size={16} className="mr-1" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}