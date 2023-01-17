import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterSchema } from '../../../Validation/Register'
import { AuthContext } from '../../../context/auth/index';
export default function Register() {
    const { register } = useContext(AuthContext)

    const values = {
        username: '',
        email: '',
        password: ''
    };
    const onSubmit = (values) => {
        register(values)
    };
    return (
        <Formik initialValues={values} validationSchema={RegisterSchema} onSubmit={onSubmit}>
            {(formik) => (
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                            Sign in
                        </h1>
                        <Form className="mt-6">
                            <div className="mb-2">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    User Name
                                </label>
                                <Field type="text" name="username" placeholder="User name"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    <ErrorMessage name="username" />
                                </span>
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email" name='email' placeholder='email'
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    <ErrorMessage name="email" />
                                </span>
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <Field type="password" name='password' placeholder='password'
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    <ErrorMessage name="password" />
                                </span>
                            </div>
                            <a
                                href="/Error"
                                className="text-xs text-purple-600 hover:underline"
                            >
                                Forget Password?
                            </a>
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    Register
                                </button>
                            </div>
                        </Form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Don't have an account?{" "}
                            <a
                                href="/Login"
                                className="font-medium text-purple-600 hover:underline"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </Formik>
    );
}