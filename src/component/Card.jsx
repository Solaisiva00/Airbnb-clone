import star from "../images/star.svg";
const Card = (prop) => {
  return (
      <div className="my-8 md:mx-auto flex-2">
        <img src={`../images/${prop.img}`}alt=""  className="rounded-lg h-232 w-176" />
        <div className="text-xs p-3 space-y-2">
          <div className="flex">
            <img src={star} alt="" />
            <p>
              {prop.rating} <span className="font-light text-gray-600">({prop.reviewCount}) . {prop.location}</span>
            </p>
          </div>
          <p className="font-poppins font-light">
           {prop.title} <br/>
            <span className="font-semibold">From $ {prop.price}</span>/person
          </p>
        </div>
      </div>
  );
};

export default Card;