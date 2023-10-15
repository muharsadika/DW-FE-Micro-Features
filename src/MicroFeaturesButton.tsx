// import React from 'react';
import { Link } from 'react-router-dom';

function MicroFeaturesButton() {
    return (
        <>
            <div className="button-container">
                <Link to="/meme-generator">
                    <button>Meme Generator</button>
                </Link>
                <Link to="/currency-converter">
                    <button>Go to Currency Converter</button>
                </Link>
            </div>
        </>

    );
}

export default MicroFeaturesButton;
