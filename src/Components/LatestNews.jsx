import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 p-3 bg-base-200">
      <h2 className="btn bg-secondary text-base-100">Latest</h2>
      <Marquee className='flex gap-5 font-semibold' pauseOnHover={true} speed={60}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
