import { useState, useEffect } from 'react';

const words = [
    // 'apple', 'banana', 'cherry', 'date', 'fig', 'grape',
    'Apple', 
    'Mango',
    'Lemon',
    'Cherries',
    'Banana',
    'Avocado',
    'Orange',
    'Pineapple',
    'Apricot',
    'Grapefruit',
    'Watermelon',
    'Plum',
    'Quince',
    'Cherimoya',
    'Carambola',
    'Raspberry',
    'Lychee',
    'Passion',
    'Pomelo',
    'Mangosteen',
    'Tangerine',
    'Breadfruit',
    'Guava',
];

const WordScramble = () => {
    const [score, setScore] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [inputWord, setInputWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');

    useEffect(() => {
        // Set the initial word when the component loads
        setScrambledWord(scrambleWord(words[currentWordIndex]));
    }, [currentWordIndex]);

    const scrambleWord = (word: string) => {
        const wordArray = word.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        return wordArray.join('');
    };

    const checkWord = () => {
        if (inputWord === words[currentWordIndex]) {
            setScore(score + 1);
        }
        // Move to the next word
        setCurrentWordIndex(currentWordIndex + 1);
        setInputWord('');
    };

    return (
        <div>
            <h1>Word Scramble Game</h1>
            <p>Unscramble the word: {scrambledWord}</p>
            <input
                type="text"
                placeholder="Your answer..."
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
            />
            <button onClick={checkWord}>Submit</button>
            <p>Score: {score}</p>
        </div>
    );
};

export default WordScramble;




// import React, { useState, useEffect } from 'react';

// const WordScramble: React.FC = () => {
//     const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//     const [currentWord, setCurrentWord] = useState<string>('');
//     const [scrambledWord, setScrambledWord] = useState<string>('');
//     const [score, setScore] = useState<number>(0);

//     const generateRandomWord = () => {
//         const randomIndex = Math.floor(Math.random() * words.length);
//         const randomWord = words[randomIndex];
//         return randomWord;
//     };

//     const scrambleWord = (word: string) => {
//         const wordArray = word.split('');
//         for (let i = wordArray.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
//         }
//         return wordArray.join('');
//     };

//     const checkAnswer = (answer: string) => {
//         if (answer === currentWord) {
//             const newWord = generateRandomWord();
//             setCurrentWord(newWord);
//             setScrambledWord(scrambleWord(newWord));
//             setScore(score + 1);
//         } else {
//             alert('Jawaban salah. Coba lagi!');
//         }
//     };

//     useEffect(() => {
//         const initialWord = generateRandomWord();
//         setCurrentWord(initialWord);
//         setScrambledWord(scrambleWord(initialWord));
//     }, []);

//     return (
//         <div>
//             <h1>Word Scramble Game</h1>
//             <p>Skor: {score}</p>
//             <div>
//                 <p>Tebak kata: {scrambledWord}</p>
//                 <input
//                     type="text"
//                     value={currentWord}
//                     onChange={(e) => setCurrentWord(e.target.value)}
//                 />
//                 <button onClick={() => checkAnswer(currentWord)}>Periksa</button>
//             </div>
//         </div>
//     );
// };

// export default WordScramble;
