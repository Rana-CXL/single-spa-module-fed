import { useNavigate } from 'react-router-dom'
import '../src/style.css'
import Hoctest from './components/Hoctest'
 const App = () => {
  return (
    <>
      <h1>This is module federtaion app</h1>
      <Hoctest>
        <div>hello test hoc</div>
      </Hoctest>
    </>
  )
}
export default App