export default function Resume() {
  return (
    <div className="space-y-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">My professional journey and education, starting with the most recent.</p>
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
            <h3 className="text-lg font-bold text-gray-900">Cybersecurity Analyst Co-op</h3>
            <div className="text-blue-600 font-medium mb-1">Lincoln Electric</div>
            <div className="text-sm text-gray-500 mb-4">May 2025 - August 2025</div>
            <p className="text-gray-600">
              <ul>
                <li>
                    Operationalize non-functional security requirements across multiple software development teams. I engaged 
                    teams at the policy, standard, and procedure level to implement common secure by design practices, as defined by CISA.
                </li>
                <li>
                    Assisted with socializing SAST and SCA into developer workflows, and then communicating progress to non-technical employees. 
                </li>
                <li>
                    Utilized Rapid 7 Insight AppSec to grow identification by 780% across the organization . 
                </li>
                <li>
                    Headed a project to grow tribal knowledge capture using AI tools across the organization, improving workflows and productivity.
                </li>
              </ul>
            </p>
          </div>

          {/* JOB 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Schaeffler Group</h3>
            <div className="text-blue-600 font-medium mb-1">Full Stack Software Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">January 2024 - May 2024, August 2024 - December 2024</div>
            <p className="text-gray-600">
              <ul>
                <li>
                    Developing full scale applications for internal customers.
                </li>
                <li>
                    Communicating with customers to fit their design needs.
                </li>
                <li>
                    Using a typescript and C# .NET framework to develop full stack applications with SQL databases. 
                </li>
                <li>
                    Streamlining business to customer communications organization wide.
                </li>
              </ul>
            </p>
          </div>

          {/* JOB 4 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-blue-600 font-medium mb-1">Software Developer Co-op</div>
            <div className="text-sm text-gray-500 mb-4">May 2023 - August 2023</div>
            <p className="text-gray-600">
              <ul>
                <li>
                     Developing software for a digital platform that can be used by customers, dealers, or technicians. 
                </li>
                <li>
                    Collaborating with a team of 15 other developers to deliver features in 2 week sprints. 
                </li>
                <li>
                    Supporting our customer portal using microfrontends in React.js. 
                </li>
              </ul>
            </p>
          </div>

          {/* JOB 5 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-blue-600 font-medium mb-1">Cybersecurity Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">August 2022 - December 2022</div>
            <p className="text-gray-600">
              <ul>
                <li>
                      Automating code coverage and API scanning tools for our developer teams to integrate into their sprints. 
                </li>
                <li>
                    Implemented Agent-based SCA scanning into developer pipelines to streamline user story creation and code remediation.  
                </li>
                <li>
                    Maintaining a low level of potential threats for our company and managing the security of our internal and external employees.
                </li>
              </ul>
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
            <h3 className="text-lg font-bold text-gray-900">Bachelors of Science in Cybersecurity</h3>
            <div className="text-gray-600">University of Cincinnati</div>
            <div className="text-sm text-gray-400 mt-1">August 2021 - May 2026</div>
          </div>

          {/* Education 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Information Technology in Information Technology - Networking Systems</h3>
            <div className="text-gray-600">University of Cincinnati</div>
            <div className="text-sm text-gray-400 mt-1">August 2021 - May 2026</div>
          </div>

           {/* Education 3 */}
           <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">High School Diploma</h3>
            <div className="text-gray-600">New Philadelphia High School</div>
            <div className="text-sm text-gray-400 mt-1">August 2018 - May 2021</div>
          </div>

        </div>
      </section>
    </div>
  );
}