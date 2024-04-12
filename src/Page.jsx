import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./Data";
const Layout = () => {
  const cards = Data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        key={1}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-nowrap gap-5 overflow-x-auto snap-x px-10 md:px-20">{cards}</div>
    </>
  );
};

export default Layout;
