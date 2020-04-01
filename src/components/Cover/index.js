import React from "react";
import { Skeleton } from "antd";
import { LazyImageFull, ImageState } from "react-lazy-images";
import { BaseImg, ActualImg, ImgBorder } from "./styles";

export default function Cover({
  isLoading,
  name,
  imageUrl,
  withBorder = false,
  className,
  style
}) {
  if (isLoading)
    return (
      <Skeleton.Input
        loading={isLoading}
        size="large"
        active
        className={className}
        style={style}
      />
    );

  return (
    <LazyImageFull src={imageUrl} className={className} style={style}>
      {({ imageProps, imageState, ref }) => (
        <div style={{ position: "relative" }}>
          <BaseImg
            {...imageProps}
            ref={ref}
            src={`${process.env.PUBLIC_URL}/res/img/loading.gif`}
            alt={"Loading icon"}
            isHidden={imageState === ImageState.LoadSuccess}
          />
          <ActualImg
            {...imageProps}
            ref={ref}
            src={imageProps.src}
            alt={`${name}'s thumbnail`}
            isShown={imageState === ImageState.LoadSuccess}
          />
          {withBorder && imageState === ImageState.LoadSuccess && (
            <ImgBorder
              className={imageProps.className}
              style={imageProps.style}
            />
          )}
        </div>
      )}
    </LazyImageFull>
  );
}
