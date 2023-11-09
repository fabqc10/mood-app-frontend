import { useEffect, useState } from "react";
import "./App.css";
import { httpGetFeelings } from "./http";
import { FormFeeling } from "./components/FormFeeling/FormFeeling";
import { FormScreen } from "./routes/FormScreen/FormScreen";
import { BoardScreen } from "./routes/BoardScreen/BoardScreen";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./routes/Navigation/Navigation";

function App() {
  const [feelings, setFeelings] = useState<Feeling[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<FormScreen />} />
        <Route path="myboard" element={<BoardScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
