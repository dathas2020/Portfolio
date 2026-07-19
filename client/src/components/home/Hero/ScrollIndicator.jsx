export default function ScrollIndicator() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToAbout}
      aria-label="Scroll to About"
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2

        flex
        items-center
        justify-center

        h-10
        w-10
        rounded-full

        transition-all
        duration-300

        hover:bg-neutral-100
      "
    >
      <span className="text-2xl text-neutral-500">
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            >
            <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
      </span>
    </button>
  );
}