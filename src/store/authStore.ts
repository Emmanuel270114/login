import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, NewUser, User } from '../types/auth';

// Initial users for demonstration
const INITIAL_USERS = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    password: 'admin123'
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    password: 'user123'
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: INITIAL_USERS,
      
      login: async (email: string, password: string) => {
        const { users } = get();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
          throw new Error('Invalid credentials');
        }

        const { password: _, ...userWithoutPassword } = user;
        set({ user: userWithoutPassword, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      getAllUsers: () => {
        const { users } = get();
        return users.map(({ password: _, ...user }) => user);
      },

      createUser: async (newUser: NewUser) => {
        const { users } = get();
        
        // Check if email already exists
        if (users.some(user => user.email === newUser.email)) {
          throw new Error('Email already exists');
        }

        const user = {
          ...newUser,
          id: crypto.randomUUID()
        };

        set({ users: [...users, user] });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ users: state.users })
    }
  )
);