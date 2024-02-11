import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";
import ExportableImage from "./ExportableImage";

import quoteIcon from "../assets/images/quote.svg";
import userImg from "../assets/images/user.png";

const Testimonial: React.FC = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="mt-5">
            <Card className="p-3 position-relative">
              <div className="pb-3">
                <div className="position-absolute top-0 start-0 translate-middle">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={quoteIcon}
                    alt="user"
                    className="img-fluid "
                  />
                </div>
                <div className="text-end">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
              <h6>
                RoseTech Solutions Ltd aspires to provide comprehensive software
                solutions to businesses of all sizes. From enterprises to
                startups, SMEs, agencies, corporations, and institutions, we aim
                to be the technical wing for these organisations.
              </h6>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={userImg}
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <h5>Robert fox</h5>
                  <h6 className="small">CEO. comapny name</h6>
                </div>
              </div>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-5">
            <Card className="p-3 position-relative">
              <div className="pb-3">
                <div className="position-absolute top-0 start-0 translate-middle">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={quoteIcon}
                    alt="user"
                    className="img-fluid "
                  />
                </div>
                <div className="text-end">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
              <h6>
                RoseTech Solutions Ltd aspires to provide comprehensive software
                solutions to businesses of all sizes. From enterprises to
                startups, SMEs, agencies, corporations, and institutions, we aim
                to be the technical wing for these organisations.
              </h6>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={userImg}
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <h5>Robert fox</h5>
                  <h6 className="small">CEO. comapny name</h6>
                </div>
              </div>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-5">
            <Card className="p-3 position-relative">
              <div className="pb-3">
                <div className="position-absolute top-0 start-0 translate-middle">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={quoteIcon}
                    alt="user"
                    className="img-fluid "
                  />
                </div>
                <div className="text-end">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
              <h6>
                RoseTech Solutions Ltd aspires to provide comprehensive software
                solutions to businesses of all sizes. From enterprises to
                startups, SMEs, agencies, corporations, and institutions, we aim
                to be the technical wing for these organisations.
              </h6>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={userImg}
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <h5>Robert fox</h5>
                  <h6 className="small">CEO. comapny name</h6>
                </div>
              </div>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-5">
            <Card className="p-3 position-relative">
              <div className="pb-3">
                <div className="position-absolute top-0 start-0 translate-middle">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={quoteIcon}
                    alt="user"
                    className="img-fluid "
                  />
                </div>
                <div className="text-end">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
              <h6>
                RoseTech Solutions Ltd aspires to provide comprehensive software
                solutions to businesses of all sizes. From enterprises to
                startups, SMEs, agencies, corporations, and institutions, we aim
                to be the technical wing for these organisations.
              </h6>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={userImg}
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <h5>Robert fox</h5>
                  <h6 className="small">CEO. comapny name</h6>
                </div>
              </div>
            </Card>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <i className="fa fa-arrow-alt-circle-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="fa fa-arrow-alt-circle-right"></i>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Testimonial;
