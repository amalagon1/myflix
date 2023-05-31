import { useState } from 'react'
import './carousel.scss'
import Movie from '../Movie/Movie'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ movies, IMG_PATH, heading }) => {

    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // responsive: [
        //     {
        //         breakpoint:
        //             settings: {
        //         slidesToShow:
        //             slidesToScroll
        //     }
        //     }
        // ]

    }
    return (
        <section className="container">
            <h1>{heading}</h1>
            <div className="carousel-wrapper">
                <div className="controls">
                    <button id="btn-left" onClick={sliderRef?.slickPrev}>
                        <FaChevronLeft />
                    </button>
                    <button id="btn-right" onClick={sliderRef?.slickNext}>
                        <FaChevronRight />
                    </button>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {movies && movies.map((movie) =>
                        <Movie
                            title={movie.title}
                            image={IMG_PATH + movie.poster_path} />)}
                </Slider>
            </div>
        </section>

    )
}

export default Carousel
