import LoginPage from '@/pages/login';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
        <LoginPage />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
};