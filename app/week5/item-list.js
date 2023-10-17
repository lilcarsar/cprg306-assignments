"use client";

import { useState } from "react";
import Heading from "./heading";
import Item from "./item";
import ItemsData from "./items.json";

export default function ItemList() {
  let dataArray = ItemsData.map((item) => ({ ...item }));
  let [sortBy, setSortBy] = useState("name");

  dataArray = dataArray.sort((a, b) => {
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
        <Heading title="Shopping List" />
        <div>
            Sort By: 
            <button onClick={() => setSortBy('name')} className="p-5 hover:bg-zinc-800 bg-zinc-600 rounded m-4">
            Name
            </button>
            <button onClick={() => setSortBy('category')} className="p-5 hover:bg-zinc-800 bg-zinc-600 rounded">
            Category
            </button>
        </div>

        <section className="grid grid-cols-3 gap-5 p-5">
            <div>
                {dataArray.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </div>
        </section>
        </div>
    </main>
  );
}