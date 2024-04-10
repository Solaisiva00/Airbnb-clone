import image from "../assets/image.png";
const Hero = () => {
  return (
    <section>
      <img src={image} alt="" className="px-10 my-14 mx-auto w-395.91 h-232 lg:h-80vh lg:w-auto  lg:drop-shadow-md " />
      <div className="md:p-20 md:space-y-4 lg:h-40vh ">
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
