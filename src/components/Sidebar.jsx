import React from 'react';
import Folder from '../assets/Folder.png';
import Portfolio from './Portfolio';
import TrashModal from './Trash';
import AboutMe from './AboutMe';
import Skills from './Skills';

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
     <Skills/>
         </li>
      </ul>
   </div>
</aside>
  );
};

export default Bar;
