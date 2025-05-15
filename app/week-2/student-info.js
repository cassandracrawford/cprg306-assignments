import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
        <p>Cassandra Crawford</p>
        <p><Link href="https://github.com/cassandracrawford/cprg306-assignments" className="text-amber-900 hover:text-amber-700 hover:underline">https://github.com/cassandracrawford/cprg306-assignment/</Link></p>
    </div>
  );
}