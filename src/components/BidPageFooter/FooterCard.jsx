// import React, { useState } from 'react';


// const FooterCard = ({ image, title }) =>  {
 
//   return (
//     <div className="bg-yankees-blue p-1 w-full xs:p-2">
//       {/* Image */}
//       <img 
//         src={image} 
//         alt={title} 
//         className="h-40 w-full object-cover mb-4 xs:h-32 xs:mb-3" 
//       />
  
//       {/* Title with Stats */}
//       <div className="flex items-center justify-between w-full mt-2 text-xs text-white xs:flex-col xs:text-sm xs:text-center">
//         <h3 className="text-lg font-montserrat-medium text-white xs:text-base xs:mb-2">{title}</h3>
//       </div>
//     </div>
//   );
// };

// export default FooterCard;

import React, { useState } from 'react';


const FooterCard = ({ image, title }) =>  {
 
  return (
    <div className="bg-yankees-blue p-1 w-full xs:p-2">
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="h-40 w-full object-cover mb-4 xs:h-32 xs:mb-3" 
      />
  
      {/* Title with Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white xs:flex-col xs:text-sm xs:text-center">
        <h3 className="text-lg font-montserrat-medium text-white xs:text-base xs:mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default FooterCard;