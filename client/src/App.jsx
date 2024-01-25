import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

import UserDetailContextProvider from "./contextProvider/UserDetailProvider";
import DnsRecordContextProvider from "./contextProvider/DnsRecordContextProvider";

function App() {
  return (
    <UserDetailContextProvider>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DnsRecordContextProvider>
                  <Home />
                </DnsRecordContextProvider>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </UserDetailContextProvider>
  );
}
export default App;
