import './App.css'
import Hello from './Hello'
import Fetch from './Fetch'
import Header from './Header'
import Ecomm from './Ecomm'
import EcommHeader from './EcommHeader'
import Calculator from './Calulator'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/*<h1>hello</h1>
      <Hello></Hello>*/}
      <Header></Header>
      <Fetch></Fetch>
      <EcommHeader></EcommHeader>
      <Ecomm></Ecomm>
      <Calculator></Calculator>

    </>
  )
}

export default App
