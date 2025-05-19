import StudentInfo from "./student-info";

export const metadata = {
  title: "Week 2 Assignment",
  description: "Introduction to React and Next.js",
};

export default function Page() {
  return (
    <main className="m-8">
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}