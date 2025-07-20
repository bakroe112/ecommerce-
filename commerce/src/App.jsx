import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout } from './router';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
