import image from "../images/image.svg";
const Hero = () => {
  return (
    <section className="px-10 md:my-20">
      <img
        src={image}
        alt=""
        className="mx-auto h-50vh md:h-80vh md:w-auto  lg:drop-shadow-md  "
      />
      <div className="md:px-20 md:py-20 md:space-y-4 md:h-20vh ">
        <h1 className="text-head font-semibold font-poppins md:text-5xl ">
          Online Experience
        </h1>
        <p className="mt-2 md:mt-5 text-sm font-light md:text-2xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
