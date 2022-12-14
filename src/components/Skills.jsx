import React from "react";
import Folder from '../assets/Folder.png';
import Profile from '../assets/Profile.png';

export default function Portfolio() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  

          {/* ABOUT ME */}
         <li>
         <>
         <button  onClick={() => setShowModal(true)} class="hover:bg-white/20 text-white rounded">
            <img class="max-w-full h-auto" src={Folder} alt="image description">
            </img>
            <p>Skills</p>
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
                    Skills
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
                  <p className="text-left my-4 text-slate-400 text-lg leading-relaxed">
    
            <ul>
            <li>⭐ <span className=" font-medium">Favorite Tools:</span> REACT + TAILWIND</li>
                <li>🖥️  <span className=" font-medium">Languages:</span> HTML, CSS, JS, JSX, NANI, MARKDOWN, C#</li>
                <li>⚙️ <span className=" font-medium">Frameworks:</span> REACT, VUE</li>
                <li>💽 <span className=" font-medium">Libraries:</span> TAILWIND, SCSS, POST-CSS, NPM, YARN </li>
            </ul>
                  </p>
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