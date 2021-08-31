import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.disabled ? "gray" : props.primary ? "palevioletred" : "white"};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  cursor: pointer;
  font-size: 1em;
  height: 50px;
  margin: 10px;
  width: 100%;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 90%;
  border: 1px solid black;
  border-radius: 5px;
  ::placeholder {
    color: black;
    opacity: 0.4;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  padding: 0px 10px;
  text-align: ${(props) => props.align || "left"};
`;

export const Division = styled.div``;

export const Container = styled.div``;

export const ModalBG = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 33%;
  height: auto;

  top: ${({ openPos }) =>
    ({
      center: "50%",
      "top-left": "10%",
      "top-center": "10%",
      "top-right": "10%",
    }[openPos])};

  left: ${({ openPos }) =>
    ({
      center: "50%",
      "top-left": "5%",
      "top-center": "50%",
      "top-right": "95%",
    }[openPos])};

  transform: ${({ openPos }) =>
    ({
      center: "translate(-50%,-50%)",
      "top-left": "translate(0,0)",
      "top-center": "translate(-50%,0)",
      "top-right": "translate(-100%,0)",
    }[openPos])};

  border-radius: 10px;
  padding: 0.75rem;
`;
