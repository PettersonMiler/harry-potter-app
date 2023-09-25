import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 text-center bg-green-1">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
