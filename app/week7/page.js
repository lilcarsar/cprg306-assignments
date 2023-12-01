"use client";

import { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js'; 
import ItemsData from "./items.json";
import Heading from "./heading";

export default function Page() {
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);


  function handleItemSelect(selectedItem) {

    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();

   
    setSelectedItemName(cleanedItemName);
  }


  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>

      <div style={{ display: 'flex' }}>
        <div>
          <Heading title="Shopping List" />

          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

