"use client";

import { CalendarPlus } from "lucide-react";
import { ExerciseContext } from "../context/ExerciseContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodayButton = ({ workout }) => {
  const { today, setToday } = useContext(ExerciseContext);

  const HandleToday = () => {
    const alreadyAdded = today.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info(`Already in your plan!`);
      return;
    }

    //console.log("Added to today's plan");

    setToday([...today, workout]);

    toast.success(`Added to today's plan`);
  };

  return (
    <button
      onClick={HandleToday}
      className="flex items-center gap-2 rounded-xl bg-[#c6ff00] px-4 py-2.5 text-sm font-medium text-black hover:cursor-pointer hover:bg-[#A8D400]"
    >
      <CalendarPlus size={16} />
      {"Add to today's plan"}
    </button>
  );
};

export default TodayButton;