import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { PromoAbout } from "../components/PromoAbout";
import { Categories } from "../containers/Categories";
import { OurTeam } from "../containers/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <PromoAbout />
      <Categories />
      <OurTeam />
      <Footer />
    </div>
  );
};

export { AboutUs };
