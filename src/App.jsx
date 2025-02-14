import React from "react";
import { GlobalStyle, WishlistContainer, Header, Container } from "./styles";
import SnowfallEffect from "./SnowfallEffect";
import Kidswishlist from "./Kidswishlist";

function App() {
  const kidsWishlist = [
    {
      id: 1,
      name: "Emilie",
      age: 8,
      wishlist: [
        "Dukkehus",
        "Enhjørningbamse",
        "Fargeleggingsbok",
        "Hoppeball",
      ],
      naughty: false,
    },
    {
      id: 2,
      name: "Jakob",
      age: 10,
      wishlist: ["Fjernstyrt bil", "Lego-sett", "Videospill"],
      naughty: true,
    },
    {
      id: 3,
      name: "Sofie",
      age: 6,
      wishlist: ["Tryllestav", "Fe-kostyme", "Glitterpenner", "Dansesko"],
      naughty: false,
    },
    {
      id: 4,
      name: "Lars",
      age: 9,
      wishlist: [
        "Basketball",
        "Drone",
        "Tegneseriebøker",
        "Kikkert",
        "Byggesett",
      ],
      naughty: false,
    },
    {
      id: 5,
      name: "Mia",
      age: 7,
      wishlist: ["Puslespill", "Kunstutstyr", "Prinsessekjole"],
      naughty: true,
    },
    {
      id: 6,
      name: "Noa",
      age: 11,
      wishlist: ["Skateboard", "Vitenskapssett", "Brettspill", "Fotball"],
      naughty: true,
    },
    {
      id: 7,
      name: "Oda",
      age: 5,
      wishlist: [
        "Lekekjøkken",
        "Kosedyr",
        "Boblemaskin",
        "Tesett",
        "Leketallerkener",
      ],
      naughty: false,
    },
    {
      id: 8,
      name: "Adrian",
      age: 8,
      wishlist: ["Fotball", "Actionfigurer", "Togbane"],
      naughty: false,
    },
    {
      id: 9,
      name: "Anna",
      age: 6,
      wishlist: [
        "Tesett",
        "Dukketeater",
        "Glitterklistremerker",
        "Prinsessekrone",
      ],
      naughty: false,
    },
    {
      id: 10,
      name: "Elias",
      age: 9,
      wishlist: ["Elektrisk sparkesykkel", "Rubiks kube", "Tegneserieromaner"],
      naughty: true,
    },
    {
      id: 11,
      name: "Ella",
      age: 7,
      wishlist: [
        "Prinsesseslott",
        "Kostymer",
        "Lekekjøkken",
        "Perlesett",
        "Interaktiv bok",
      ],
      naughty: false,
    },
    {
      id: 12,
      name: "Lukas",
      age: 8,
      wishlist: [
        "Drone",
        "Fjernstyrt båt",
        "Lego-romskip",
        "Skissebok",
        "LED-nattlampe",
      ],
      naughty: true,
    },
    {
      id: 13,
      name: "Charlotte",
      age: 6,
      wishlist: ["Kosehund", "Kunstsett", "Glow-stick-armbånd", "Mini-piano"],
      naughty: false,
    },
    {
      id: 14,
      name: "Marius",
      age: 9,
      wishlist: [
        "Basketballkurv",
        "Robotbyggesett",
        "Fotballsko",
        "Actionkamera",
        "Fjernstyrt lastebil",
      ],
      naughty: false,
    },
    {
      id: 15,
      name: "Aria",
      age: 5,
      wishlist: ["Fevinger", "Glitterlim", "Tryllestav", "Tesett", "Leketlf"],
      naughty: false,
    },
    {
      id: 16,
      name: "Benjamin",
      age: 10,
      wishlist: [
        "Fjernstyrt helikopter",
        "Eksperimentsett",
        "VR-briller",
        "Tursekk",
      ],
      naughty: true,
    },
    {
      id: 17,
      name: "Isabella",
      age: 6,
      wishlist: [
        "Havfruedukke",
        "Kunststativ",
        "Malesett",
        "Enhjørningsekk",
        "Ballettsko",
      ],
      naughty: true,
    },
    {
      id: 18,
      name: "Henrik",
      age: 11,
      wishlist: [
        "Spillkonsoll",
        "Skateboard",
        "Elektrisk gitar",
        "Støydempende hodetelefoner",
        "Tegneseriebokserie",
        "Bygg-din-egen-drone-sett",
      ],
      naughty: true,
    },
    {
      id: 19,
      name: "Liva",
      age: 5,
      wishlist: ["Boblemaskin", "Leketamera", "Modell-leire", "Koseenhjørning"],
      naughty: false,
    },
    {
      id: 20,
      name: "Sander",
      age: 9,
      wishlist: [
        "Sportsdrakt",
        "Basketball",
        "Fjernstyrt bil",
        "Bygg-din-egen katapult-sett",
        "Walkie-talkier",
      ],
      naughty: false,
    },
  ];

  return (
    <>
      <GlobalStyle />
      <SnowfallEffect />
      <Header>Ønskelister</Header>
      <Container>
        <WishlistContainer>
          {kidsWishlist.map((product) => (
            <Kidswishlist key={product.id} data={product} />
          ))}
        </WishlistContainer>
      </Container>
    </>
  );
}

export default App;
