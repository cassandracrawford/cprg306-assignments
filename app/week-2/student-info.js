import Link from 'next/link';

export default function StudentInfo() {
  return (
    <main>
        <ul>
            <li>Cassandra Crawford</li>
            <li>
                <Link href="https://github.com/cassandracrawford">https://github.com</Link>
            </li>
        </ul>
    </main>
  );
}