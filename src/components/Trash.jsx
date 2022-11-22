import React from "react";
import Trash from '../assets/Trash.png';

export default function TrashModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  
            
            {/* PORTFOLIO */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} class="hover:bg-white/20 text-white py-2 px-4 rounded">
              <img class="max-w-full h-auto" src={Trash} alt="image description">
              </img>
              <p>Trash</p>
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
                   Trash
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
                    <p className="text-left my-4 text-slate-400 text-lg leading-relaxed">
      
              <ul>
                  <li>🏫 My name is <span className=" font-medium">NAME</span>! A (Front-End) Web Developer. I'm currently studying Webmaster Programme at Högskola Väst,
                   If you want to contact me use this <a className='text-underline' href='mailto:linkhaggman@gmail.com'><u>EMAIL</u></a></li>
                  <li>🧑‍💻 I like to code and design websites & web apps.</li>
                  <li>🎮 I enjoy as well to create PC games and publish them on Steam.</li>
                  <li>🕵️ I'm also a big fan of classic mystery novels.</li>
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