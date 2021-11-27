import React from 'react';
import { SectionInfo } from '../containers/SectionInfo';

import { Layout } from '../containers/Layout';
import { Categories } from '../containers/Categories';
import { PopularContainer } from '../containers/PopularContainer';
import {Deals} from '../components/Deals';
import { MostSold } from '../containers/MostSold';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (

    <Layout> 
      <Header />
      <SectionInfo />
      <Categories/>
      <PopularContainer />  
      <Deals />
      <MostSold />
      <Footer />
    </Layout >
  );
}

export {Home};