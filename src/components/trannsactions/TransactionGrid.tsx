import React from "react";
import { useGetPrimaryAccountTransactionsQuery } from "../../api/coinbase.api";

type Props = {};

const TransactionGrid = (props: Props) => {
  const { data } = useGetPrimaryAccountTransactionsQuery(undefined);
  console.log(data);

  return (
    <table className="w-full">
      <thead className="bg-gray-400 border-b-2 border-gray-300">
        <tr>
          <th className="theader">Date</th>
          <th className="theader">Type</th>
          <th className="theader">Amount(Crypto)</th>
          <th className="theader">Amount(Native)</th>
          <th className="theader">Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.data &&
          data.data.map((transaction: any) => (
            <tr key={transaction.key} className="bg-gray-300">
              <td>{transaction.created_at}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount.amount}</td>
              <td>{transaction.native_amount.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionGrid;
