import { Routes, Route } from "react-router-dom";
import Demo from "./pages/front/Demo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Demo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
