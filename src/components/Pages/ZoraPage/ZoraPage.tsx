"use client";

import ZoraCard from "./ZoraCard";

export default function ZoraPage() {
  return (
    <section className="flex flex-col gap-4 max-w-screen-md">
      <h2 className="cursor-pointer text-2xl font-bold">Publish on Sound</h2>
      <ZoraCard />
    </section>
  );
}
