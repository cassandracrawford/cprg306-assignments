import ItemList from "./item-list";

export const metadata = {
  title: "Shopping List",
  description: "Week 3 Assignment",
};

export default function Home() {
    return (
        <main className="m-8 mx-auto max-w-4xl px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}