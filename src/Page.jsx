import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./Data";
import Preloader from "./component/Preloader";
import { useEffect, useState } from "react";
const Layout = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
      setTimeout(() => {
        setLoad((prev) => !prev);
      },3000);
  }, []);
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      {load ? (
        <div>
          {" "}
          <Navbar />
          <Hero />
          <div className="flex flex-nowrap gap-5 overflow-x-auto snap-x px-10 md:px-20">
            {cards}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Layout;
