import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentUser } from "../../app/slices/usersSlice";
import { RootState } from "../../app/store";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../../utils/firebase/firebaseUtils";

import { Router, Route, Routes } from "react-router-dom";

import GameData from "../Pregame/GameData";

import SignOut from "../SignOut/SignOut";

import AppStyled from "./AppStyled";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Navbar from "../Navbar/Navbar";

function App() {
  const currentUser = useAppSelector(
    (state: RootState) => state.users.currentUser
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: object) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  console.log(currentUser);
  return (
    <AppStyled className="wrap-container">
      <Routes>
        <Route path="/" element={currentUser ? <Navbar /> : <SignIn />}>
          <Route index element={<GameData />} />
          {/* <Route path="/scores" element={} />
          <Route path="/profile" element={} /> */}
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
