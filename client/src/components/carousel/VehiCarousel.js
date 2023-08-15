import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function VehiCarousel({data}) {
  return (
    <Carousel autoPlay="" className="w-[600px] mt-3 ml-[350px]">
        {data.map ((item, index)=>(
            <div key={index} className="w-[400px] h-[250px] ml-[100px]" >
                <img src={item.image} alt={item.imageAlt}  />
            </div>
        ))}

        
    </Carousel>
  )
}

export default VehiCarousel