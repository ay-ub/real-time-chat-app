import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("@/pages/Login"));
const Conversation = lazy(() => import("@/pages/Conversation"));
const Register = lazy(() => import("@/pages/Register"));
const Messages = lazy(() => import("@/layout/Messages"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='messages' element={<Messages />}>
            <Route path=':userId' element={<Conversation />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
