import React from "react";
import { Button, Img, ImgWrapper } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} alt="" />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size={20}/>
        {likes} likes!
    </Button>
    </article>
  );
};
