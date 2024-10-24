import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export function ImageZoomCustom({
  src,
  className,
  classNameZoomImg,
  zoomHeight,
  zoomWidth,
  isDisplayZoomImage,
}: {
  src?: StaticImageData;
  className?: string;
  classNameZoomImg?: string;
  zoomWidth: number;
  zoomHeight: number;
  isDisplayZoomImage?: boolean;
}) {
  const [isHover, setIsHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div className="">
      <Image
        src={src || ""}
        alt=""
        className={className}
        onMouseOver={() => {
          if (isDisplayZoomImage) {
            setIsHover(true);
          }
        }}
        onMouseOut={() => setIsHover(false)}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsHover(false)}
      />

      {isHover && src && (
        <Image
          style={{
            left: position.x + 20,
            top: position.y - zoomHeight * 0.5,
            maxWidth: zoomWidth,
            maxHeight: zoomHeight,
          }}
          src={src}
          alt=""
          className={classNames(classNameZoomImg, "absolute z-10")}
        />
      )}
    </div>
  );
}
