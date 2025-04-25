"use client";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const CustomImageGallery = ({
  items,
}: {
  items: { original: string; thumbnail: string }[];
}) => {
  return <ImageGallery items={items} />;
};

export default CustomImageGallery;
