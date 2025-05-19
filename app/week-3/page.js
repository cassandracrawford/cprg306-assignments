import ItemList from "./item-list";

export const metadata = {
  title: "Shopping List",
  description: "Week 3 Assignment",
};

export default function Home() {
    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}