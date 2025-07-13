import Head from 'next/head';
import Link from 'next/link';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up — KashNex</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-400 via-indigo-500 to-purple-500 blur-3xl" />

        <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your KashNex Account</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
