import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login — KashNex</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400 via-purple-400 to-pink-400 blur-3xl" />
        
        <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In to KashNex</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  required
                />
                <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M16 12h2a2 2 0 012 2v6H4v-6a2 2 0 012-2h2M16 12V8a4 4 0 00-8 0v4m8 0H8" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  required
                />
                <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 11c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z" />
                    <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox rounded text-indigo-600" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-indigo-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
