import React from "react";
import Folder from '../assets/Folder.png';

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
                  <img class="inline object-cover w-20 h-20 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
       
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