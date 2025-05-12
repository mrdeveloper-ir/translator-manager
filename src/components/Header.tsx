import { Globe } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  const isManagement = location.pathname === "/management";

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              TranslationHub
            </span>
          </div>

          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                !isManagement
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              } transition-colors`}
            >
              Public View
            </Link>
            <Link
              to="/management"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isManagement
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              } transition-colors`}
            >
              Management
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
