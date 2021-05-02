import React from "react";
import BaseLightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface ILightbox {
    images: string[];
    index: number;
    onClose: () => void;
    setIndex: (value: number) => void;
}

export const Lightbox: React.FC<ILightbox> = ({
    images,
    index,
    onClose,
    setIndex
}) => (
    <BaseLightbox
        mainSrc={images[index]}
        nextSrc={images[(index + 1) % images.length]}
        prevSrc={images[(index + images.length - 1) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
        }
        onMoveNextRequest={() => setIndex((index + 1) % images.length)}
    />
);
