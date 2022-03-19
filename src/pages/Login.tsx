import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/auth.api";
import { useAppDispatch } from "../app/hooks";
import { User } from "../models/User";
import { setAuthState } from "../slices/auth.slice";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-5 bg-slate-700">
      <h1 className="text-white text-[30px] font-semibold">CryptoStats</h1>
      <div className="flex flex-col space-y-5">
        <input
          className="inputform"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputform"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="space-x-5">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 h-10 w-[100px] rounded-md"
        >
          LOGIN
        </button>
        <Link to="/signup">
          <button className="rounded-md bg-gray-400 h-10 w-[100px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
