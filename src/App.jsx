import WriteAnimation from './components/WriteAnimation';
import CombinationLockAnimation from './components/CombinationLockAnimation';
import SplitFlapAnimation from './components/SplitFlapAnimation';
import styled from 'styled-components';
const MID = styled.div`
  display: flex;
  min-width: 1080px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const testData = [
    "Designer...",
    "Developer...",
    "Photographer...",
    "YouTuber...",
    "Blogger..."
  ];

  return (
    <>
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Veriler Örnektir
      <WriteAnimation WORDS={testData} />
      <br />
      <MID> {/** Component ortalama */}
        <CombinationLockAnimation RANDOM WORD={"HASAN KARATAS"} />
      </MID>

      <MID> {/** Component ortalama */}
        <SplitFlapAnimation RANDOM WORD={"HASAN KARATAS"} />
        <SplitFlapAnimation WORD={".TEST 1"} />
        {/* DELAY & BEFORE COMBINATION */}
        {/** BEFORE => RANDOM-CANCEL */}
        <SplitFlapAnimation RANDOM DELAY={1000} BEFORE={"KARAMAN 123"} WORD={"GIRESUN 795"} />  {/** before length === word length*/}
        {/* <SplitFlapAnimation RANDOM DELAY={1000} BEFORE={"241"} WORD={"379"} />*/}   {/** before length === word length */}
      </MID>
    </>
  )
}

export default App

