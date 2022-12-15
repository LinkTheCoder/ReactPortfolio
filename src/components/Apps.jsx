import React from "react";
import Chrome from '../assets/Chrome.png';
import Gmail from '../assets/Gmail.png';
import Steam from '../assets/Steam.png';
import Windows from '../assets/Windows.png'; import Gmail from '../assets/Gmail.png';


export default function TrashModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  
            
            {/* Apps */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} class="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
              <img class="max-w-full h-auto" src={Windows} alt="image description">
              </img>

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
                   Apps
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
                  <div class="bg-slate-800 p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">

    <div class="rounded overflow-hidden">
    <a href="https://www.google.com/"><button class="bg-slate-800 hover:bg-slate-700 text-white py-2 px-2 rounded">
    <img class="inline object w-12 h-12 rounded-sm" src={Chrome} alt="Profile image"/>
      <div class="px-2 py-2">
        <p class="text-slate-400 text-base">
        Chrome
        </p>
      </div>
      </button></a>
    </div>
 
    <div class="rounded overflow-hidden">
    <a href="mailto:linkhaggman@gmail.com"><button class="bg-slate-800 hover:bg-slate-700 text-white py-2 px-2 rounded">
    <img class="inline object w-12 h-12 rounded-sm" src={Gmail} alt="Profile image"/>
      <div class="px-6 py-2">
        <p class="text-slate-400 text-base">
        Gmail
        </p>
      </div>
      </button></a>
    </div>

    <div class="rounded overflow-hidden">
    <a href="https://store.steampowered.com/app/1571090/Beast_Crimes/"><button class="bg-slate-800 hover:bg-slate-700 text-white py-2 px-2 rounded">
    <img class="inline object w-12 h-12 rounded-sm" src={Steam} alt="Profile image"/>
      <div class="px-6 py-2">
        <p class="text-slate-400 text-base">
        Steam
        </p>
      </div>
      </button></a>
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