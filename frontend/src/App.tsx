
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './components/Login'

function App() {

  return (
    <>
      
      <Router>
      <Header>Pay Log</Header>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>

          
          </Routes>
          </Router>
    </>
  )
}

export default App
