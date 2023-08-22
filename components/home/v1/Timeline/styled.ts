"use client";

import styled from "styled-components";

export const TimelineStyled = styled.div`
  .timeline::before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 1px;
    background-color: #d4d4d4;
    left: 85%;
    margin-left: 0px;
  }

  .timeline-content::before {
    content: " ";
    position: absolute;
    background: #fff;
    transform: rotateZ(45deg);
    width: 14px;
    height: 14px;
    top: 40px;
  }

  .timeline-wrap:nth-child(odd) > .timeline-content::before {
    border-left: unset;
    border-bottom: unset;
    border-top: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
    left: unset;
    right: -8px;
  }

  .timeline-wrap:nth-child(even) > .timeline-content::before {
    border-left: unset;
    border-bottom: unset;
    border-top: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
    left: unset;
    right: -8px;
  }

  @media screen and (min-width: 768px) {
    .timeline::before {
      left: 81%;
    }

    .timeline-content::before {
      width: 20px;
      height: 20px;
      right: -10px !important;
      top: calc(50% - 10px);
    }

    .timeline-wrap:nth-child(even) > .timeline-content::before {
      right: -10px;
    }
  }

  @media screen and (min-width: 1024px) {
    .timeline::before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: " ";
      width: 1px;
      background-color: #d4d4d4;
      left: 50%;
      margin-left: 0px;
    }

    .timeline-wrap:nth-child(even) > .timeline-content::before {
      border-top: unset;
      border-right: unset;
      border-left: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;
      left: -10px;
    }
  }
`;
