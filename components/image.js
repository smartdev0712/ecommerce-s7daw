import { getStrapiMedia } from '../lib/media'
import NextImage from "next/image"

const ImageView = ({ image }) => {
    const { alternativeText, width, height } = image.data.attributes;

    return (
        <NextImage
            layout='responsive'
            width="100%"
            height="100%"
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    );
};

export default ImageView;