import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API ='http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return initialState.lenght === 0 ? <h1>Loading...</h1> : (

    <div className='App'>
      <Header />
      <Search />
      {
        initialState.mylist.lenght > 0 && (
          <Categories title='My List'>
            <Carousel>
              <CarouselItem />

            </Carousel>

          </Categories>
        )
      }

      <Categories title='Tendency'>
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
            />
          ))}

        </Carousel>

      </Categories>

      <Categories title='Originals'>
        <Carousel>
          <CarouselItem />

        </Carousel>

      </Categories>
      <Footer />
    </div>
  );
};
export default App;
