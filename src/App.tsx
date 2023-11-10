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

  useEffect(() => {
    let subscribed = true;

    httpGetFeelings().then((data) => {
      if (subscribed) {
        setFeelings(data);
      }
    });

    return () => {
      subscribed = false;
    };
  }, []);

  const createFeeling = async (feeling: Feeling) => {
    setFeelings([...feelings, feeling]);
  }

  const deleteFeeling = (id: string) => {
    setFeelings((prev) => prev.filter((feeling) => feeling.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<FormScreen createFeeling={createFeeling}/>} />
        <Route path="myboard" element={<BoardScreen feelings={feelings} deleteFeeling={deleteFeeling} />} />
      </Route>
    </Routes>
  );
}

export default App;
