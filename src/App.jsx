import { useState } from 'react'
import NavBar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './componentes/ItemDetail/ItemDetail'
import NotFound from './componentes/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}></Route>
      <Route exact path='/product/:id' element={<ItemDetail/>}/>
      <Route exact path='/*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
