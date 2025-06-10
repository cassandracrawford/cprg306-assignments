"use client" ;

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
    let sortedItems = items.map(
        (contact) => ({...contact})
    );
    let buttonStyle="flex-1 bg-[#D87280] px-4 py-2 h-14 text-sm font-bold text-white cursor-pointer hover:bg-[#A80507] rounded-2xl";
    const [sortBy, setSortBy] = useState("name");

    if (sortBy === "groupedCategory") {
        sortedItems = sortedItems.reduce((groupCategory, item) => {
            const category = item.category
            if (groupCategory[category] == null) {
                groupCategory[category] = []
            }
            groupCategory[category].push(item)
            return groupCategory;
        }, {});
    } else {
        sortedItems = sortedItems.sort((a,b) => {
            let nameA = a[sortBy].toUpperCase();
            let nameB = a[sortBy].toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }

    return (  
        <div className="flex flex-col items-center">
            <div className="flex flex-col mb-4 w-md">
                <div>
                    <p className="font-bold bg-[#D87280] text-white p-2">SORT BY</p>
                </div>
                <div className="flex gap-4 bg-white p-4">
                    <button onClick={() => setSortBy("name")} className={buttonStyle}>Name</button>
                    <button onClick={() => setSortBy("category")} className={buttonStyle}>Category</button>
                    <button onClick={() => setSortBy("groupedCategory")} className={buttonStyle}>Grouped Category</button>
                </div>
            </div>
            <div>
                {sortBy === "groupedCategory" ? 
                    (
                        Object.entries(sortedItems)
                        .sort(([a], [b]) => {
                            if (a < b) return -1;
                            if (a > b) return 1;
                            return 0;
                        })
                        .map(([category,items]) => (
                            <div key={category}>
                                <h2 className="font-bold text-xl text-left uppercase">{category}:</h2>
                                {items.map((item) => (
                                    <Item key={item.id} itemObj={item} />
                                ))}
                            </div>
                        ))
                    ): 
                    (
                        sortedItems.map((item) => (
                            <Item key={item.id} itemObj={item} />
                        ))
                    )
                }
                
            </div>    
        </div>
  );
}
