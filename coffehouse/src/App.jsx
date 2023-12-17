import MainScreen from "./components/MainScreen/MainScreen";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col max-w-[1440px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
