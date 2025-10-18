import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section className="my-3">
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='py-3 grid grid-cols-12 gap-5'>
        <aside className='col-span-3 sticky top-1 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3 sticky top-1 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
