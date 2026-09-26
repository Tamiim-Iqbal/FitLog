"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, X } from "lucide-react";
import { useContext } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { IWorkout } from "../types/workout";

interface ListWorkoutProps {
  workout: IWorkout;
  activeTab: "today" | "saved";
}

const ListWorkout = ({
  workout,
  activeTab,
}: ListWorkoutProps) => {
  const { today, setToday, save, setSave } =
    useContext(ExerciseContext);

  // Remove workout
  const handleRemove = () => {
    if (activeTab === "today") {
      setToday(
        today.filter((item) => item.id !== workout.id)
      );
    } else {
      setSave(
        save.filter((item) => item.id !== workout.id)
      );
    }
  };

  // Mark as done
  const handleMarkAsDone = () => {
    console.log(`${workout.name} marked as done`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#2d3038] bg-[#191b20] p-4 text-white transition hover:border-[#3b3e47] md:flex-row">

      {/* Image */}
      <div className="relative h-22 w-full shrink-0 overflow-hidden rounded-xl md:w-52">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, 208px"
          className="object-cover"
        />
      </div>

      {/* Workout Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">

        {/* Name + Equipment */}
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wide text-[#eeeeee]">
            {workout.name}
          </h3>

          <p className="mt-1 text-sm text-[#9699a2]">
            {workout.equipment}
          </p>
        </div>

        {/* Workout Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#d5d5d8]">

          {/* Duration */}
          <span className="flex items-center gap-1">
            <Clock3 className="h-4 w-4 text-[#c6ff00]" />
            {workout.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-[#c6ff00]" />
            {workout.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 text-[#c6ff00]" />
            {workout.rating}
          </span>

        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex shrink-0 items-center justify-end gap-3 md:ml-auto md:pr-2">

        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-white/15 px-4 py-1 text-sm font-medium text-white transition hover:border-[#c6ff00] hover:text-[#c6ff00]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {activeTab === "today" && (
          <button
            onClick={handleMarkAsDone}
            className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-medium text-black transition hover:bg-[#A8D400]"
          >
            Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="flex h-9 w-9 items-center justify-center text-gray-400 transition hover:text-red-400"
          aria-label={`Remove ${workout.name}`}
        >
          <X className="h-5 w-5" />
        </button>

      </div>
    </div>
  );
};

export default ListWorkout;