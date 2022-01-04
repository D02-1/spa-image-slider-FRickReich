import { useState } from 'react';

import { Slide, Error } from './../';

import './Slider.scss';

export const Slider = ({ images }) =>
{
    const [activeImage, setActiveImage] = useState(0);

    const handleActiveImageChange = (num) =>
    {
        setActiveImage(num);
    }

    const handleChangeActiveImage = (direction) =>
    {
        let num = 0;

        if (direction === "prev")
        {
            num = activeImage === 0 ? images.length - 1 : activeImage - 1;
        }
        else if (direction === "next")
        {
            num = activeImage === images.length - 1 ? 0 : activeImage + 1;
        }

        handleActiveImageChange(num);
    }

    return (
        <div className="Slider">
            {
                images.length === 0 ?
                    (
                        <Error/>
                    )
                    :
                    (
                        <>
                            {
                                images.map((image, i) => {
                                    return (
                                        <Slide key={i} image={image} visible={i === activeImage} />
                                    )
                                })
                            }

                            <div
                                className="leftArrow"
                                onClick={() => handleChangeActiveImage("prev")}
                            >
                                &#x2039;
                            </div>
                            <div
                                className="rightArrow"
                                onClick={() => handleChangeActiveImage("next")}
                            >
                                &#x203A;
                            </div>

                            <div className="menu">
                                {
                                    images.map((button, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={`indicator ${i === activeImage ? 'active' : 'inactive'}`}
                                                onClick={() => handleActiveImageChange(i)}
                                            ></div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
            }
        </div>
    );
};
