import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details , category_id} = news;

  return (
    <div className="space-y-5">
      <img className="w-full h-102 object-cover" src={image_url} alt="" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-accent">{details}</p>
      <Link to={`/category/${category_id}`} className="btn bg-secondary text-base-100">
        <FaArrowLeftLong />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
