import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

  const data = useLoaderData()
  const { id } = useParams()

  const [news, setNews] = useState({})

  useEffect(() => {
    const newsDetails = data.find(singleData => singleData.id == id)
    setNews(newsDetails)
  }, [data, id])
  

  return (
    <div className='w-11/12 mx-auto'>
      <header>
        <Header></Header>
      </header>
      <main className='grid gap-5 grid-cols-12 py-5'>
        <section className='col-span-9'>
          <h1 className="font-semibold text-lg mb-3">News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;