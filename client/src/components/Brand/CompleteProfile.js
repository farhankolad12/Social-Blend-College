import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import VerifyEmail from "../CreatePage/VerifyEmail";
import Location from "../CreatePage/Location";
import SocialChannels from "../CreatePage/SocialChannels";
import SelectImg from "../CreatePage/SelectImg";
import SelectNiches from "../CreatePage/SelectNiches";
import WelcomePage from "../CreatePage/WelcomePage";
import { Navigate } from "react-router-dom";
import Summarize from "../CreatePage/Summarize";

export default function CompleteProfile() {
  const { level } = useParams();
  const { currentUser } = useAuth();
  return (
    <div className="container get-info-container">
      {currentUser?.currentLevel === 6 ? (
        <Navigate to={"/" + currentUser.username} />
      ) : !currentUser ? (
        <Navigate to="/" />
      ) : +level === 0 ? (
        <VerifyEmail />
      ) : +level === 1 ? (
        <Location />
      ) : +level === 2 ? (
        <Summarize />
      ) : +level === 3 ? (
        <SocialChannels />
      ) : +level === 4 ? (
        <SelectNiches />
      ) : +level === 5 ? (
        <SelectImg />
      ) : (
        <WelcomePage />
      )}
    </div>
  );
}
