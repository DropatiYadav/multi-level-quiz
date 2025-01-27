import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesArr } from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routesArr.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
