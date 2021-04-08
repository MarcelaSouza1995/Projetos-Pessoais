import React, { createContext, useState } from 'react';


export const StoreContext = createContext();


const Store = (props) => {
  const { children } = props;
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);


const objetoValues = {users, setUsers, expenses, setExpenses}
  return (
    <StoreContext.Provider
      value={ objetoValues }
    >
      {children}
    </StoreContext.Provider>
  );
};


export default Store;
