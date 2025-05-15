import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8">
      <h1 className="text-4xl text-white font-bold bg-yellow-400 p-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="p-4">
          <li>
            <Link href="./week-2" className="text-amber-900 hover:text-amber-700 hover:underline">Week 2 Assignment</Link>
          </li>
      </ul>
    </main>
  );
}
