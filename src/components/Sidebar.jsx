import React from 'react';
import Folder from '../assets/Folder.png';
import Portfolio from './Portfolio';
import TrashModal from './Trash';
import AboutMe from './AboutMe';

const Bar = () => {
    const [showModal, setShowModal] = React.useState(false);
  return (
<aside class="w-64" aria-label="Sidebar">
   <div class="px-3 py-4 overflow-y-auto rounded bg-transparent">
      <ul>
         {/* TRASH */}
         <li>
         <TrashModal/>
          </li>

{/* ABOUT ME*/}
      <li>
      <AboutMe/>
         </li>

         {/* PORTFOLIO */}
         <li>
     <Portfolio/>
         </li>

          {/* RESUME */}
         <li>
         <a href="https://www.google.com/" target="_blank"><button class=" hover:bg-white/20 text-white py-2 px-4 rounded">
            <img class="max-w-full h-auto" src={Folder} alt="image description">
            </img>
            <p>Resume</p>
          </button></a>
         </li>
         <li>

         </li>
      </ul>
   </div>
</aside>
  );
};

export default Bar;
