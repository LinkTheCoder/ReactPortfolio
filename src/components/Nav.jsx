import React from 'react'
import Bar from '../components/Sidebar'
import Clock from '../components/Clock'
import Chrome from '../assets/Chrome.png'; import Gmail from '../assets/Gmail.png'; import Github from '../assets/Github.png';
import Windows from '../assets/Windows.png'; import Fullscreen from '../assets/Fullscreen.png'; import StoryGraph from '../assets/StoryGraph.png'
import Steam from '../assets/Steam.png';
import Apps from '../components/Apps'

function FullscreenFunction() {
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
   if (document.documentElement.requestFullscreen) {
     document.documentElement.requestFullscreen();
   } else if (document.documentElement.mozRequestFullScreen) {
     document.documentElement.mozRequestFullScreen();
   } else if (document.documentElement.webkitRequestFullscreen) {
     document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
   }
 } else {
    if (document.cancelFullScreen) {
       document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
 }
}


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
  <><Bar /><>
      <nav className="relative flex flex-wrap items-center justify-between bg-slate-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
         <button>
         <Apps/>
          </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
<a href="https://www.google.com/"><button class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
            <img class="max-w-full h-auto" src={Chrome} alt="image description">
            </img>
          </button></a>
              </li>
              
              <li className="nav-item">
<a href="mailto:linkhaggman@gmail.com"><button class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
            <img class="max-w-full h-auto" src={Gmail} alt="image description">
            </img>
          </button></a>
              </li>

              <li className="nav-item">
              <a href="https://github.com/LinkTheCoder"><button class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
            <img class="max-w-full h-auto" src={Github} alt="image description">
            </img>
          </button></a>
              </li>

              <li className="nav-item">
              <a href="https://store.steampowered.com/app/1571090/Beast_Crimes/"><button class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
            <img class="max-w-full h-auto" src={Steam} alt="image description">
            </img>
          </button></a>
              </li>

              <li className="nav-item">
             <button onClick={FullscreenFunction} class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
            <img class="max-w-full h-auto" src={Fullscreen} alt="image description">
            </img>
          </button>
              </li>
              <li className="nav-item">
             <button>
             <Clock />
          </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </></>
  );
}