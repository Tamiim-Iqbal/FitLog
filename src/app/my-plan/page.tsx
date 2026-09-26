"use client";

import React, { useContext, useState } from "react";
import ListWorkout from "./List";
import { ExerciseContext } from "../context/ExerciseContext";
import { IWorkout } from "../types/workout";
import Link from "next/link";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const { save, today } = useContext(ExerciseContext);

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  // Sort workouts
  const sortedWorkouts = (workouts: IWorkout[]) => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort(
        (a, b) => Number(a.duration) - Number(b.duration)
      );
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) =>
          Number(a.caloriesBurned) - Number(b.caloriesBurned)
      );
    }

    if (sortBy === "rating") {
      sorted.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    return sorted;
  };

  // Sorted Today & Saved workouts
  const sortedToday = sortedWorkouts(today);
  const sortedSave = sortedWorkouts(save);

  const activeWorkouts =
    activeTab === "today" ? sortedToday : sortedSave;
  // Total minutes
  let totalMinutes = 0;

  for (const workout of activeWorkouts) {
    totalMinutes += Number(workout.duration || 0);
  }

  // Total calories
  let totalCalories = 0;

  for (const workout of activeWorkouts) {
    totalCalories += Number(workout.caloriesBurned || 0);
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="flex-1 max-w-6xl mx-auto w-full px-5 sm:px-8 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold uppercase tracking-wide font-[family-name:var(--font-oswald)] ">
            My Plan
          </h1>

          <p className="text-gray-400 mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card */}
        <div className="rounded-3xl border border-white/10 bg-[#15171d] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Exercises */}
            <div className="p-6 md:border-r border-white/10">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Exercises
              </p>

              <h2 className="text-5xl font-bold mt-2 text-lime-400 font-[family-name:var(--font-oswald)]">
                {activeWorkouts.length}
              </h2>
            </div>

            {/* Minutes */}
            <div className="p-6 md:border-r border-white/10">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Minutes
              </p>

              <h2 className="text-5xl font-bold mt-2 text-gray-100 font-[family-name:var(--font-oswald)]">
                {totalMinutes}
              </h2>
            </div>

            {/* Calories */}
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Calories
              </p>

              <h2 className="text-5xl font-bold mt-2 text-gray-100 font-[family-name:var(--font-oswald)]">
                {totalCalories}
              </h2>
            </div>

          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">

          {/* Tabs */}
          <div className="flex bg-[#15171d] border border-white/10 rounded-xl p-1 w-fit">

            {/* Today */}
            <button
              onClick={() => setActiveTab("today")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "today"
                ? "bg-[#0c0d10] text-lime-400"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Today&apos;s Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "saved"
                ? "bg-[#0c0d10] text-lime-400"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="w-full sm:w-64 flex flex-row gap-4 items-center">
            <label className="text-sm text-gray-300 mb-1 block">
              Sort By
            </label>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                  | "duration"
                  | "calories"
                  | "rating"
                )
              }
              className="select w-5/12  rounded-xl px-4 py-2 text-sm text-white outline-none appearance-none bg-[#15171d]"
            >
              <option
                value="duration"
                className="bg-[#111827]"
              >
                Duration
              </option>

              <option
                value="calories"
                className="bg-[#111827]"
              >
                Calories
              </option>

              <option
                value="rating"
                className="bg-[#111827]"
              >
                Rating
              </option>
            </select>
          </div>

        </div>

        {/* Workout List / Empty State */}
        {activeWorkouts.length > 0 ? (
          <div className="mt-8 space-y-4">

            {activeWorkouts.map((workout) => (
              <ListWorkout
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
              />
            ))}

          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-white/15 border-amber-50 bg-[#15171d] min-h-[250px] flex flex-col items-center justify-center text-center px-6">

            <h3 className="text-xl font-semibold uppercase tracking-wide font-[family-name:var(--font-oswald)]">
              Nothing Here Yet
            </h3>

            <p className="text-gray-400 mt-3 max-w-md">
              Browse the library and add a lift to get today moving.
            </p>

            <Link href="/" className="inline-block">
              <button
                type="button"
                className="mt-7 px-6 py-3 rounded-3xl bg-lime-400 text-black font-semibold cursor-pointer transition hover:bg-lime-500"
              >
                Go to workouts
              </button>
            </Link>

          </div>
        )}

      </main>
    </div>
  );
};

export default MyPlanPage;