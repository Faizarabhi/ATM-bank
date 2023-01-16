import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import Accounts from "./account/Accounts";
import Transaction from './transaction/Transactions'

export default function Home() {


    return (
        <>
        <div className="flex">
            <Layout/>
            <Accounts/>
            <Transaction/>
        </div>
        </>
    );
}
