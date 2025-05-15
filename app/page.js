import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8">
      <h1 className="text-4xl font-bold bg-yellow-400 p-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="p-4">
          <li>
            <Link href="./week-2" className="hover:text-amber-900">Week 2 Assignment</Link>
          </li>
      </ul>
    </main>
  );
}
