import star from "../images/star.svg";
const Card = (prop) => {
  console.log(prop);
  let text;
  if (prop.openSpots === 0) {
    text = "SOLD OUT";
  } else if (prop.location === "Online") {
    text = "ONLINE";
  }
  return (
    <div className="my-8 md:mx-auto flex-2 relative ">
      <img
        src={prop.coverImg}
        alt=""
        className=" rounded-lg h-232 w-176"
        loading="lazy"
      />
      {text && (
        <div className="bg-slate-200 w-16  absolute z-20 rounded-sm px-2 py-1 text-ts font-bold font-poppins top-3 left-2">
          {text}
        </div>
      )}
      <div className="text-xs p-3 space-y-2">
        <div className="flex">
          <img src={star} alt="" />
          <p>
            {prop.stats.rating} {""}
            <span className="font-light text-gray-600">
              ({prop.stats.reviewCount}) . {prop.location}
            </span>
          </p>
        </div>
        <p className="font-poppins font-light">
          {prop.title} <br />
          <span className="font-semibold">From $ {prop.price}</span>/person
        </p>
      </div>
    </div>
  );
};

export default Card;
