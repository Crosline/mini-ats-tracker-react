import { BriefcaseIcon } from "../../icons";

const Home = () => {
  return (
    <main className="flex items-center justify-center h-screen text-center px-4">
      <div className="space-y-6">
        <div className="inline-block bg-indigo-100 text-indigo-600 p-4 rounded-full shadow-inner">
          <BriefcaseIcon className="h-16 w-16" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
          Simplify Your Hiring Workflow.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-500">
          Mini-ATS is a lightweight Applicant Tracking System designed to help you manage job postings and track
          candidates from application to hire, effortlessly.
        </p>
        <div>
          <button
            onClick={() => {}}
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
