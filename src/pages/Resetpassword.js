import React from 'react'
import CustomInput from '../components/CustomInput.js'

const Resetpassword = () => {
    return (
        <div className="py-5" style={{ background: "#FFDADA", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Forgot Password</h3>
                <p className="text-center">Please Enter Your New Password</p>
                <form action=''>
                    <CustomInput
                        type="password"
                        label="New Password"
                        id="pass"
                    />
                    <CustomInput
                        type="password"
                        label="Confirm Password"
                        id="confirmpass"
                    />
                    <button
                        className="border-0 px-3 py-2 text-dark fw-bold w-100"
                        style={{ background: "#FFDADA" }}
                        type="submit"
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Resetpassword