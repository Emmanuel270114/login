import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <ShieldAlert className="h-12 w-12 text-red-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Access Denied
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          You don't have permission to access this page.
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/profile"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Return to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};