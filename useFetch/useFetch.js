import { useEffect, useState } from "react";

export const useFetch = ( url ) => {
  const [state, setstate] = useState({
    data: null,
    isLoding: true,
    hasError: null,
  });
  

  const getFetch = async ( ) =>{

    setstate({
      ...state,
      isLoding:true,
    })


    const res = await fetch( url );
    const data = await res.json();

    setstate({
      data,
      isLoding: false,
      hasError: null,
    })

  }



  useEffect(() => {
    getFetch();
  }, [url]);
  


  return {
     data:     state.data,
     isLoding: state.isLoding,
     hasError: state.hasError,
  }
};





