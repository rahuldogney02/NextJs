'use client'

import Link from "next/link";

export default function Home() {

  console.log("Rendering Home Page");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <nav>
          <Link href='/about'> About </Link>
        </nav>
        <h1>
          Main Section
        </h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h2>Footer Section</h2>
      </footer>
    </div>
  );
}
