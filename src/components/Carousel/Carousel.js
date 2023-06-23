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
        slidesToShow: 6,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5

                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4

                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            }
        ]

    }
    return (
        <section className="container">
            <h1>{heading}</h1>
            <div className="carousel-wrapper">
                <div className="controls">
                    <button id="btn-left" className="btn-control" onClick={sliderRef?.slickPrev}>
                        <FaChevronLeft />
                    </button>
                    <button id="btn-right" className="btn-control" onClick={sliderRef?.slickNext}>
                        <FaChevronRight />
                    </button>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {movies && movies.map((movie) =>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            image={IMG_PATH + movie.backdrop_path}
                        />)}
                </Slider>
            </div>
        </section>

    )
}

export default Carousel
