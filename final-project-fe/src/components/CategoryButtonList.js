import React from 'react';
import CategoryButton from "../components/CategoryButton";

export default function CategoryButtonList(props) {

  const categories = props.categories.map(
    (category, index) => {
      return (
        <div className="categoryButton" key={index}>
          <CategoryButton
          fullWidth
          onClick={() =>
            props.onSelect(category.question)}>
              {category.question}
          </CategoryButton>
        </div>
      )}
  )
  return categories
};