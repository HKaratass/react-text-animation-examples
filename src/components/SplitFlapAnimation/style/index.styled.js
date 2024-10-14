import styled from 'styled-components';

import Images from '@/assets/chars.png'; //with alias
// import Images from '../../../assets/chars.png';

export const Wrapper = styled.div`
  position: relative;
  width: ${props => `${props.$WITDH}`}px;
  height: 100px;
  margin: 20px 0;
  perspective: 900px;
`;

export const CharacterContainer = styled.div`
  width: 50px;
  position: absolute;
  transform-style: preserve-3d;
  left: ${props => `${props.$LEFT}px`};
  top: 0px;
`;

const CharacterPiece = styled.div.attrs(props => ({
    style: {
        backgroundPosition: `${props.$X}px ${props.$Y}px`
    }
}))`
  width: 50px;
  height: 50px;
  background-image: url(${Images});
`;

export const CharacterUp = styled(CharacterPiece)``;
export const CharacterDown = styled(CharacterPiece)``;

export const SplitFlapPiece = styled(CharacterPiece).attrs(props => ({
    style: {
        transform: `rotateX(${props.$ROT}deg)`,
        display: `${props.$STOP ? "none" : ""}`
    }
}))`position: absolute;
  left: 0px;
  z-index: 10;
  display: block;
  top: ${props => props.$TOP}px;
  transform-origin: center ${props => props.$CENTER} 0px;
`;

