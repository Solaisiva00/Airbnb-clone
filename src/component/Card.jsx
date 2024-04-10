import star from "../assets/star.svg";
import avator from "../assets/avater.svg";
const Card = () => {
  return (
    <div className="flex px-10 space-x-2 lg:space-x-1">
      <div className="my-10 md:my-4 md:px-20">
        <img src={avator} alt="" className="rounded-md" />
        <div className="text-xs p-3 space-y-2">
          <div className="flex">
            <img src={star} alt="" />
            <p>
              5.0 <span className="font-light text-gray-600">(6) . USA</span>
            </p>
          </div>
          <p className="font-poppins font-light">
            Life lessons with katie zaferes<br></br>
            <span className="font-semibold">From $ 136</span>/person
          </p>
        </div>
      </div>
      <div className="my-10 md:my-4">
        <img src={avator} alt="" className="rounded-md" />
        <div className="text-xs p-3 space-y-2">
          <div className="flex">
            <img src={star} alt="" />
            <p>
              5.0 <span className="font-light text-gray-600">(6) . USA</span>
            </p>
          </div>
          <p className="font-poppins font-light">
            Life lessons with katie zaferes<br></br>
            <span className="font-semibold">From $ 136</span>/person
          </p>
        </div>
      </div>
   
    </div>
  );
};

export default Card;