import React from "react";

export default function Accounts({data}) {
    return (
        <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {data._id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {data.client}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {data.solde}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
                className="text-green-500 hover:text-green-700"
                href="#"
            >
                {data.createdAt}
            </a>
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