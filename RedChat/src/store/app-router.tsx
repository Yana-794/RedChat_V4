import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('@/page/login'));
const ChatPage = lazy(() => import('@/page/chat'));
const RegisterPage = lazy(() => import('@/page/register'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

export const AppRouter = () => {
  const isAuthenticated = false; // сделать проверку авторизации

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Страница входа */}
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* Страница регистрации */}
        <Route
          path="/register"
          element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/" />}
        />

        {/* Главная страница (чат) */}
        <Route
          path="/"
          element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
        />

        {/* Перенаправление для неизвестных путей */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};