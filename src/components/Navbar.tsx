import { LogOut, User as UserIcon, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">SecureApp</span>
            </Link>
          </div>

          {user && (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
              >
                <UserIcon className="h-5 w-5" />
                <span>{user.name}</span>
              </Link>
              
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Admin Panel
                </Link>
              )}

              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};