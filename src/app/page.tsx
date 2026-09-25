import Image from "next/image";
import Banner from "./components/Banner";
import WorkoutPage from "./workouts/page";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WorkoutPage></WorkoutPage>
    </div>
  );
}
