import { useNavigate } from "react-router-dom";
import hero from "../../../constants/hero";

export default function HeroButtons() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
            onClick={() => navigate(hero.buttons.primary.to)}
            className="rounded-lg bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800"
        >
            {hero.buttons.primary.text}
        </button>

        <button
            onClick={() => navigate(hero.buttons.secondary.to)}
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
            {hero.buttons.secondary.text}
        </button>
    </div>
  );
}