import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
  showCheckOutSuccess:()=>{},
  showCheckOutFail:()=>{},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckOut = () => {
    setUserProgress("checkout");
  };
  const hideCheckOut = () => {
    setUserProgress("");
  };
  const showCheckOutSuccess=()=>
  {
    setUserProgress('success');
  }
  const showCheckOutFail=()=>
  {
    setUserProgress('fail');
  }

  const ctxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
    showCheckOutSuccess,
    showCheckOutFail
  };



  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
