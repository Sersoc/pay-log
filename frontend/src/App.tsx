
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
function App() {


  return (
    <>
      
      <Router>
      <Header>Pay Log</Header>
        <Routes>
          <Route path='/' element={<Main/>}/>

          
          </Routes>
          </Router>
    </>
  )
}

export default App
