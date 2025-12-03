import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack dashboard built with Next.js and Supabase. Features real-time data synchronization.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Two",
      description: "E-commerce platform with Stripe integration. Handles cart state management using Redux.",
      tags: ["React", "Redux", "Stripe", "Node.js"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Three",
      description: "Mobile-first task management application. Uses local storage for data persistence.",
      tags: ["Vue.js", "Firebase", "PWA"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Four",
      description: "AI content generator wrapper using OpenAI API. Simple interface for generating marketing copy.",
      tags: ["Python", "Flask", "OpenAI API"],
      link: "#",
      github: "#",
    },
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
            {/* Placeholder for project image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
              [Project Screenshot]
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
                <a
                  href={project.link}
                  className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  <Github size={16} className="mr-1" /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}