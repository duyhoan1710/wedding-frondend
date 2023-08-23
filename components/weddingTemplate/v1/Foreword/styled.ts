"use client";

import styled from "styled-components";

export const ForewordStyled = styled.div`
  .heart::before {
    content: "a";
    display: inline-block;
    background-color: #f14e95;
    color: #f14e95;
    width: 50%;
    height: 75%;
    transform: rotateZ(-46deg);
    border-top-left-radius: 50%;
    border-top-right-radius: 25%;
    transform-origin: 14px 8px;
  }

  .heart::after {
    content: "a";
    display: inline-block;
    background-color: #f14e95;
    color: #f14e95;
    width: 50%;
    height: 75%;
    transform: rotateZ(46deg);
    border-top-left-radius: 35%;
    border-top-right-radius: 50%;
    transform-origin: 0px 8px;
  }

  @media screen and (min-width: 1024px) {
    .heart::before {
      transform-origin: 14px 10px;
    }

    .heart::after {
      transform-origin: 0px 6px;
    }
  }
`;
