import Image from 'next/image';
import Logo from "../../../public/fitlog-resources/assets/logo.png";

const Footer = ({
  brand = "FITLOG",
  tagline = "Workout Library. Train hard, log honest.",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-[#15171d]">
      <div className="container mx-auto flex w-11/12 flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt={`${brand} Logo`}
            className="h-6 w-auto"
            width={32}
            height={32}
          />
          <span className="text-base font-bold tracking-wide text-white">
            {brand}
          </span>
        </div>

        <p className="text-sm text-neutral-400">
          © {year} {brand.charAt(0) + brand.slice(1).toLowerCase()} — {tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;