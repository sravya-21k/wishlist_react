import styled, { createGlobalStyle } from "styled-components";

// Global styles with reset
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  body {
    height:100vh
}

  h5 {
    font-family: 'Dancing Script', cursive; /* Christmas cursive font */
    color: #ff4500; /* Christmas Red */
    text-shadow:2px 2px 4px rgba(0,0,0,0.5)
  }
    

  h5:hover {
    color: darkgreen;
  }
`;

export const WishlistContainer = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
justify-content:end;
  gap: 1px;
  padding: 5% 30%;
  max-width: fit-content;
  background:rgba(255,255,255,0.8)
  border-radius:20px;
  @media (max-width: 768px) {
  display:grid;
    grid-template-columns: 1fr; 
  }
    @media(min-width: 300px){
    display:grid;
    grid-template-column:1fr
    

    }
`;

export const Component = styled.div`
  position: relative;
  background-image: url("src/assets/images/7950381.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #333;
  border: 2px solid gold;
  margin: 10px;
  border-radius: 10px;
  padding: 15px;
  padding-top: 80px;
  width: 300px;
  height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  font-family: "Dancing Script", cursive;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
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

`;

export const NaughtyStatus = styled.div`
  font-weight: bold;
  color: ${(props) => (props.naughty ? "red" : "green")};
  text-shadow: 0 0 5px ${(props) => (props.naughty ? "red" : "green")};
  animation: glow 1.5s infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 5px ${(props) => (props.naughty ? "red" : "green")};
    }
    to {
      text-shadow: 0 0 15px ${(props) => (props.naughty ? "red" : "green")};
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
  text-align: center;
  font-family: "Dancing script", cursive;
  font-size: 3rem;
  color: #ff4500;
  margin-top: 20px;
  padding-top: 35px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  animation:fadeIn 2s ease-in-out,scale,scaleUp 2s infinite alternate;

  &::before {
    content: "🎁";
    font-size: 3rem;
    margin: 0 10px;
    animation-delay: 0s;
  }
  &::after {
    content: "🎅";
    font-size: 3rem;
    margin: 0 10px;
    // display: inline-block;
    animation-delay: 0.5s infinite ease-in-out;
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
    @keyframes bounce{
    0%,100%{
    transform:translateY(0);
    }
    50%{
    transform:translateY(-10px);
    }
    }
    @keyframes scaleUp{
    0%{
    transform:Scale(1);
    }
    100%{
    transform:Scale(1.5);
    }
    }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    &::before,
    &::after {
      font-size: 1.5rem;
    }
  }
`;
