import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../assets/images/catalog-5-00.jpg";
import image2 from "../../assets/images/1000_F_321034269_Ceha0k0brx3SrRmmLbUtikd0OnTWtGCv.jpg";
import image3 from "../../assets/images/TV-Media-Wall-11-1-850x520.jpeg";
import "./Slider.css";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide className="slide-item">
          <img src={image2} alt="" />

          <div className="text text-style2 rounded text-center">
            <h1>مرحبا بك في بيت الخشب</h1>
            <p>
              اكتشف مجموعه مختاره من الاثاث العصري
              <br /> والتصميم الفاخر لمنزل يعكس ذوقك
            </p>
            <Link to={"/AllProducts"} className="btn-style d-block ms-auto">
              تسوق الان
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={image1} alt="" />

          <div className="text text-style2 rounded text-center">
            <h1>مرحبا بك في بيت الخشب</h1>
            <p>
              اكتشف مجموعه مختاره من الاثاث العصري
              <br /> والتصميم الفاخر لمنزل يعكس ذوقك
            </p>
            <Link to={"/AllProducts"} className="btn-style d-block ms-auto">
              تسوق الان
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={image3} alt="" />

          <div className="text text-style2 rounded text-center">
            <h1>مرحبا بك في بيت الخشب</h1>
            <p>
              اكتشف مجموعه مختاره من الاثاث العصري
              <br /> والتصميم الفاخر لمنزل يعكس ذوقك
            </p>
            <Link to={"/AllProducts"} className="btn-style d-block ms-auto ">
              تسوق الان
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
