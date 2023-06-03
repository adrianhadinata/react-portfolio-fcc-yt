import React from "react";
import propTypes from "prop-types";

export default function Img(props) {
  return (
    <img
      className={props.className}
      src={props.imageSrc}
      alt={props.imageAlt}
      width={props.imageWidth}
    />
  );
}

Img.propTypes = {
  className: propTypes.string,
  imageSrc: propTypes.string,
  imageAlt: propTypes.string,
  imageWidth: propTypes.string,
};
