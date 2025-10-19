import { BsShare } from 'react-icons/bs';
import { FaStar, FaRegEye, FaShareAlt, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {id, title, author, thumbnail_url, rating, total_view, details } = news;

  return (
    <div className="bg-base-100 border-gray-100 rounded shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          {/* <FaBookmark className="cursor-pointer hover:text-primary" /> */}
          {/* <FaShareAlt className="cursor-pointer hover:text-primary" /> */}
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <BsShare className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-base font-bold px-4 pt-3 leading-snug">{title}</h2>

      {/* Image */}
      <div className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-sm text-accent line-clamp-3">{details}</p>
        <Link to={`/news-details/${id}`} className="text-secondary font-semibold hover:underline">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? 'text-yellow-500'
                  : 'text-gray-300'
              }
            />
          ))}
          <span className="ml-1 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
