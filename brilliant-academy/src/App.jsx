
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#10051d] flex items-center justify-center p-4">

      <section className="relative w-full max-w-7xl overflow-hidden rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-[#1c0735] via-[#50116b] to-[#180629] px-6 py-12 text-white shadow-2xl md:px-12 md:py-16">

        {/* Background Effects */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        {/* Diwali Lights */}
        <div className="absolute top-3 left-0 w-full text-center text-xl tracking-[10px] text-yellow-300">
          ✨ 🪔 ✨ 🪔 ✨
        </div>

        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <span className="inline-block rounded-full border border-yellow-400/50 bg-yellow-400/10 px-5 py-2 text-sm font-bold tracking-widest text-yellow-300">
              ✨ DIWALI SPECIAL ✨
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              BRILLIANT
              <span className="block text-yellow-400">
                COMPUTER ACADEMY
              </span>
            </h1>

            <div className="mx-auto my-6 h-1 w-32 rounded-full bg-yellow-400 md:mx-0" />

            <h2 className="text-4xl font-extrabold text-yellow-300">
              HAPPY DIWALI!
            </h2>

            <h3 className="mt-4 text-2xl font-bold">
              शुभ दीपावली 🪔
            </h3>

            <p className="mt-5 leading-7 text-purple-100">
              इस दिवाली अपने सपनों को दें नई उड़ान।
              कंप्यूटर शिक्षा के साथ बनाएं अपना सुनहरा भविष्य।
            </p>

            {/* Courses */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              {[
                "💻 Basic Computer",
                "🌐 Web Designing",
                "📊 MS Office",
                "📈 Tally"
              ].map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-yellow-400/30 bg-white/10 px-3 py-2 text-sm text-yellow-100"
                >
                  {course}
                </span>
              ))}
            </div>

            {/* Admission */}
            <div className="mt-8">
              <span className="inline-block rounded-xl bg-gradient-to-r from-yellow-300 to-orange-400 px-8 py-4 text-lg font-black text-purple-950 shadow-lg">
                ADMISSION OPEN
              </span>
            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center">

            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-yellow-400/70 bg-yellow-400/10 shadow-[0_0_70px_rgba(250,204,21,0.3)] sm:h-80 sm:w-80">

              <div className="text-center">
                <div className="text-8xl">🪔</div>

                <h2 className="mt-4 text-3xl font-black text-yellow-300">
                  शुभ दीपावली
                </h2>

                <p className="mt-3 text-sm">
                  Learn Today, Shine Tomorrow
                </p>
              </div>

              <span className="absolute -right-2 top-5 text-4xl">✨</span>
              <span className="absolute -left-4 bottom-10 text-4xl">🎆</span>
              <span className="absolute -bottom-5 right-8 text-3xl">⭐</span>

            </div>

            <p className="mt-8 text-center font-semibold text-yellow-200">
              ज्ञान का दीप जलाएं,
              <br />
              सफलता का प्रकाश फैलाएं!
            </p>

          </div>

        </div>

        {/* Footer */}
        <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-4 border-t border-yellow-400/30 pt-6 text-center md:flex-row">

          <p className="text-sm text-purple-100">
            📍 Pankha Road, Ujhani
          </p>

          <a
            href="tel:7011974744"
            className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-purple-950 transition hover:bg-yellow-300"
          >
            📞 7011974744
          </a>

        </div>

      </section>

    </div>
  );
}

export default App;
