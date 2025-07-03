"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);
    const [ selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName.split(',')[0].replace(/[^a-zA-Z ]/g, '').trim());
    }

    return(
        <main className="m-8 mx-auto max-w-5xl px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Shopping List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col items-start bg-[#D87280] p-8 text-white w-full max-w-md">
                    <h2 className="text-3xl font-bold">Meal Ideas</h2>
                    {!selectedItemName ? (
                        <p className="text-white">Select an item to see meal ideas.</p>
                        ) : (
                        <MealIdeas ingredient={selectedItemName} />
                        )}
                </div>
                <div className="flex flex-col items-start w-full max-w-md">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
            </div>
        </main>
    );
}