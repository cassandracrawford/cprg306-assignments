"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import { useState } from "react";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return(
        <main className="m-8 mx-auto max-w-4xl px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}