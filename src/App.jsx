export default function App() {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Git & GitHub",
    "Networking",
    "Linux",
    "Cybersecurity",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-yellow-300 selection:text-black">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] animate-pulse rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] animate-pulse rounded-full bg-red-500/10 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="animate-fade text-sm uppercase tracking-[0.4em] text-yellow-300">
            Philippines • IT Student • Future Cybersecurity Specialist
          </p>

          <h1 className="mt-6 bg-gradient-to-r from-yellow-200 via-white to-red-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
            Gabriel Atienza
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Building modern digital experiences while pursuing a future in
            cybersecurity, networking, and systems administration.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 px-8 py-4 font-medium text-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-black"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* Floating Cards */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-yellow-300/40">
              <h3 className="text-xl font-semibold text-yellow-200">
                Modern Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Learning React, Tailwind CSS, Git workflows, and modern frontend
                development.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-red-400/40">
              <h3 className="text-xl font-semibold text-red-300">
                Cybersecurity Path
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Exploring networking, Linux, security fundamentals, and ethical
                hacking.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-400/40">
              <h3 className="text-xl font-semibold text-blue-300">
                Future Goals
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Building a strong technical foundation for a future IT and
                cybersecurity career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Driven by curiosity and modern technology.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              I’m focused on developing practical IT skills while building a
              portfolio that reflects creativity, technical growth, and modern
              design. My interests include cybersecurity, networking, Linux,
              and frontend development.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-yellow-300/10 via-white/5 to-red-500/10 p-10 backdrop-blur">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">
                Featured Work
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Projects & Learning Journey
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-yellow-300/40 hover:bg-white/10">
              <div className="mb-6 inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm text-yellow-200">
                React + Tailwind
              </div>

              <h3 className="text-3xl font-bold">Personal Portfolio</h3>

              <p className="mt-6 leading-8 text-gray-400">
                A modern responsive portfolio built with Vite, React, and
                Tailwind CSS featuring smooth layouts and a clean aesthetic.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-red-400/40 hover:bg-white/10">
              <div className="mb-6 inline-flex rounded-full border border-red-300/30 bg-red-300/10 px-4 py-2 text-sm text-red-200">
                Cybersecurity
              </div>

              <h3 className="text-3xl font-bold">Future Homelab</h3>

              <p className="mt-6 leading-8 text-gray-400">
                Planned cybersecurity and networking homelab focused on Linux,
                networking, virtualization, and security practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-yellow-300/10 p-12 text-center backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Let’s Build Something Great.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Open to internships, collaborations, and opportunities to continue
            learning and growing in IT and cybersecurity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              GitHub
            </a>

            <a
              href="mailto:your@email.com"
              className="rounded-2xl bg-yellow-300 px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-yellow-200"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

