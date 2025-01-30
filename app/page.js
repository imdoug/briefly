'use client'
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from "@/context/context";


export default function Home() {
  const { currUser } = useAuth();

  return (
    <ProtectedRoute>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      HOME PAGE
    </div>
    </ProtectedRoute>
  );
}
