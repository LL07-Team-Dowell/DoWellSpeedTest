import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Pages/Result/Result";
import { ResultContextProvider } from "./hooks/context";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResultContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/result' element={<Result />} />
          </Routes>
          <Footer />
        </ResultContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
