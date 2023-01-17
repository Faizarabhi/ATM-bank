import React from "react";

export default function Transaction({transaction}) {
    console.log(transaction)
    return (
        <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {transaction._id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {transaction.toAccount}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {transaction.montant}
        </td>
      
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
                className="text-red-500 hover:text-red-700"
                href="#"
            >
                Delete
            </a>
        </td>
    </tr>
    );
}