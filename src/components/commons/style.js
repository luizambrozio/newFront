import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Input = styled.input`
  background: #191919 !important;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white !important;
  border-radius: 24px;
  transition: 0.25s;

  :focus {
    width: 280px;
    border-color: #2ecc71;
  }
`;

export const Button = styled.button`
  background: #191919;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white !important;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;

  :hover {
    background: #2ecc71;
  }
`;

export const Box = styled.div`
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
`;

export const Link = styled.a`
  color: white;
`;
