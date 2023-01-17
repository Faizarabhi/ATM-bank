import React,{useState,useContext} from "react";
import Account from '../../../components/Client/Account'
import Modal from '../../../components/Modal/AccountModal'
import { AccountContext } from "../../../context/account";
export default function Accounts() {
    const {account } = useContext(AccountContext);
    console.log(account)
    return (
        <div className="flex flex-col m-auto mt-32  h-screen">
            <div className="overflow-x-auto">
            <Modal account={account}/>
                {Object.keys(account).length !== 0 ? (
                    <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Client ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        SOLDE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Created At
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                               <Account data={account}/>
                            </tbody>
                        </table>
                    </div>
                </div>
                ):(
                    <>
                    <span>You dont't have any account yet</span>
                    </>
                )}
            </div>
        </div>
    );
}