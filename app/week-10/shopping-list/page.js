"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [ items, setItems ] = useState([]);
    const [ selectedItemName, setSelectedItemName] = useState("");
    const {user} = useUserAuth();
    useEffect(() => {
        const loadItems = async() => {
            if (user?.uid) {
                const data = await getItems(user.uid);
                setItems(data);
            }
        }

        if (user) {
            loadItems();
        }
    }, [user]);
    
    const handleAddItem = async(newItem) => {
        if(!user?.uid)
            {
                console.log("No user available");
                return;
            }

        const id = await addItem(user.uid, newItem);
        if(id) {
            console.log("added item with ID", id);
            setItems((prevItems) => [
                ...prevItems, {id, ...newItem},
            ]);
        }
    }

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName.split(',')[0].replace(/[^a-zA-Z ]/g, '').trim());
    }

    return(
        <main className="m-8 mx-auto max-w-5xl px-8 text-center">
            {!user ? (
                <div>
                    <p className="text-xl font-semibold">You need to be signed in to view this page.</p>
                </div>
            ) : 
            (
                <div>
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
                </div>
            )}
        </main>
    );
}