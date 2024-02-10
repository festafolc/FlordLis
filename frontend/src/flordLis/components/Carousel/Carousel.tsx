import { useState } from 'react';
import dcArrow from '../../../assets/images/products/dc-arrow.jpg';
import dcBatman from '../../../assets/images/products/dc-batman.jpg';
import dcBlack from '../../../assets/images/products/dc-black.jpg';
import dcBlue from '../../../assets/images/products/dc-blue.jpg';

import dcFlash from '../../../assets/images/products/dc-flash.jpg';
import dcGreen from '../../../assets/images/products/dc-green.jpg';
import dcMartian from '../../../assets/images/products/dc-martian.jpg';
import dcRobin from '../../../assets/images/products/dc-robin.jpg';

import dcSuperman from '../../../assets/images/products/dc-superman.jpg';
import dcWonder from '../../../assets/images/products/dc-wonder.jpg';
import marvelCaptian from '../../../assets/images/products/marvel-captain.jpg';
import marvelCyclops from '../../../assets/images/products/marvel-cyclops.jpg';

import marvelDaredevil from '../../../assets/images/products/marvel-daredevil.jpg';
import marvelHawkeye from '../../../assets/images/products/marvel-hawkeye.jpg';
import marvelHulk from '../../../assets/images/products/marvel-hulk.jpg';
import marvelIron from '../../../assets/images/products/marvel-iron.jpg';

import './carouselStyle.css';


export const Carousel = () => {

    const imagesGroup = [[dcArrow, dcBatman, dcBlack, dcBlue], [dcFlash, dcGreen, dcMartian, dcRobin], [dcSuperman, dcWonder, marvelCaptian, marvelCyclops], [marvelDaredevil, marvelHawkeye, marvelHulk, marvelIron]];

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [selectedImages, setSelectedImages] = useState(imagesGroup[0]);

    const selecteNewGroupImages = (selectedIndex: number, images: string[][], next: boolean) => {

        if (next) {

            const nextIndex = selectedIndex == 3 ? 0 : selectedIndex + 1;

            setSelectedImages(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }
        else {

            const previousIndex = selectedIndex == 0 ? 3 : selectedIndex - 1;

            setSelectedImages(imagesGroup[previousIndex]);
            setSelectedIndex(previousIndex);
        }
    }

    const previous = () => {

        selecteNewGroupImages(selectedIndex, imagesGroup, false);
    }

    const next = () => {

        selecteNewGroupImages(selectedIndex, imagesGroup, true);
    }

    return (
        <>
            <section className='container__carouselAndButtons'>
                <div className='container__buttons'>
                    <button className='buttons__indexPostion' onClick={previous}><i className="fa-solid fa-angle-left"></i></button>
                </div>
                <article className="container__carousel">
                    <div className='carousel__box'>
                        <div className='carousel__card'>
                            <img className='card_img' src={selectedImages[0]} />
                            <div className='card__content'>
                                <span className='card__text'>Jane Doe</span>
                            </div>
                        </div>
                        <div className='carousel__card'>
                            <img className='card_img' src={selectedImages[1]} />
                            <div className='card__content'>
                                <span className='card__text'>Alex Smith</span>
                            </div>
                        </div>
                        <div className='carousel__card'>
                            <img className='card_img' src={selectedImages[2]} />
                            <div className='card__content'>
                                <span className='card__text'>Emily New</span>
                            </div>
                        </div>
                        <div className='carousel__card'>
                            <img className='card_img' src={selectedImages[3]} />
                            <div className='card__content'>
                                <span className='card__text'>Lisa Boley</span>
                            </div>
                        </div>
                    </div>
                </article>

                <div className='container__buttons container__buttons-right'>
                    <button className='buttons__indexPostion' onClick={next}><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </section>
        </>
    )
}
