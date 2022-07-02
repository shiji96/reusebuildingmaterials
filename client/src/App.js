import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMaterial from "./components/AddMaterial";
import ShowMaterial from "./components/Material/ShowMaterial";
import Materials from "./components/Material/Materials";
import GenerateQR from "./components/GenerateQR";
import MaterialDetail from "./components/Material/MaterialDetail";
import ReadQR from "./components/ReadQR";
import AddLifeCycle from "./components/LifeCycle/AddLifeCycle";
import UpdLifeCycle from "./components/LifeCycle/UpdLifeCycle";
import MaterialContext from './context/materialContext';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
   
  const [materialId, setMaterialId] = useState("")
  const [lifeCycleId, setLifeCycleId] = useState("")

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <MaterialContext.Provider
          value={{
            materialId, setMaterialId,
            lifeCycleId, setLifeCycleId
          }}
          >
          <Routes>
            
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddMaterial />} exact />
            <Route path="/materials" element={<Materials />} exact />
            <Route path="/generateqr/:id" element={<GenerateQR />} exact />
            <Route path="/readqr" element={<ReadQR />} exact />
            <Route path="/materials/:id" element={<MaterialDetail />} exact />
            <Route path="/showmaterial/:id" element={<ShowMaterial />} exact />
            <Route path="/addlifecycle" element={<AddLifeCycle />} exact />
            <Route path="/updlifecycle/:lid" element={<UpdLifeCycle />} exact />

          </Routes>
        </MaterialContext.Provider>
      </main>
    </React.Fragment>
  );
}

export default App;
