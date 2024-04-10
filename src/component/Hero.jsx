import image from "./image.png";
const Hero = () => {
  return (
    <section>
      <img src={image} alt="" className="px-10 my-8 mx-auto h-232 lg:h-80vh lg:drop-shadow-md  " />
      <div className="md:p-20 md:space-y-4 ">
        <h1 className=" px-10 text-head font-semibold font-poppins md:text-5xl ">
          Online Experience
        </h1>
        <p className="px-10 my-2 text-sm font-light md:text-xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
