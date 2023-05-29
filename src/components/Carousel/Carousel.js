import { useState } from 'react'
import './carousel.scss'
import Movie from '../Movie/Movie'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ movies, IMG_PATH }) => {

    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
    }
    return (
        <div className="carousel-wrapper">
            <div className="controls">
                <button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
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
    )
}

export default Carousel
