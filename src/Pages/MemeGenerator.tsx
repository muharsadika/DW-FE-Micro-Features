import { useState, useEffect } from 'react';
import axios from 'axios';

interface Meme {
    id: string;
    name: string;
    url: string;
}

function MemeGenerator() {
    const [memes, setMemes] = useState<Meme[]>([]);
    const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);

    useEffect(() => {
        const fetchMemes = async () => {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            setMemes(response.data.data.memes);
        };

        fetchMemes();
    }, []);

    const generateMeme = () => {
        const numRandom = Math.random();
        const randomIndex = Math.floor(numRandom * memes.length);
        console.log('Hasil numRandom:', numRandom);
        console.log('Hasil memes.length:', memes.length);
        console.log("Hasil randomIndex: ", randomIndex);
        setCurrentMeme(memes[randomIndex]);

        // Tambahkan ini untuk mencetak hasil generateMeme ke konsol
        // console.log("Hasil Math.random(): ", Math.random());
        // console.log("Hasil memes.length: ", memes.length);
        // console.log("Hasil Math.floor: ", Math.floor(Math.random() * memes.length));
        // console.log("Hasil generateMeme: ", randomIndex);
        // console.log("Hasil generateMeme: ", currentMeme);
    };

    return (
        <div>
            {currentMeme && (
                <div>
                    <h2>{currentMeme.name}</h2>
                    <img src={currentMeme.url} alt={currentMeme.name} />
                </div>
            )}
            <button onClick={generateMeme}>Generate</button>
        </div>
    );
}

export default MemeGenerator;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Meme {
//     id: string;
//     name: string;
//     url: string;
// }

// function MemeGenerator() {
//     const [memes, setMemes] = useState<Meme[]>([]);
//     const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);
//     const [generatedMemes, setGeneratedMemes] = useState<Meme[]>([]);

//     useEffect(() => {
//         const fetchMemes = async () => {
//             const response = await axios.get('https://api.imgflip.com/get_memes');
//             setMemes(response.data.data.memes);
//         };

//         fetchMemes();
//     }, []);

//     const generateMeme = () => {
//         const randomIndex = Math.floor(Math.random() * memes.length);
//         const randomMeme = memes[randomIndex];
//         setCurrentMeme(randomMeme);
//         setGeneratedMemes([...generatedMemes, randomMeme]);
//     };

//     return (
//         <div>
//             {currentMeme && (
//                 <div>
//                     <h2>{currentMeme.name}</h2>
//                     <img src={currentMeme.url} alt={currentMeme.name} />
//                 </div>
//             )}
//             <button onClick={generateMeme}>Generate</button>

//             <h3>Generated Memes:</h3>
//             <ul>
//                 {generatedMemes.map((meme) => (
//                     <li key={meme.id}>{meme.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default MemeGenerator;
