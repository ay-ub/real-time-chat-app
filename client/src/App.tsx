import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
        <Route
          path='/about'
          element={
            <div>
              <h1>About</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
