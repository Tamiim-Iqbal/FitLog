'use client';

import React, { createContext, ReactNode, useState } from 'react';

export const ExerciseContext = createContext({});

const ExerciseProvider = ({children}: {children: ReactNode}) => {

    const [today, setToday] = useState([]);
    const [save, setSave] = useState([]);

    const sharedState = {
        today,
        setToday,
        save,
        setSave
    };

    return (
        <ExerciseContext.Provider value={sharedState}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;