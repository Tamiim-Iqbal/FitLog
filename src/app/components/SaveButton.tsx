"use client";

import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import { ExerciseContext } from "../context/ExerciseContext";
import { toast } from "react-toastify";

const SaveButton = ({ workout }) => {
  const { save, setSave } = useContext(ExerciseContext);

  const HandleSave = () => {
    const alreadySaved = save.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info(`Already in your saved list`);
      return;
    }

    console.log("Saved for later");

    setSave([...save, workout]);

    toast.success(`Saved for later`);
  };

  return (
    <button
      onClick={HandleSave}
      className="flex items-center gap-2 rounded-xl border border-[#d6d6d6] px-4 py-2.5 text-sm hover:cursor-pointer hover:border-[#0f1012]"
    >
      <Bookmark size={16} />
      Save for later
    </button>
  );
};

export default SaveButton;