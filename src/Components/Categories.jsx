import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="font-semibold text-lg">All Category</h1>
      <div className="grid grid-cols-1 mt-5 gap-1">
        {categories.map(category => (
          <NavLink
            key={category.id}
            className={' bg-white border-0 hover:bg-base-200 hover:font-semibold text-accent p-3 pl-10'}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
