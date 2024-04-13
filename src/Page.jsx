import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./Data";
const Layout = () => {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item}/>;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-nowrap gap-5 overflow-x-auto snap-x px-10 md:px-20">
        {cards}
      </div>
    </>
  );
};

export default Layout;
