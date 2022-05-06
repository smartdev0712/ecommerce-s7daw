function PrevArrow({ className, onClick, icon, extraClass }) {
  return (
    <div
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "ti-arrow-left"}></i>
    </div>
  );
}

function NextArrow({ className, onClick, icon, extraClass }) {
  return (
    <div
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "ti-arrow-right"}></i>
    </div>
  );
}

export const PlaceSliderOne = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const ListingSliderOne = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow extraClass={"prev"} />,
  nextArrow: <NextArrow extraClass={"next"} />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const ClientSliderOne = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Home page 2
export const ListingSlider2 = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const GallerySlider2 = {
  dots: false,
  arrows: false,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export const reletedListingSlider2 = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const reletedProductSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
