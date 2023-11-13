import { useState, useEffect } from "react";
import './laptop.css';
function TypeWriter(){
    const listText = ['Welkom', "Welcome", "Herzlichen Willkomen", 'Bienvenue', 'Selamat Datang']
    const [indexList, setIndexList] = useState(0);
    const [isIncrement, setIsIncrement] = useState(true);
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < listText[indexList].length && isIncrement) {
          const timeout = setTimeout(() => {
            setText(() => text + listText[indexList][currentIndex]);
            setCurrentIndex(() => currentIndex + 1);
          }, 500);
      
          return () => clearTimeout(timeout);
        } else if(currentIndex === listText[indexList].length && isIncrement){
            const sleepTimeout = setTimeout(() => {
                setIsIncrement(() => false);
            }, 1500);
            
            return () => clearTimeout(sleepTimeout);
        }
        else if (currentIndex > 0) {
          const timeout = setTimeout(() => {
            setCurrentIndex(() => currentIndex - 1);
            setText(() => text.slice(0, -1));
          }, 500);
      
          return () => clearTimeout(timeout);
        } else {
            const sleepTimeout = setTimeout(() => {
                if (indexList === listText.length - 1) {
                    setIndexList(() => 0);
                } else setIndexList(() => indexList + 1);
                setIsIncrement(() => true);
            }, 1500);
            
            return () => clearTimeout(sleepTimeout);
        }
    });
    return (
        <h1>{text}<span className="animate-blink">|</span>,<br />My name is Pribadi Ridwan Mulyono</h1>
    )
}

function HomePage() {
    return (
        <div className="flex flex-col h-full relative">
            <nav className="flex top-0 h-30px w-full bg-gradient-to-b p-24px  border-b-black border-b-0.5px">
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-md'>
                        My life my journey
                    </h1>
                    <div className='flex gap-10px '>
                        <div
                            className='text-xs rounded hover:bg-gray-200 hover:cursor-pointer p-4px'
                        >
                            Journey
                        </div>
                        <div
                            className='text-xs rounded hover:bg-gray-200 hover:cursor-pointer p-4px'
                        >
                            Skills
                        </div>
                    </div>
                </div>  
            </nav>
            <div className="flex items-center h-full justify-around">
                <TypeWriter></TypeWriter>
            </div>
        </div>
    )
}

export default HomePage;