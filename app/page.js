import Link from "next/link";

export default function Home() {
  let pageStyle = "hover:text-[#D87280] hover:underline";

  return (
    <main className="m-8 mx-auto max-w-4xl px-8">
      <h1 className="text-4xl text-white font-bold bg-[#DF1D2D] p-4 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="p-4 text-2xl font-bold">
          <li>
            <Link href="./week-2/" className={pageStyle}>Week 2 Assignment</Link>
          </li>
          <li>
            <Link href="./week-3/" className={pageStyle}>Week 3 Assignment</Link>
          </li>
          <li>
            <Link href="./week-4/" className={pageStyle}>Week 4 Assignment</Link>
          </li>
          <li>
            <Link href="./week-5/" className={pageStyle}>Week 5 Assignment</Link>
          </li>
          <li>
            <Link href="./week-6/" className={pageStyle}>Week 6 Assignment</Link>
          </li>
          <li>
            <Link href="./week-7/" className={pageStyle}>Week 7 Assignment</Link>
          </li>
      </ul>
    </main>
  );
}
