import { useEffect, useRef, useState } from 'react'
import { Cursor, Hider, Outer, WordWrapper } from './style/index.styled';

const ANIM_TIME = 2000;
const testData = ["Developer...", "Photographer...", "YouTuber...", "Blogger..."];
const WriteAnimation = ({ WORDS }) => {
    const [word, setWord] = useState(0);
    const [stop, setStop] = useState(null);
    const interval = useRef(null);
    const loader = useRef(null);

    const words = WORDS || testData;

    const times = useRef([]);
    const clearTime = () => {
        times.current.forEach(k => clearTimeout(k));
        times.current.length = 0;
    }
    useEffect(() => {
        loader.current = (s) => {
            times.current.length = 0;
            for (let i = 0 + s; i < words.length + s; i++) {
                if (i + 1 > words.length) {
                    const t1 = setTimeout(() => {
                        setWord(i - 4);
                    }, ANIM_TIME * (i - s))
                    times.current.push(t1);
                }
                else {
                    const t1 = setTimeout(() => {
                        setWord(i);
                    }, ANIM_TIME * (i - s))
                    times.current.push(t1);
                }
            }
        }

        loader.current(0);
        interval.current = setInterval(() => loader.current(0), words.length * ANIM_TIME);
        return () => { clearInterval(interval.current); clearTime() };
    }, []);

    //---- ACTIONS
    const mouseOver = () => {
        clearTime();
        clearInterval(interval.current);
        setStop(word);
    }
    const mouseLeave = () => {
        const spoint = stop + 1 === words.length ? 0 : stop + 1;
        loader.current(spoint);
        interval.current = setInterval(() => loader.current(spoint), words.length * ANIM_TIME);
        setStop(null);
    }
    return (
        <Outer onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}>
            I'm a <br />
            <WordWrapper>{stop !== null ? words[stop] : words[word]} {/** stop === 0 => null sayılıyor bu yüz den stop !== null */}
                <Hider $wordL={words[word]?.length} $ANIM_TIME={ANIM_TIME} $STOP={stop !== null}>
                    <Cursor />
                </Hider>
            </WordWrapper>
        </Outer>
    );
};

export default WriteAnimation