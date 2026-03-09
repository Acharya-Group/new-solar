import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6 px-4">
      <span className="text-8xl font-bold bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">404</span>
      <h2 className="text-3xl font-bold text-green-400">Page Not Found</h2>
      <p className="text-gray-400 text-center max-w-md">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="bg-gradient-to-r from-green-400 to-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">
        Go Back Home
      </Link>
    </div>
  );
}
