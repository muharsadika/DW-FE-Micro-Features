// import MemeGenerator from './MemeGenerator';
// import MicroFeaturesButton from './MicroFeaturesButton'; 
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1>MICRO FEATURE</h1>
      <div className="card">
        <div className="button-container"> {/* Tambahkan container untuk tombol */}
          <Link to="/meme-generator">
            <button>Go to Meme Generator</button>
          </Link>
          <Link to="/currency-converter">
            <button>Go to Currency Converter</button>
          </Link>
          <Link to="/ttt">
            <button>Tic Tac Toe</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;

// // import MemeGenerator from './MemeGenerator';
// import MicroFeaturesButton from './MicroFeaturesButton';
// import './App.css';

// function App() {
//   return (
//     <>
//       <h1>MICRO FEATURES</h1>
//       <div className="card">
//         <MicroFeaturesButton /> {/* Tombol pertama */}
//         <MicroFeaturesButton/> {/* Tombol kedua */}
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
