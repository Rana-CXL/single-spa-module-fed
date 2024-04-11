import { useNavigate } from 'react-router-dom'
import React from 'react';
import '../src/style.css'
import Hoctest from './components/Hoctest'
// const CounterAppOne = React.lazy(() => import("app3/CounterAppOne"));

 const App = () => {
  return (
    <>
      <h1>This is MFE-dashboard running in dashboard app</h1>
      <Hoctest>
        <div>hello test hoc</div>
      </Hoctest>
      {/* <CounterAppOne/> */}
    </>
  )
}
export default App