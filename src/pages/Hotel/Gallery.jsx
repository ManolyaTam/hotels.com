import ImageGallery from "react-image-gallery";

const Gallery = ({ images }) => {
  const items = images.map((item) => ({
    original: item.url,
    thumbnail: item.url,
    // originalHeight: 400,
    // thumbnailHeight: 100,
  }));
  return <ImageGallery items={items} />;
};

export default Gallery;
