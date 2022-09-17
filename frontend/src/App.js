import {  Routes, Route } from "react-router-dom";
import { UserContext } from "./hooks/UserContext";
import SignIn from "./components/SignIn";
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import useFindUser from "./hooks/useFindUser";
import Landing from "./components/Landing";

const App = () => {

  const { user, setUser, isLoading } = useFindUser();

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-in-side" element={<SignInSide />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/home" element={<PrivateRoute />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </UserContext.Provider>
    );
};

export default App;
