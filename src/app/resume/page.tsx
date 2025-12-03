export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">My professional journey and education.</p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          Work Experience
        </h2>
        <div className="border-l-2 border-gray-200 ml-3 space-y-10 pl-8 relative">
          
          {/* JOB 1 - COPY PASTE THIS BLOCK FOR MORE JOBS */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500"></span>
            <h3 className="text-lg font-bold text-gray-900">Software Engineer</h3>
            <div className="text-blue-600 font-medium mb-1">Company Name</div>
            <div className="text-sm text-gray-500 mb-4">Jan 2022 - Present</div>
            <p className="text-gray-600">
              Description of your role, achievements, and technologies used. 
              Fill this in with the data from your LinkedIn "Experience" section.
            </p>
          </div>

          {/* JOB 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Junior Developer</h3>
            <div className="text-blue-600 font-medium mb-1">Previous Company</div>
            <div className="text-sm text-gray-500 mb-4">Jun 2020 - Dec 2021</div>
            <p className="text-gray-600">
              Developed and maintained web applications using React and Node.js. 
              Collaborated with cross-functional teams to deliver high-quality software.
            </p>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
          <div className="text-gray-600">University Name</div>
          <div className="text-sm text-gray-400 mt-1">2016 - 2020</div>
        </div>
      </section>
    </div>
  );
}