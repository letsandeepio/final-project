import React from 'react';
import CategoryButton from "../components/CategoryButton";

export default function CategoryButtonList(props) {

  const categories = props.categories.map(
    category => {
      return (
        <div className="categoryButton" >
          <CategoryButton fullWidth="true" onClick={()=>props.onSelect(category.question)}>{category.question}</CategoryButton>
        </div>
      )}
  )
  return categories
};