import { Link } from "react-router";
import { BriefcaseIcon, UserPlusIcon } from "../icons";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { accessToken, logout } = useAuth();

  return (
    <nav className="bg-white/30 backdrop-blur-lg fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl mx-auto rounded-xl shadow-md z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-7 w-7 text-indigo-600" />
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            Mini-ATS
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink label="Jobs" to="/jobs" />
          {accessToken ? (
            <NavButton label="Logout" onClick={logout} />
          ) : (
            <NavLink label="Login" to="/login" type="button" icon={<UserPlusIcon className="h-5 w-5" />} />
          )}
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  label: string;
  to: string;
  type?: "text" | "button";
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ label, to, type = "text", icon = null }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 transition-colors
    ${
      type === "button"
        ? "bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 "
        : "text-gray-600 font-medium hover:text-indigo-600"
    }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface NavButtonProps {
  label: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700"
    >
      {label}
    </button>
  );
};

export default NavBar;
