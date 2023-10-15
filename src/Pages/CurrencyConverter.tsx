import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('usd');
  const [toCurrency, setToCurrency] = useState<string>('idr');
  const exchangeRates = {
    usd: 14400, // Nilai tukar USD ke IDR
    eur: 16000, // Nilai tukar EUR ke IDR (ganti sesuai kebutuhan)
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value) || 0;
    setAmount(newAmount);
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromCurrency = e.target.value;
    setFromCurrency(newFromCurrency);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToCurrency = e.target.value;
    setToCurrency(newToCurrency);
  };

  // const formatNumber = (number: number) => {
  //   return new Intl.NumberFormat('en-US').format(number);
  // };

  const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('en-US').format(number);
    return formattedNumber;
  };



  const convertedAmount =
    fromCurrency === 'idr' && toCurrency === 'usd'
      ? amount / exchangeRates.usd // IDR to USD
      : fromCurrency === 'usd' && toCurrency === 'idr'
        ? amount * exchangeRates.usd // USD to IDR
        : fromCurrency === 'eur' && toCurrency === 'idr'
          ? amount * exchangeRates.eur // EUR to IDR
          : fromCurrency === 'idr' && toCurrency === 'eur'
            ? amount / exchangeRates.eur // IDR to EUR
            : amount; // Default jika pilihan konversi tidak sesuai

  return (
    <>
      <div className="Converter">
        <h2>Currency Converter</h2>
        <div className="Convert">
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="Convert">
          <label>From Currency:</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="idr">IDR</option>
          </select>
        </div>
        <div className="Convert">
          <label>To Currency:</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="idr">IDR</option>
          </select>
        </div>
        <div className="HasilConvert">
          <label>Converted Amount:</label>
          <input
            type="text"
            // value={convertedAmount.toFixed(2)}
            value={amount === 0 ? 0 : formatNumber(parseFloat(convertedAmount.toFixed(0)))}
            readOnly
          />
        </div>
      </div>
    </>

  );
}

export default CurrencyConverter;


// import React, { useState } from 'react';

// function CurrencyConverter() {
//     const [amount, setAmount] = useState<number>(1);
//     const [currency, setCurrency] = useState<string>('usd');
//     const exchangeRate = 14400; // Ganti dengan nilai tukar yang sesuai

//     const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newAmount = parseFloat(e.target.value);
//         setAmount(newAmount);
//     };

//     const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const newCurrency = e.target.value;
//         setCurrency(newCurrency);
//     };

//     const convertedAmount = currency === 'usd' ? amount * exchangeRate : amount / exchangeRate;

//     return (
//         <>
//             <h2>Currency Converter</h2>
//             <div>
//                 <div className="Converter">
//                     <div className="Nominal">
//                         <label>Nominal:</label>
//                         <input
//                             type="number"
//                             value={amount}
//                             onChange={handleAmountChange}
//                         />
//                     </div>
//                     <div className="Convert">
//                         <label>Convert:</label>
//                         <select value={currency} onChange={handleCurrencyChange}>
//                             <option value="usd">USD to IDR</option>
//                             <option value="idr">IDR to USD</option>
//                         </select>
//                     </div>
//                     <div className="HasilConvert">
//                         <label>Hasil Convert:</label>
//                         <input
//                             type="text"
//                             value={convertedAmount.toFixed(2)}
//                             readOnly
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>


//     );
// }

// export default CurrencyConverter;



// import{ useState } from 'react';

// function CurrencyConverter() {
//     const [usdAmount, setUsdAmount] = useState<number>(1); // Pastikan menyatakan tipe data number
//     const exchangeRate = 14400; // Ganti dengan nilai tukar yang sesuai

//     const convertToIDR = () => {
//         const idrAmount = usdAmount * exchangeRate;
//         alert(`${usdAmount} USD is approximately ${idrAmount} IDR`);
//     };

//     return (
//         <div>
//             <h2>Currency Converter</h2>
//             <div>
//                 <label>USD Amount:</label>
//                 <input
//                     type="number"
//                     value={usdAmount.toString()} // Konversi nilai ke string saat menampilkan
//                     onChange={(e) => setUsdAmount(parseFloat(e.target.value))} // Konversi nilai string menjadi number di sini
//                 />
//             </div>
//             <button onClick={convertToIDR}>Convert to IDR</button>
//         </div>
//     );
// }

// export default CurrencyConverter;



// import{ useState } from 'react';

// function CurrencyConverter() {
//     const [usdAmount, setUsdAmount] = useState(1);
//     const exchangeRate = 14400; // Ganti dengan nilai tukar yang sesuai

//     const convertToIDR = () => {
//         const idrAmount = usdAmount * exchangeRate;
//         alert(`${usdAmount} USD is approximately ${idrAmount} IDR`);
//     };

//     return (
//         <div>
//             <h2>Currency Converter</h2>
//             <div>
//                 <label>USD Amount:</label>
//                 <input type="number" value={usdAmount} onChange={(e) => setUsdAmount(e.target.value)} />
//             </div>
//             <button onClick={convertToIDR}>Convert to IDR</button>
//         </div>
//     );
// }

// export default CurrencyConverter;
