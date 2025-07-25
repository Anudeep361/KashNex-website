import Head from 'next/head';
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <>
      <Head>
        <title>KashNex — Empowering Your Future with AI & Strategic Solutions</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #4B5563;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          .logo-bg {
            background: radial-gradient(circle at center, #e0e3e8 0%, #f9fafb 100%);
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KashNex",
              "url": "https://www.kashnex.com",
              "logo": "https://www.kashnex.com/logo.jpg",
              "sameAs": [
                "https://www.linkedin.com/company/kashnex",
                "https://www.instagram.com/kash.nex"
              ]
            }),
          }}
        />
      </Head>

      <body className="bg-gray-50 font-sans text-gray-900 leading-relaxed">
        {/* Navbar */}
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center space-x-3">
              <div className="p-1 rounded-lg logo-bg">
                <img src="logo.jpg" alt="K" className="h-12 w-auto" />
              </div>
              <span className="text-3xl font-bold tracking-tight">KashNex</span>
            </a>
            <nav className="hidden md:flex space-x-10 font-semibold text-gray-300">
              <a href="#about" className="hover:text-white transition">About Us</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#solutions" className="hover:text-white transition">Solutions</a>
              <a href="#careers" className="hover:text-white transition">Careers</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="/login" className="hover:text-white transition">Login</a>
              <a href="/signup" className="hover:text-white transition">Sign Up</a>
            </nav>
            <a
              href="mailto:info@kashnex.com"
              className="hidden md:inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Get in Touch
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center py-28 px-6">
          <h1 className="max-w-4xl mx-auto text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            KashNex: AI-Powered Innovation for Next-Level Business Growth
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-light mb-12">
            We deliver tailored AI solutions, strategic consulting, and digital transformation services to empower enterprises and startups worldwide.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Request a Consultation
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-20 bg-white text-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About KashNex</h2>
            <p className="text-lg leading-relaxed mb-8">
              At KashNex, we combine deep expertise in Artificial Intelligence with strategic business consulting to transform your vision into reality.
              Our mission is to accelerate innovation and maximize operational efficiency through customized AI-driven solutions tailored to your unique needs.
            </p>
            <p className="text-lg leading-relaxed">
              Founded in 2020, KashNex has empowered clients across industries including finance, healthcare, education, and technology.  
              We believe in building lasting partnerships that fuel growth, adaptability, and long-term success.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-100 py-20 px-6 text-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">AI & Machine Learning</h3>
                <p>Custom AI models and automation solutions designed to optimize workflows, increase revenue, and unlock insights from your data.</p>
              </div>
              <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Strategic Consulting</h3>
                <p>Expert guidance to align your technology initiatives with business goals and create actionable roadmaps for digital transformation.</p>
              </div>
              <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Data Analytics & Insights</h3>
                <p>Advanced analytics solutions to uncover trends, monitor KPIs, and support data-driven decision-making across your organization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="container mx-auto px-6 py-20 bg-white text-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12">Industries & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Finance & Fintech</h3>
              <p>AI-powered risk analysis, fraud detection, algorithmic trading strategies, and personalized financial planning tools.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Healthcare & Life Sciences</h3>
              <p>Intelligent diagnostics, patient data analytics, workflow automation, and AI-driven clinical decision support systems.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Education & E-Learning</h3>
              <p>Personalized learning platforms, predictive analytics to improve student outcomes, and administrative process automation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Retail & E-Commerce</h3>
              <p>Customer behavior prediction, inventory optimization, personalized marketing, and sales forecasting solutions.</p>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="bg-gray-900 text-gray-200 py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Are you passionate about AI and innovation? At KashNex, we value creativity, collaboration, and continuous learning.
              Explore our current openings and build a career that makes an impact.
            </p>
            <a
              href="mailto:careers@kashnex.com"
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              View Open Positions
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-20 max-w-4xl text-center text-gray-900">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you have a project idea, partnership inquiry, or just want to learn more, we’d love to hear from you.
          </p>
          <a
            href="mailto:info@kashnex.com"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-10 py-4 rounded-full transition"
          >
            info@kashnex.com
          </a>
        </section>

        {/* Footer with Social Icons */}
        <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/company/kashnex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.5-2.6 5.2-2.6 5.6 0 6.6 3.7 6.6 8.5V24h-5v-7.5c0-1.8 0-4-2.5-4s-2.9 2-2.9 4V24h-5V8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/kash.nex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1z" />
              </svg>
            </a>
          </div>
          <p>&copy; 2025 KashNex. All rights reserved.</p>
        </footer>

        {/* Floating Chat Widget */}
        <div
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: '350px',
            maxWidth: '90vw',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 9999,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#1f2937' // Tailwind's gray-800
          }}
        >
          <ChatWidget />
        </div>
      </body>
    </>
  );
}
