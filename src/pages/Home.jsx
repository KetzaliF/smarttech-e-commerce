import React from 'react';
import { SectionInfo } from '../containers/SectionInfo';

import { Layout } from '../containers/Layout';
import { Categories } from '../containers/Categories';
import { PopularContainer } from '../containers/PopularContainer';
import {Deals} from '../components/Deals';

const Home = () => {
  return (
    <Layout> 
      <SectionInfo />
      <Categories/>
      <PopularContainer />  
      <Deals />
    </Layout >
  );
}

export {Home};