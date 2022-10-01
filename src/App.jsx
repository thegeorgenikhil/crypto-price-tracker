import { useState } from "react";
import Coins from "./components/Coins/Coins";
import Footer from "./components/Footer/Footer";

function App() {
  const [isDark,setDark] = useState(true)
  return (
    <div className={isDark ? "App dark font-inter" : "App font-inter"}>
      <div className="content bg-white text-white dark:bg-gray-900 dark:text-white font-bold">
      <div className='flex bg-black justify-between py-4 px-4 text-2xl  dark:bg-blue-700'>
            <button className='text-2xl font-bold'>CryptoWatch</button>
            <div className='flex space-x-4'>
                <button onClick={() => setDark(!isDark)}><i className="fas fa-adjust "></i></button>
                <button><i className="fab fa-github"></i></button>
            </div>
        </div>
        <Coins />
        <Footer />
      </div>
    </div>
  );
}

export default App;
