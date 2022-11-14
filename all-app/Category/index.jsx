import React from "react";
import { Anchor, Image } from "./styles";

const DEFAUL_IMAGE =  "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAUL_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} referrerPolicy="no-referrer"></Image>
    {emoji}
  </Anchor>
);



