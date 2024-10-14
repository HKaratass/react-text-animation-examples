import { useEffect, useRef, useState } from 'react'
import { charsPosition } from './charsPosition';
import { SplitFlapPiece, CharacterContainer, Wrapper, CharacterUp, CharacterDown } from './style/index.styled';


const FLIP_TIME = 1;
const FLIP_RATIO = 4; //48 % FLIP_RATIO === 0
const SplitFlapAnimation = ({ WORD, RANDOM, BEFORE, DELAY }) => {
    WORD = WORD ? WORD : "TEST";
    const beforeAr = BEFORE ? BEFORE.split('') : false;
    if (beforeAr)
        RANDOM = false;

    return (
        <Wrapper $WITDH={WORD.length * 50}>
            {
                WORD?.split('')?.map((m, i) => {
                    const [stop, setStop] = useState(false);
                    const random = RANDOM ? Math.floor(Math.random() * ((2400 - 0) / 50 + 1)) * 50 : 0;
                    const before = beforeAr ? charsPosition[beforeAr[i]] : 0;
                    const [k, setK] = useState(random + before);
                    const [kz, setKz] = useState(random + before);
                    const [kf, setKf] = useState(random + before);
                    const [flipState, setFlipState] = useState({
                        state: "upper", // boolean olabilir
                        upper: {
                            base: 0,
                            target: -90,
                            positionY: 0,
                            origin: "bottom",
                            top: 0
                        },
                        down: {
                            base: 90,
                            target: 5,
                            positionY: 50,
                            origin: "top",
                            top: 50
                        },
                        upperAngle: 0,
                        downAngle: 90
                    });

                    let now = random + before;
                    const flip = () => {
                        setFlipState((prev) => {
                            if (now === charsPosition[m]) {
                                setStop(true);
                                clearInterval(interval.current);
                            }
                            if (!stop)
                                if (prev.state === "upper") {
                                    if (prev.upperAngle === -48)
                                        setK(prev => {
                                            return (prev + 50) % 2400;
                                        })
                                    if (prev.upperAngle <= prev.upper.base && prev.upperAngle >= prev.upper.target) {
                                        return { ...prev, upperAngle: prev.upperAngle - FLIP_RATIO }
                                    } else {
                                        setKf(prev => (prev + 50) % 2400)
                                        return { ...prev, state: "down", upperAngle: 0 }
                                    }
                                } else {
                                    if (prev.downAngle <= prev.down.base && prev.downAngle >= prev.down.target) {
                                        return { ...prev, downAngle: prev.downAngle - FLIP_RATIO }
                                    } else {
                                        setKz(prev => {
                                            now = (prev + 50) % 2400;
                                            return (prev + 50) % 2400;
                                        })
                                        return { ...prev, state: "upper", downAngle: 90 }
                                    }
                                }
                        })
                    }

                    const interval = useRef(null);
                    useEffect(() => {
                        if (DELAY) {
                            setTimeout(() => {
                                interval.current = setInterval(flip, FLIP_TIME);
                            }, DELAY)
                        } else {
                            interval.current = setInterval(flip, FLIP_TIME);
                        }
                        return () => {
                            clearInterval(interval.current);
                        }
                    }, [])

                    return (
                        <CharacterContainer key={i} $LEFT={50 * i}>
                            <CharacterUp $X={-k} $Y={0} />
                            <CharacterDown $X={-kz} $Y={-50} />
                            <SplitFlapPiece
                                $STOP={stop}
                                $X={-kf}
                                $Y={
                                    flipState?.state === "upper" ?
                                        flipState?.upper.positionY :
                                        flipState?.down.positionY
                                }
                                $ROT={
                                    flipState?.state === "upper" ?
                                        flipState?.upperAngle :
                                        flipState?.downAngle
                                }
                                $CENTER={
                                    flipState?.state === "upper" ?
                                        flipState?.upper.origin :
                                        flipState?.down.origin
                                }
                                $TOP={
                                    flipState?.state === "upper" ?
                                        flipState?.upper.top :
                                        flipState?.down.top
                                }
                            />
                        </CharacterContainer>
                    )
                })
            }
        </Wrapper>
    )
}


export default SplitFlapAnimation;