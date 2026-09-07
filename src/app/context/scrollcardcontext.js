'use client';
import React, { createContext, useState } from 'react';


const initialState = {

  showTable: false,
  setShowTable: () => { },

};

export const cardcontext = createContext(initialState);

const Scrollcardcontext = ({ children }) => {
  
  const [showTable, setShowTable] = useState(initialState.showTable);



 
  return (
    <cardcontext.Provider
      value={{     
        showTable,
        setShowTable,
      }}
    >
      {children}
    </cardcontext.Provider>
  );
};

export default Scrollcardcontext;
