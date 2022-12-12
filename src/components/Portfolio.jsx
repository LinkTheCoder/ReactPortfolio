import React from "react";
import Folder from '../assets/Folder.png';
import GitIcon from '../assets/GitIcon.png';

export default function Portfolio() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  
            
            {/* PORTFOLIO */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} class="hover:bg-white/20 text-white py-2 px-4 rounded">
              <img class="max-w-full h-auto" src={Folder} alt="image description">
              </img>
              <p>Portfolio</p>
            </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="bg-slate-800 flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
                    <h3 className="text-3xl text-slate-400 font-semibold">
                   PORTFOLIO
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="bg-slate-800 relative p-6 flex-auto">
                  <div class="mb-2 max-w-sm rounded overflow-hidden border border-slate-400">
  <div class="px-6 py-2">
  <a href="https://github.com/LinkTheCoder/Matador" class="text-slate-400 font-bold text-lg mb-2 underline hover:text-slate-300">📁 Matador</a>
    <p class=" text-slate-400 text-base">
    A re-design of a pizza restaurant 🍕
    </p>
  </div>
  <div class="px-6 pb-2">
    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React JS</span>
    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
  </div>
</div>

<div class="mb-2 max-w-sm rounded overflow-hidden border border-slate-400">
<div class="px-6 py-2">
  <a href="https://github.com/LinkTheCoder/BeastCrimes" class="text-slate-400 font-bold text-lg mb-2 underline hover:text-slate-300">📁 Beast Crimes</a>
    <p class=" text-slate-400 text-base">
    Promo site of my game Beast Crimes 🎮
    </p>
  </div>
  <div class="px-6 pb-2">
    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React JS</span>
    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
  </div>
  </div>
  <div class="mb-2 max-w-sm rounded overflow-hidden border border-slate-400">
<div class="px-6 py-2">
  <a href="https://github.com/LinkTheCoder?tab=repositories" class="text-slate-400 font-bold text-sm mb-2 underline hover:text-slate-300">More Projects</a>
  </div>
  </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
           </li>
        </ul>
    );
  };