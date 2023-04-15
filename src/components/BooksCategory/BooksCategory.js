import React, { useState } from 'react';
const BooksCategory = ({ categories, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelect(category);
  };

  return (
    <div className="menu">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksCategory;
