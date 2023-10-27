"use client";

import { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import ItemsData from "./items.json";
import Heading from "./heading";

export default function Page() {
    const [items, setItems] = useState(ItemsData);

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }

    return (
        <main>
            <div>
                <Heading title ="Shopping List"/>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}