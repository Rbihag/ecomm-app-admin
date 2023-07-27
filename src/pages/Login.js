import React from 'react'
import CustomInput from '../components/CustomInput.js'

const Login = () => {
    return (
        <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <CustomInput
                    type="text"
                    label="Email Address"
                    id="email"
                    name="email"
                />
                <CustomInput
                    type="password"
                    label="Password"
                    id="pass"
                    name="password"
                />
            </div>
        </div>
    )
}

export default Login