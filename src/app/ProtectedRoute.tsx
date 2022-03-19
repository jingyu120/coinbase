import React from "react";
import { selectCurrentUser } from "../slices/auth.slice";
import { useAppSelector } from "./hooks";
import { Navigate } from "react-router-dom";

type Props = {
  children: any;
};

const ProtectedRoute: React.FC<any> = (props: Props) => {
  const user = useAppSelector((state) => selectCurrentUser(state));
  return user ? props.children : <Navigate to="login" />;
};

export default ProtectedRoute;
