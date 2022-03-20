import React from "react";
import { useAppSelector } from "../app/hooks";
import TransactionGrid from "../components/trannsactions/TransactionGrid";
import { selectCurrentUser } from "../slices/auth.slice";

type Props = {};

const Home = (props: Props) => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URL) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URL;
    }
  };

  return (
    <div className="flex pt-10 items-center flex-col h-screen bg-slate-500">
      {user?.isCoinbaseAuthorized ? (
        <TransactionGrid />
      ) : (
        <button onClick={handleConnectCoinbase}>Connect Coinbase</button>
      )}
    </div>
  );
};

export default Home;
