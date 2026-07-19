import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] flex items-center">
      <div className="mx-auto w-full max-w-4xl text-center">
        <HeroContent />
        <HeroButtons />

        <div className="mt-12">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}