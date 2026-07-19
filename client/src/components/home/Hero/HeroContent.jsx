import React from 'react'

const HeroContent = () => {
  return (
    <>
      <p className="text-lg font-medium text-gray-500">
        Hello, I'm
      </p>

      <h1 className="mt-2 text-6xl md:text-7xl md:text-8xl font-bold tracking-tight">
        N Datha Sai
      </h1>

      <h2 className="mt-4 text-lg md:text-lg md:text-xl font-semibold text-gray-700">
        Computer Science Undergraduate
        <span className="mx-3 text-gray-400">•</span>
        AI Research Assistant
        <span className="mx-3 text-gray-400">•</span>
        Full-Stack Developer
      </h2>

      <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
        Building AI-powered applications, conducting academic research, 
        and developing scalable web experiences with a passion for Artificial Intelligence.
      </p>
    </>
  );
}

export default HeroContent
