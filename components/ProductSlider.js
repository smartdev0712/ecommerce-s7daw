import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      settings1: {
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        focusOnSelect: true,
        autoplay: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              vertical: false,
            },
          },
        ],
      },
      settings2: {
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="col-lg-2 col-md-3">
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            {...this.state.settings1}
            className="products-thumb-gallery-slider"
          >
            <div className="single-thumb-item">
              <img
                src="/assets/images/products/products-thumbs-1.jpg"
                alt="products image"
              />
            </div>
            <div className="single-thumb-item">
              <img
                src="/assets/images/products/products-thumbs-2.jpg"
                alt="products image"
              />
            </div>
            <div className="single-thumb-item">
              <img
                src="/assets/images/products/products-thumbs-3.jpg"
                alt="products image"
              />
            </div>
            <div className="single-thumb-item">
              <img
                src="/assets/images/products/products-thumbs-2.jpg"
                alt="products image"
              />
            </div>
          </Slider>
        </div>

        <div className="col-lg-6 col-md-9">
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            {...this.state.settings2}
            className="products-big-gallery-slider"
          >
            <div className="single-gallery-item">
              <a
                href="/assets/images/products/products-big-1.jpg"
                className="img-popup"
              >
                <img
                  src="/assets/images/products/products-big-1.jpg"
                  alt="Image"
                />
              </a>
            </div>
            <div className="single-gallery-item">
              <a
                href="/assets/images/products/products-big-1.jpg"
                className="img-popup"
              >
                <img
                  src="/assets/images/products/products-big-1.jpg"
                  alt="Image"
                />
              </a>
            </div>
            <div className="single-gallery-item">
              <a
                href="/assets/images/products/products-big-1.jpg"
                className="img-popup"
              >
                <img
                  src="/assets/images/products/products-big-1.jpg"
                  alt="Image"
                />
              </a>
            </div>
            <div className="single-gallery-item">
              <a
                href="/assets/images/products/products-big-1.jpg"
                className="img-popup"
              >
                <img
                  src="/assets/images/products/products-big-1.jpg"
                  alt="Image"
                />
              </a>
            </div>
          </Slider>
        </div>
      </Fragment>
    );
  }
}
