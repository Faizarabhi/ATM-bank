import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import Accounts from "../../pages/client/account/Accounts";
import Transaction from './transaction/Transactions'
import {useLocation } from 'react-router-dom';

export default function Home() {
    
  const location = useLocation();
    const switche=()=>{
        switch(location.pathname){
          case  "/Home" : return <></>;
            case "/transaction": return <div className="flex bg-gray-200 h-screen"><Layout/> <Transaction/></div>;
            case "/Account": return <> <Layout/> <Accounts/></>;
            // default: return <Error/>
        }
      }

    return (
        <>
        <div className="flex bg-gray-200 h-screen">
            <Layout/>
            {switche}
        </div>
        </>
    );
}
