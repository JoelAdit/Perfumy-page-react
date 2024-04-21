import one from "../assets/perfume-1.jpg";
import two from "../assets/perfume-2.jpg";
import three from "../assets/perfume-3.jpg";

function Product() {
  return (
    <div className="product">
      <div className="box ">
        <img src={one} alt="one"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed,
          facere voluptatem nesciunt nihil harum.
        </p>
      </div>

      <div className="box">
        <img src={two} alt="two"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed,
          facere voluptatem nesciunt nihil harum.
        </p>
      </div>

      <div className="box">
        <img src={three} alt="three"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed,
          facere voluptatem nesciunt nihil harum.
        </p>
      </div>
    </div>
  );
}

export default Product;
