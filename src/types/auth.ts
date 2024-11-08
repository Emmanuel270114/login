export type Role = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export interface NewUser {
  email: string;
  name: string;
  password: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getAllUsers: () => User[];
  createUser: (newUser: NewUser) => Promise<void>;
}