import React from 'react';
import CategoryButton from "../components/CategoryButton";

export default function CategoryButtonList(props) {

  const categories = props.categories.map(
    category => {
      return (
        <div className="categoryButton">
          <CategoryButton onClick={()=>console.log(`${category.question} - clicked`)}>{category.question}</CategoryButton>
        </div>
      )}
  )
  return categories
};