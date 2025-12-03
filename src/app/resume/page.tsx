export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">My professional journey and education.</p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          Work Experience
        </h2>
        <div className="border-l-2 border-gray-200 ml-3 space-y-12 pl-8 relative">
          
          {/* JOB 1 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600"></span>
            <h3 className="text-lg font-bold text-gray-900">Senior Software Engineer</h3>
            <div className="text-blue-600 font-medium mb-1">Tech Corp Inc.</div>
            <div className="text-sm text-gray-500 mb-4">Jan 2023 - Present</div>
            <p className="text-gray-600">
              Led the migration of legacy monolith to microservices architecture. Improved system scalability by 40% and mentored junior developers.
            </p>
          </div>

          {/* JOB 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Software Engineer</h3>
            <div className="text-blue-600 font-medium mb-1">Creative Solutions Ltd.</div>
            <div className="text-sm text-gray-500 mb-4">Jun 2021 - Dec 2022</div>
            <p className="text-gray-600">
              Developed full-stack web applications using React and Node.js. Integrated third-party APIs for payment processing and data visualization.
            </p>
          </div>

          {/* JOB 3 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Frontend Developer</h3>
            <div className="text-blue-600 font-medium mb-1">WebFlow Agency</div>
            <div className="text-sm text-gray-500 mb-4">Jan 2020 - May 2021</div>
            <p className="text-gray-600">
              Focused on UI/UX implementation using Next.js and Tailwind CSS. Reduced page load times by 25% through image optimization and lazy loading.
            </p>
          </div>

          {/* JOB 4 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Junior Developer</h3>
            <div className="text-blue-600 font-medium mb-1">Startup Hub</div>
            <div className="text-sm text-gray-500 mb-4">Jun 2019 - Dec 2019</div>
            <p className="text-gray-600">
              Assisted in the development of the company's MVP mobile application using React Native. Participated in daily stand-ups and code reviews.
            </p>
          </div>

          {/* JOB 5 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Web Development Intern</h3>
            <div className="text-blue-600 font-medium mb-1">Digital Marketing Pros</div>
            <div className="text-sm text-gray-500 mb-4">Jan 2019 - May 2019</div>
            <p className="text-gray-600">
              Built responsive landing pages for various clients using HTML, CSS, and JavaScript. Optimized SEO elements to improve search rankings.
            </p>
          </div>

          {/* JOB 6 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Freelance Developer</h3>
            <div className="text-blue-600 font-medium mb-1">Self-Employed</div>
            <div className="text-sm text-gray-500 mb-4">2017 - 2019</div>
            <p className="text-gray-600">
              Worked with small local businesses to create their online presence. Managed hosting, domain registration, and ongoing site maintenance.
            </p>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="space-y-4">
          
          {/* Education 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Master of Science in Computer Science</h3>
            <div className="text-gray-600">Tech University</div>
            <div className="text-sm text-gray-400 mt-1">2020 - 2022</div>
          </div>

          {/* Education 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Information Technology</h3>
            <div className="text-gray-600">State College</div>
            <div className="text-sm text-gray-400 mt-1">2016 - 2020</div>
          </div>

           {/* Education 3 */}
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Full Stack Web Development Bootcamp</h3>
            <div className="text-gray-600">Coding Academy</div>
            <div className="text-sm text-gray-400 mt-1">Summer 2018</div>
          </div>

        </div>
      </section>
    </div>
  );
}