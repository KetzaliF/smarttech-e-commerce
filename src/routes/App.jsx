import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from '../containers/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route 
            exact
            path="/"
            element={<Home />}
          />
          <Route 
            exact
            path="/"
            element={<NotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export {App};
