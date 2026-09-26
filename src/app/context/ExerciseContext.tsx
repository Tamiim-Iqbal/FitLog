'use client';

import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { IWorkout } from '../types/workout';

interface ExerciseContextType {
  today: IWorkout[];
  setToday: Dispatch<SetStateAction<IWorkout[]>>;
  save: IWorkout[];
  setSave: Dispatch<SetStateAction<IWorkout[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>(
  {} as ExerciseContextType
);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [today, setToday] = useState<IWorkout[]>([]);
  const [save, setSave] = useState<IWorkout[]>([]);

  return (
    <ExerciseContext.Provider
      value={{
        today,
        setToday,
        save,
        setSave,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;