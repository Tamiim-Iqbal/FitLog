import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "../types/workout";
import { Clock3, Flame, Star } from "lucide-react";

interface WorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="block overflow-hidden rounded-2xl border border-[#2d3038] bg-[#191b20] text-white transition hover:-translate-y-1 hover:border-[#c6ff00]"
        >
            {/* Image */}
            <div className="relative h-[195px] w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="px-5 pb-[18px] pt-4">

                {/* Muscle Groups */}
                <div className="mb-3.5 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-[#c6ff00] px-2.5 py-[3px] text-xs font-medium text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#eeeeee] font-[family-name:var(--font-oswald)]">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2.5 mb-3.5 text-sm text-[#9699a2]">
                    {workout.equipment}
                </p>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#d5d5d8]">

                    <span className="flex items-center gap-1">
                        <Clock3 className="h-4 w-4 text-[#c6ff00]" />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-[#c6ff00]" />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-[#c6ff00]" />
                        {workout.rating}
                    </span>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;