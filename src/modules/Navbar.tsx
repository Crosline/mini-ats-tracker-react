import { BriefcaseIcon, UserPlusIcon } from "../icons";

const Navbar = () => {
  return (
    <nav className="bg-white/30 backdrop-blur-lg fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl mx-auto rounded-xl shadow-md z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-7 w-7 text-indigo-600" />
          <button
            onClick={() => {}}
            className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
          >
            Mini-ATS
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => {}} className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">
            Login
          </button>
          <button
            onClick={() => {}}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors transform hover:scale-105"
          >
            <UserPlusIcon className="h-5 w-5" />
            <span>Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
