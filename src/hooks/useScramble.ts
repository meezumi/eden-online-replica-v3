import { useState, useEffect, useRef } from 'react';

const CHARACTERS = '!<>-_\\/[]{}—=+*^?#________';

export const useScramble = (text: string, speed: number = 50) => {
    const [currentText, setCurrentText] = useState(text);
    const rafRef = useRef<number | null>(null); // <-- CORRECTED LINE
    const frameRef = useRef(0);
    const textRef = useRef(text);

    useEffect(() => {
        textRef.current = text;
        const scramble = () => {
            let output = '';
            let complete = 0;

            for (let i = 0; i < textRef.current.length; i++) {
                const from = textRef.current[i];
                const to = text[i];
                const start = Math.floor(frameRef.current / speed);

                if (start >= i) {
                    complete++;
                    output += to;
                } else {
                    const randomChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    output += randomChar;
                }
            }

            setCurrentText(output);

            if (complete === textRef.current.length) {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                }
            } else {
                frameRef.current++;
                rafRef.current = requestAnimationFrame(scramble);
            }
        };

        scramble();

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [text, speed]);

    return currentText;
};