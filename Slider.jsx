import React, { useState } from 'react';
import './slider.css'; // Подключаем файл стилей для слайдера
import prevImg from './../../img/toLeft.svg';
import nextImg from './../../img/toRight.svg';
import sliderImg1 from './../../img/slider__image1.jpg';
import sliderImg2 from './../../img/slider__image2.jpg';
import sliderImg3 from './../../img/slider__image3.jpg';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [sliderImg1, sliderImg2, sliderImg3]; // Пути к изображениям

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section className="slider">
            <div className="slider__wrapper">
                <div className="slider__btn-prev">
                    <button className="prev" onClick={prevSlide}><img src={prevImg} alt="" /></button>
                </div>
                <div className="slider__content">
                    <img className="currentImage" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                    <img className="prevImage" src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]} alt={`Slide ${currentIndex}`} />
                    <img className="nextImage" src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]} alt={`Slide ${currentIndex + 2}`} />
                </div>
                <div className="slider__btn-next">
                    <button className="next" onClick={nextSlide}><img src={nextImg} alt="" /></button>
                </div>
            </div>
        </section>
    );
};

export default Slider;
 

