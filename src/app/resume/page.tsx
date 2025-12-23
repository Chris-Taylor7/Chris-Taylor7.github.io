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
        <div className="border-l-2 border-gray-200 ml-3 space-y-12 pl-8 relative pb-2">
          
          {/* JOB 1 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600"></span>
            <h3 className="text-lg font-bold text-gray-900">Lincoln Electric</h3>
            <div className="text-blue-600 font-medium mb-1">Cybersecurity Analyst Co-op</div>
            <div className="text-sm text-gray-500 mb-4">May 2025 - August 2025</div>
            <div>
              <ul className="list-disc pl-5 text-gray-900 space-y-2">
                <li>
                  <span className="text-gray-600">
                    Operationalized non-functional security requirements across development teams by implementing CISA secure-by-design practices at the policy and procedure level.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Integrated SAST and SCA tools into developer workflows and effectively communicated security metrics to non-technical stakeholders.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Leveraged Rapid7 Insight AppSec to increase vulnerability identification by 780% across the organization.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Spearheaded an AI-driven initiative to capture institutional knowledge, significantly improving organizational workflows and productivity.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 2 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Schaeffler Group</h3>
            <div className="text-blue-600 font-medium mb-1">Full Stack Software Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">January 2024 - May 2024, August 2024 - December 2024</div>
            <div>
              <ul className="list-disc pl-5 text-gray-900 space-y-2">
                <li>
                  <span className="text-gray-600">
                    Developed scalable full-stack applications for internal stakeholders using TypeScript, C# .NET, and SQL databases.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Collaborated directly with end-users to gather requirements and deliver custom solutions tailored to specific business needs.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Streamlined organization-wide communication channels by digitizing and optimizing business-to-customer workflows.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 3 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-blue-600 font-medium mb-1">Software Developer Co-op</div>
            <div className="text-sm text-gray-500 mb-4">May 2023 - August 2023</div>
            <div>
              <ul className="list-disc pl-5 text-gray-900 space-y-2">
                <li>
                  <span className="text-gray-600">
                    Engineered software solutions for a digital platform serving customers, dealers, and technicians.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Collaborated within a 15-person agile team to deliver high-quality features in two-week sprints.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Maintained and enhanced the customer portal using microfrontend architecture in React.js.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 4 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Midmark Corporation</h3>
            <div className="text-blue-600 font-medium mb-1">Cybersecurity Engineering Co-op</div>
            <div className="text-sm text-gray-500 mb-4">August 2022 - December 2022</div>
            <div>
              <ul className="list-disc pl-5 text-gray-900 space-y-2">
                <li>
                  <span className="text-gray-600">
                    Automated code coverage and API scanning tools, enabling seamless integration into developer sprint cycles.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Implemented agent-based SCA scanning within CI/CD pipelines to streamline user story creation and accelerate code remediation.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Mitigated potential security threats to protect internal and external personnel and company assets.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 5 */}
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></span>
            <h3 className="text-lg font-bold text-gray-900">Staples Corporation</h3>
            <div className="text-blue-600 font-medium mb-1">Sales and Technology Repair Associate</div>
            <div className="text-sm text-gray-500 mb-4">May 2022 - August 2022</div>
            <div>
              <ul className="list-disc pl-5 text-gray-900 space-y-2">
                <li>
                  <span className="text-gray-600">
                    Led technology sales, providing expert consultation to drive high customer satisfaction and revenue.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Achieved the highest sales record of the year for the location in 2022.
                  </span>
                </li>
                <li>
                  <span className="text-gray-600">
                    Diagnosed and repaired a wide variety of consumer electronics at the technical support desk.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="space-y-4">
          
          {/* Education 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Science in Cybersecurity</h3>
            <div className="text-gray-600">University of Cincinnati</div>
            <div className="text-sm text-gray-400 mt-1">August 2021 - May 2026</div>
          </div>

          {/* Education 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Bachelor of Information Technology - Networking Systems</h3>
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