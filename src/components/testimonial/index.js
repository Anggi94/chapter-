import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import Boy from './assets/testboy.png';
import Girl from './assets/testgirl.png';
import Star from './assets/Rate.png';
import Left from './assets/Left.png';
import Right from './assets/Right.png';
const Testimonial = () => {
  var settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: '330px',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <img src={Right}/>,
    prevArrow: <img src={Left}/>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '150px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '70px',
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '25px',
          
        }
      }
    ]
  };
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="testi-head">
          <h3>Testimonial</h3>
          <h4>Berbagai review positif dari para pelanggan kami</h4>
        </div>
      </div>
      <Slider {...settings}>
        <div className="slick">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={Boy} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Star} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={Girl} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Star} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={Girl} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Star} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </section>
  );
};
export default Testimonial;