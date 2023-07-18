import { } from 'react'
import './App.css'
import List from './Components/List'

const items = ['Chair', 'Cup', 'Mobile', 'Laptop']

function App() {
return (
    <>
     <List items={items}/>
    </>
  )
}

export default App