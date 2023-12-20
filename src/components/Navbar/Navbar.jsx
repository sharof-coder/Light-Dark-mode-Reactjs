import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { darkModes, lightMode } from '../../slice/mode';

function DarkModeToggle({ colour = 'bg-blue-600', on = false, onToggle = () => { }, tabIndex = 0 }) {
    const [isOn, setIsOn] = useState(on);
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode)

    function toggle() {
        setIsOn(!isOn);
        onToggle(!isOn);
    }

    function handleClick() {
        dispatch(mode.darkMode ? darkModes() : lightMode());
        console.log(mode.darkMode);
        toggle();
    }

    function handleKeyDown({ key }) {
        if (key === 'Enter') toggle();
    }

    return (
        <div
            role="checkbox"
            aria-checked={isOn ? 'true' : 'false'}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            className={`cursor-pointer w-11 h-5 ${colour} rounded-full relative px-1.5 flex items-center${isOn ? '' : ' justify-end'}`}
        >
            <div className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${isOn ? 'translate-x-6' : 'translate-x-0'}`} />
            {isOn ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            )}
        </div>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const mode = useSelector(state => state.mode)
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header>
            <div className={`top-bar ${mode.darkMode ? 'text-white' : 'text-black'} flex justify-between py-2`}>
                <div className="logo flex align-baseline items-center gap-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill={mode.darkMode ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg">
                        <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M9 4.26387C9 6.56535 4.5 11.4031 4.5 11.4031C4.5 11.4031 0 6.56535 0 4.26387C0 1.9624 2.01472 0.0966797 4.5 0.0966797C6.98528 0.0966797 9 1.9624 9 4.26387ZM6.54545 4.26387C6.54545 5.31 5.62967 6.15805 4.5 6.15805C3.37033 6.15805 2.45455 5.31 2.45455 4.26387C2.45455 3.21774 3.37033 2.36969 4.5 2.36969C5.62967 2.36969 6.54545 3.21774 6.54545 4.26387Z" fill={mode.darkMode ? 'white' : 'black'} />
                    </svg>

                    <span>Location</span>
                </div>
                <div className="icon-box flex gap-2">
                    <DarkModeToggle onToggle={setIsDarkMode} />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={mode.darkMode ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg">
                        <g id="icon">
                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M10.2297 18.4595C5.68458 18.4595 2 14.7749 2 10.2297C2 5.68458 5.68458 2 10.2297 2C14.7749 2 18.4595 5.68458 18.4595 10.2297C18.4595 12.1957 17.7701 14.0006 16.62 15.416L22.7506 21.5467C23.0831 21.8791 23.0831 22.4182 22.7506 22.7506C22.4182 23.0831 21.8791 23.0831 21.5467 22.7506L15.416 16.62C14.0006 17.7701 12.1957 18.4595 10.2297 18.4595ZM10.2297 16.7568C13.8345 16.7568 16.7568 13.8345 16.7568 10.2297C16.7568 6.62495 13.8345 3.7027 10.2297 3.7027C6.62495 3.7027 3.7027 6.62495 3.7027 10.2297C3.7027 13.8345 6.62495 16.7568 10.2297 16.7568Z" fill={mode.darkMode ? 'white' : 'black'} />
                        </g>
                    </svg>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill={mode.darkMode ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg">
                        <g id="icom">
                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M5.68638 4.14285L5.35476 2.78357C5.09658 1.73512 4.17153 0.999938 3.11054 1H2V2.57142H3.11054C3.47355 2.56065 3.79474 2.80935 3.88175 3.16856L6.62725 14.5457L6.9126 15.7164C7.17282 16.7734 8.11035 17.5109 9.17995 17.4999H19.7378V15.9285H9.17995C8.81694 15.9393 8.49574 15.6906 8.40874 15.3314L8.3162 14.9385L19.7378 12.1964C20.5822 11.9964 21.246 11.3322 21.4576 10.4757L23 4.14285H5.68638ZM19.9923 10.0985C19.9209 10.3855 19.6973 10.6072 19.4139 10.6721L7.96144 13.4142L6.07198 5.71427H21.0643L19.9923 10.0985ZM5.85604 20.6428C5.85604 19.341 6.89189 18.2857 8.16967 18.2857C9.44745 18.2857 10.4833 19.341 10.4833 20.6428C10.4833 21.9446 9.44745 22.9999 8.16967 22.9999C6.89189 22.9999 5.85604 21.9446 5.85604 20.6428ZM7.39846 20.6428C7.39846 21.0767 7.74374 21.4285 8.16967 21.4285C8.59559 21.4285 8.94087 21.0767 8.94087 20.6428C8.94087 20.2089 8.59559 19.8571 8.16967 19.8571C7.74374 19.8571 7.39846 20.2089 7.39846 20.6428ZM15.2867 19.7408C15.6448 18.86 16.4884 18.2857 17.4242 18.2857C18.7019 18.2857 19.7378 19.341 19.7378 20.6428C19.7378 21.5962 19.1741 22.4557 18.3096 22.8205C17.445 23.1853 16.4499 22.9837 15.7882 22.3095C15.1265 21.6354 14.9285 20.6216 15.2867 19.7408ZM16.653 20.6428C16.653 21.0767 16.9982 21.4285 17.4242 21.4285C17.8501 21.4285 18.1954 21.0767 18.1954 20.6428C18.1954 20.2089 17.8501 19.8571 17.4242 19.8571C16.9982 19.8571 16.653 20.2089 16.653 20.6428Z"
                                fill={mode.darkMode ? 'white' : 'black'} />
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`bottom-bar  py-2 ${mode.darkMode ? 'text-white' : 'text-black'} flex  justify-center`}>
                <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
                    <ul>
                        <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">Home</li>
                        <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative"><a>Products</a></li>
                        <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">AboutUs</li>
                        <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">ContactUs</li>
                    </ul>
                </div>
                <div className="cursor-pointer bac md:hidden">
                    <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                    <label className="menu-icon text-black block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                        <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative"></span>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Navbar