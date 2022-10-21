import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'
import {Home, About, People, Profile, Login, SignUp, NotFound} from './components'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <>
    <Navigation/>

    <Container>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/people' element={<People/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </Container>
    
    </>
  )
}

export default App