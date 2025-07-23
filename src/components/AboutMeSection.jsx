import React from "react";

export default function AboutMeSection() {
  return (
    <section className="mt-8 px-2 sm:px-4">
      <h2
        className="text-lg sm:text-xl font-light text-neutral-300 tracking-widest text-left mb-4"
        style={{ fontFamily: "InterVariable, sans-serif" }}
      >
        About Me
      </h2>
      <p className="text-white text-base sm:text-lg max-w-2xl leading-relaxed">
        I enjoy building things that work and feel good to use. My go-to stack
        is React and Tailwind for the frontend, and either Laravel or Node for
        the backend. I pay close attention to details, speed, and keeping
        everything clean. I'm open to any project, whether it's tech, games, or
        anything.
      </p>
    </section>
  );
}
