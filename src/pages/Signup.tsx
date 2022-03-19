import React, { useState } from "react";
import { useCreateUserMutation } from "../api/users.api";

type Props = {};

const Signup = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useCreateUserMutation();

  const handleSubmit = async () => {
    await createUser({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-5 bg-slate-700">
      <h1 className="text-white text-[30px] font-semibold">Registration</h1>
      <div className="flex flex-col space-y-5">
        <input
          className="inputform"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="inputform"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="inputform"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="space-x-5">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 h-10 w-[100px] rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
