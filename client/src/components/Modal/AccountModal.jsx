import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AccountContext } from '../../context/account/index';


export default function AccountModal({ account }) {
  const [showModal, setShowModal] = React.useState(false);
  const { deleteAccount, createAccount } = useContext(AccountContext)
  const value = {
    solde: ''
  }


  const handleDelete = () => {
    deleteAccount(account._id)
  }
  const addAccount = (value) => {
    createAccount(localStorage.getItem('client_id'),value)
    setShowModal(false)
  }

  return (
    <div className="flex flex-col justify-center">
      {Object.keys(account).length === 0 ? (
        <button
          className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Account
        </button>
      ) : (
        <button
          className="bg-red-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      )}
      {showModal ? (
        <>
          <Formik
          onSubmit={addAccount}
          initialValues={value}
          >
            {(formik) => (
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <Form className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add Acount
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="my-4 mx-24">
                      <label
                        htmlFor="solde"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Solde Initial
                      </label>
                      <Field
                        type="number" name='solde' placeholder='solde'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {/* <ErrorMessage name="solde" /> */}
                      </span>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Add Account
                      </button>
                    </div>
                  </div>
                </Form>
              </div>)}
            </Formik>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}