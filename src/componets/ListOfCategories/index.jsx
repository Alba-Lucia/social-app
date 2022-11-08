import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import { categories as mockCtegories } from "../../../api/db.json";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCtegories)

  const getCategories = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    getCategories(data.results);
  };

  useEffect(() => {
    getCategories();
  }, []);

 

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category}/>
        </Item>
      ))}
    </List>
  );
};
