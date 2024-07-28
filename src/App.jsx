import { ThreeItemGrid } from "@/components/grid/three-items"
import { Carousel } from "./components/carousel"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
  
  <Router>
  <Routes>
    <Route path="/" element={
    <>
    <ThreeItemGrid/>
    <Carousel/>
    </>
  }>
      <Route index element={<Home />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  </Routes>
</Router>
  )
}

export default App
