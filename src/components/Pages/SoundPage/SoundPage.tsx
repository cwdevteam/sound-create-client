"use client";

import SoundCard from "./SoundCard";

const SoundPage = () => (
  <section className="flex flex-col gap-4 max-w-screen-md">
    <h2 className="cursor-pointer text-2xl font-bold">Publish on Sound</h2>
    <SoundCard />
  </section>
);

export default SoundPage;
