"use client";

import styled from "styled-components";

interface TimelineProps {
  width: number;
}

export const TimelineStyled = styled.div<TimelineProps>`
  .timeline-content::before {
    content: " ";
    position: absolute;
    background: #fff;
    transform: rotateZ(45deg);

    ${(props) =>
      props.width < 768 &&
      `
      width: 14px;
      height: 14px;
      top: 32px;  
      `}

    ${(props) =>
      props.width >= 768 &&
      `
      width: 20px;
      height: 20px;
      top: calc(50% - 10px);
    `}
  }

  .timeline-wrap:nth-child(odd) > .timeline-content::before {
    ${(props) =>
      props.width < 768 &&
      `
      border-left: unset;
      border-bottom: unset;
      border-top: 1px solid #d4d4d4;
      border-right: 1px solid #d4d4d4;
      left: unset;
      right: -8px;
      `}

    ${(props) =>
      props.width >= 768 &&
      `
      border-top: unset;
      border-right: unset;
      border-top: 1px solid #d4d4d4;
      border-right: 1px solid #d4d4d4;
      left: unset;
      right: -10px;
    `}
  }

  .timeline-wrap:nth-child(even) > .timeline-content::before {
    ${(props) =>
      props.width < 768 &&
      `
      border-left: unset;
      border-bottom: unset;
      border-top: 1px solid #d4d4d4;
      border-right: 1px solid #d4d4d4;
      left: unset;
      right: -8px;
    `}

    ${(props) =>
      props.width >= 768 &&
      `
      border-top: unset;
      border-right: unset;
      border-bottom: 1px solid #d4d4d4;
      border-left: 1px solid #d4d4d4;
      right: unset;
      left: -10px;
    `}
  }
`;
