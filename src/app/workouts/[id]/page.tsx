import Image from "next/image";
import { IWorkout } from "../../types/workout";
import TodayButton from "../../components/TodayButton";
import { Save } from "lucide-react";
import SaveButton from "../../components/SaveButton";

interface WorkoutDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const WorkoutDetailPage = async ({
    params,
}: WorkoutDetailPageProps) => {
    const { id } = await params;

    const response = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    const workout:IWorkout = await response.json();

    return (
        <div className="min-h-screen bg-[#0f1012] px-5 py-6 text-white">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[430px_1fr]">

                {/* Image */}
                <div className="relative h-[630px] overflow-hidden rounded-xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="430px"
                        className="object-cover"
                    />
                </div>

                {/* Details */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-semibold uppercase tracking-wide font-[family-name:var(--font-oswald)]">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#a7a7aa]">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-medium text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#2b2e34] bg-[#1b1d22]">

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Equipment
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Difficulty
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Sets
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Reps
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Duration
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] border-b border-[#292c31] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Calories
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.3fr] px-3 py-3">
                            <span className="text-[11px] uppercase">
                                Rating
                            </span>

                            <span className="text-sm text-[#d2d2d5]">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-7">
                        <h2 className="text-md font-bold uppercase tracking-wide">
                            Instructions
                        </h2>

                        <ol className="mt-3 space-y-3 text-sm leading-5 text-[#d0d0d3]">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li key={index}>
                                        {index + 1}. {instruction}
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">
                        <TodayButton workout={workout} />
                        <SaveButton workout={workout} />

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;