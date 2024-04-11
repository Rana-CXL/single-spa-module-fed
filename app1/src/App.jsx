import React from "react";
// import { Example } from "@demo/shared";
import { useNavigate } from 'react-router-dom'


function App({ title = "", queryClient }) {
  // const navigate = useNavigate()
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <h2>{title}--</h2>
      <button onClick={()=>navigate('sd')} >test button</button>
      {/* <Example /> */}
      </>
    // </QueryClientProvider>
  );
}

export default App;
