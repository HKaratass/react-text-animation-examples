import { useEffect, useRef, useState } from 'react'
import { CharacterContainer, AnimationUp, RotBottom, RotMid, RotTop, Wrapper } from './style/index.styled';

const CombinationLockAnimation = ({ WORD, RANDOM }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  WORD = WORD ? WORD : "TEST";
  return (
    <Wrapper>
      {
        WORD.split('').map((k, i) => {
          const random = RANDOM ? Math.floor(Math.random() * 25) + 1 : 1;
          const [stop, setStop] = useState(false);
          const [letters, setLetters] = useState([random - 1, random, random + 1]);
          const intervalRef = useRef(null);
          const updateLetters = () => {
            setLetters(([top, mid, bot]) => {
              if (alphabet[(mid + 1) % alphabet.length] === k) {
                clearInterval(intervalRef.current);
                setStop(true)
              }

              const newTop = (top + 1) % alphabet.length;
              const newMid = (mid + 1) % alphabet.length;
              const newBot = (bot + 1) % alphabet.length;
              return [newTop, newMid, newBot];
            });
          };
          useEffect(() => {
            intervalRef.current = setInterval(updateLetters, 150);
            return () => clearInterval(intervalRef.current);
          }, []);

          if (k !== " ")
            return (
              <CharacterContainer key={i}>
                <RotTop>
                  <AnimationUp $STOP={stop}>
                    {alphabet[letters[0]]}
                  </AnimationUp>
                </RotTop>
                <RotMid>
                  <AnimationUp $STOP={stop}>
                    {alphabet[letters[1]]}
                  </AnimationUp>
                </RotMid>
                <RotBottom>
                  <AnimationUp $STOP={stop}>
                    {alphabet[letters[2]]}
                  </AnimationUp>
                </RotBottom>
              </CharacterContainer>
            )
          else
            return <div key={i} style={{ width: "1em" }}> </div>
        })
      }
    </Wrapper>
  )
};
export default CombinationLockAnimation