import styled, { keyframes } from 'styled-components'

const COLOR = "#f2f2f2"
export const Wrapper = styled.div`
  font-size: 3rem;
  padding: 5px;
  color: ${COLOR};
  user-select: none;
  background-color: #f2f2f2;
  overflow: hidden;
  display: inline-flex;
`;

export const CharacterContainer = styled.div`
  height: 100%;
  perspective: 400px;
`;

const RotBase = styled.div`
  background-color: black;
  width: 50px;
  height: 50px;
  margin: 0 2.5px;
  border: 2px solid #343434;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  
`;
export const RotTop = styled(RotBase)`
  transform: rotate3d(1, 0, 0, 60deg);
  margin: -10px 2.5px;
`;

export const RotMid = styled(RotBase)``;

export const RotBottom = styled(RotBase)`
  transform: rotate3d(1, 0, 0, -60deg);
  margin: -10px 2.5px;
`;

const anim = keyframes`
  0%  { top: 100%;} 
  100%  { top: -15%;} 
`;
export const AnimationUp = styled.div`
  position: absolute;
  animation: ${props => props.$STOP ? "" : anim} 150ms ease-in-out infinite;
`;

