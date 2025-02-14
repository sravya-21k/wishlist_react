import React from "react";
import { Component, KidDetails, Wishlist, NaughtyStatus } from "./styles";

export default function Kidswishlist({
  data: { id, name, age, wishlist, naughty },
}) {
  return (
    <Component $naughty={naughty}>
      <KidDetails>
        <h5>{id}.</h5>
        <h5>{name}</h5>
        <h5>{age}år</h5>
      </KidDetails>
      <Wishlist>
        {wishlist.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </Wishlist>
      <NaughtyStatus $naughty={naughty}>
        {naughty ? "Naughty🤪" : "Snille🤗"}
      </NaughtyStatus>
    </Component>
  );
}
