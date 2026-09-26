import React from "react";

const MyPlanPage = () => {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-5 sm:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light uppercase tracking-wide">
            My Plan
          </h1>
          <p className="text-gray-400 mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card */}
        <div className="rounded-3xl border border-white/10 bg-[#15171d] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { label: "Exercises", value: "0", active: true },
              { label: "Minutes", value: "0" },
              { label: "Calories", value: "0" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`p-6 ${
                  i !== 2 ? "md:border-r border-white/10" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {item.label}
                </p>
                <h2
                  className={`text-5xl font-bold mt-2 ${
                    item.active ? "text-lime-400" : "text-gray-100"
                  }`}
                >
                  {item.value}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
          <div className="flex bg-[#121522] border border-white/10 rounded-full p-1 w-fit">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#0b0d15] text-lime-400">
              Today&apos;s Plan
            </button>
            <button className="px-4 py-2 rounded-full text-sm text-gray-500">
              Saved
            </button>
          </div>

          <div className="w-full sm:w-64">
            <label className="text-sm text-gray-300 mb-1 block">Sort By</label>
            <select className="w-full bg-transparent border border-white/15 rounded-full px-4 py-2 text-sm text-white outline-none appearance-none">
              <option className="bg-[#111827]">Duration</option>
              <option className="bg-[#111827]">Calories</option>
              <option className="bg-[#111827]">Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#15171d] min-h-[280px] flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-xl font-semibold uppercase tracking-wide">
            Nothing Here Yet
          </h3>

          <p className="text-gray-400 mt-3 max-w-md">
            Browse the library and add a lift to get today moving.
          </p>

          <button className="mt-7 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-full transition">
            Go to workouts
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111420]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold uppercase tracking-wide">
            <span className="text-lime-400 text-lg">✣</span>
            <span>FitLog</span>
          </div>

          <p className="text-gray-500 text-sm text-center sm:text-right">
            © 2026 FitLog — Workout Library, Train hard, log honestly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MyPlanPage;