import React from "react";
import Header from "./components/Header";
import HeroBlock from "./sections/HeroBlock";
import Delivery from "./sections/Delivery";
import Footer from "./components/Footer";
import InfoSection from "./sections/Info";
import Promotion from "./sections/Promotion";
import Catalog from "./sections/Catalog";
import InstagramBlock from "./sections/Instagram";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroBlock />
      <Promotion />
      <Catalog />
      <Delivery />
      <InfoSection />
      <InstagramBlock />
      <Footer />
    </div>
  );
}

export default App;
