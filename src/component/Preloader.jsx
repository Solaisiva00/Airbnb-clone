const Preloader = () => {
  return (
    <div className="flex justify-center relative items-center bg-slate-[#dba891] h-screen">
      <div className="shadow-lg bg-white rounded-[50%] p-6 animate-bounce">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/airbnb.png"
          alt="airbnb"
          className="animate-bounce"
        />
      </div>
      <p className="absolute bottom-10 text-center spacing text-slate-700 text-lg tracking-widest ">Powered by &copy;<span className="text-black font-bold font-poppins" > RavaN</span></p>
    </div>
  );
};

export default Preloader;
