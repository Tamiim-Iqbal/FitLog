import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import { IWorkout } from '../types/workout';

const getWorkouts = async () => {

    try{
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store',});
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching workouts:', error);
        return [];
    }
};


const WorkoutPage = async() => {

    const workouts = await getWorkouts();

    console.log(workouts);

    return (
        <section className="py-8">
            <div className="mx-auto w-10/12 ">
                <h2 className="text-2xl font-bold text-white">THE LIBRARY</h2>
                <p className=" text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="mx-auto mt-8 grid w-10/12 grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                {
                    workouts.map( (workout: IWorkout) => 
                        <WorkoutCard key={workout.id} workout={workout} />
                    )
                }

            </div>
        </section>
    );
};

export default WorkoutPage;