import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/images/component.png";

// Global styles with reset
export const GlobalStyle = createGlobalStyle`
 
*{
margin:0;
padding:0;
box-sizing:border-box;
}
  
   html, body {
    height: 100%; /* Ensure the background covers the full page */
    width: 100%;
     background: radial-gradient(circle, #001f3f 30%, #003366 60%, #001f3f 90%);
    animation: twinkleBackground 8s infinite alternate;
    overflow-x: hidden;
  }
 @keyframes twinkleBackground {
    0% {
      background: radial-gradient(circle, #001f3f 30%, #003366 60%, #001f3f 90%);
    }
    100% {
      background: radial-gradient(circle, #002a4f 30%, #004080 60%, #002a4f 90%);
    }
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
 .snowflake {
    position: fixed;
    top: -10%;
    color: white;
    font-size: 1.5rem;
    animation: snowfall linear infinite;
  }

  @keyframes snowfall {
    0% {
      transform: translateY(-10vh);
      opacity: 1;
    }
    100% {
      transform: translateY(110vh);
      opacity: 0;
    }
  }

  h5 {
    font-family: 'Dancing Script', cursive; /* Christmas cursive font */
    color: green;
    text-shadow:2px 2px 4px rgba(0,0,0,0.5)
  }
    

  h5:hover {
    color: darkgreen;
  }
`;

export const WishlistContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 750px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  justify-items: center;
  justify-content: center;
  max-width: 1200px;
  border-radius: 20px;
  margin: auto;

  @media (max-width: 768px) {
    // padding: 10px;
    position: absolute;
    top: 50px;
    left: 450px;
    grid-template-columns: 1fr;

    //padding: 10% 20%;
  }
  @media (min-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Component = styled.div`
  position: relative;
  background-image: url(${backgroundImage});

  background-size: cover;
  background-repeat: no-repeat;
  color: #333;
  border: 2px solid gold;
  margin: 10px;

  border-radius: 10px;
  width: 100%;

  padding-top: 80px;
  width: 300px;
  height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: "Dancing Script", cursive;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Prevents it from stretching too much */
    margin: 10px 0; /* Centers it */
  }
`;

export const KidDetails = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 7px;
  font-size: 2rem;
  color: red;

  margin-bottom: 15px;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Wishlist = styled.ul`
  list-style-type: none;
  margin: 10px 0;
  padding-left: 20px;
  li {
    font-size: 15px;
    line-height: 1.4rem;
    color: #555;
    position: relative;

    margin-bottom: 10px;
    transition: color 0.3s ease;
  }
  li:before {
    content: "🎁";
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const NaughtyStatus = styled.div`
  font-weight: bold;
  color: ${(props) => (props.$naughty ? "red" : "green")};
  text-shadow: 0 0 5px ${(props) => (props.$naughty ? "red" : "green")};
  animation: glow 1.5s alternate, sizePulse 2s ease-in-out;

  @keyframes glow {
    from {
      text-shadow: 0 0 5px ${(props) => (props.$naughty ? "red" : "green")};
    }
    to {
      text-shadow: 0 0 15px ${(props) => (props.$naughty ? "red" : "green")};
    }
  }

  @keyframes sizePulse {
    0% {
      font-size: 1.8rem;
    }
    50% {
      font-size: 2rem; /* Slight increase */
    }
    100% {
      font-size: 1.8rem;
    }
  }
`;
export const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Header = styled.h1`
 position:fixed;
 top:0;
 left:40%;
 transform:translateX(-50%)
  text-align: center;
  font-family: "Dancing script", cursive;
  font-size: 4rem;
  color: red;
  //  background: rgba(0, 0, 0, 0.5); /* Slight background for visibility */
  padding: 10px 20px;
  border-radius: 10px;
  width: max-content;
  text-shadow: 0 0 10px gold, 0 0 20px red, 0 0 30px green;
  animation: glowEffect 2s infinite alternate;

  @keyframes glowEffect {
    from {
      text-shadow: 0 0 10px gold, 0 0 20px red, 0 0 30px green;
    }
    to {
      text-shadow: 0 0 20px white, 0 0 30px gold, 0 0 40px red;
    }
  }
  
z-index:2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  animation:fadeIn 1.5 ease-out,scaleUp 1.5s ease-in-out;

  animation:fadeIn 2s ease-in-out,scale,scaleUp 2s infinite alternate;


  &::before {
    content: "🎁";
    font-size: 3rem;
    animation-delay: 0s;
  }
  &::after {
    content: "🎅";
    font-size: 3rem;
    animation-delay: 0.5s infinite ease-in-out;
  }
     &:hover {

    transform: scale(1.1);
  }
    @keyframes fadeIn{
    0%{
    opacity:0
    transform:translateY(-20px);
    }
    100%{
    opacity:1;
    transform:translateY(0);
    }
    }
    @keyframes scaleUp{
    0%{
    transform:Scale(1);
    }
    100%{
    transform:Scale(1.1);
    }
    }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    &::before,
    &::after {
      font-size: 1.5rem;
    }
  }
      @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const Container = styled.div`
 position:relative;
min-height:100vh;
width:100%;
//  overflow:visible;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
// max-width:1200px;
padding-top:100px;
   background: radial-gradient(circle, #001f3f 30%, #003366 60%, #001f3f 90%);


 &:before {
    content: "❄️❄️❄️";
    position: absolute;
    top: -10%;
    left: 50%;
    font-size: 3rem;
    color: white;
    
    animation: snowfall 5s linear infinite;
  }

  @keyframes snowfall {
    0% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(110%);
    }
  }
 
}
`;
