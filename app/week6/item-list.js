"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  let newItems = [...new Set(items.map((item) => item.newItems).sort())];
  let [sortBy, setSortBy] = useState("name");

  items = items.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });

  return (
    <main>
      
        <div>
          Sort By:
          <button
            onClick={() => setSortBy("name")}
            className="p-5 hover:bg-zinc-800 bg-zinc-600 rounded m-4"
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className="p-5 hover:bg-zinc-800 bg-zinc-600 rounded"
          >
            Category
          </button>
        </div>

        <section className="grid grid-cols-3 gap-5 p-5">
          <div>
            {items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </div>
        </section>
      
    </main>
  );
}