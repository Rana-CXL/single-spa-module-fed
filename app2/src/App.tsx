import React from 'react';
import '../src/style.css'
import Hoctest from './components/Hoctest'
const CounterAppOne = React.lazy(() => import("app3/CounterAppOne"));

 const App = () => {
  return (
    <>
      <h1>APP-2 :  Single-SPA+ModuleFederation</h1>
      <React.Suspense fallback="Loading">
        <CounterAppOne />
      </React.Suspense>
    </>
  )
}
export default App