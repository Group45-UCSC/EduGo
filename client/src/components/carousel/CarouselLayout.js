import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function StandardCarousel({ data }) {
  return (
    <Carousel autoPlay="true" interval="1000">
      {data.map((item, index) => (
        <div key={index}
          className="ml-[17rem] w-[175px]">
          <img src={item.image} alt={item.imageAlt} className="w-[500px]" />
        </div>
      ))}
    </Carousel>
  );
}

export default StandardCarousel;