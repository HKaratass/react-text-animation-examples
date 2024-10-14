import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


export const Cursor = styled.span`
    animation: 1s ${blink} infinite;
    &::after {
        font-size: 1.25em;
        content: "|";
    }
`;

const anim = keyframes`
  40%, 60% { left: 100%; }
  100% { left: 0%;}
`;


const BACKGROUND_COLOR = "#343434"
export const Outer = styled.div`
    background-color: ${BACKGROUND_COLOR};
    color: #f2f2f2;
    margin: 0px 20px;
    padding: 20px 20px;
    position: relative;
    overflow: hidden;
    font-size: 3rem;
    user-select: none;
    /* height: 120px; */
`;

export const WordWrapper = styled.span`
    position: relative;
    overflow: hidden;
`;

export const Hider = styled.span`
      position: absolute;
      top: 0;
      left: ${props => props.$STOP ? "100%" : "0"};
      height: 100%;
      width: 100%;
      background-color: ${BACKGROUND_COLOR};
      animation: ${props => props.$STOP ? "none" : anim} ${props => props.$ANIM_TIME}ms steps(${props => props.$wordL}) infinite;
      line-height: 0.9em;
`;