import React, { useState } from "react";
import Otp from "../component/Otp/Otp";
import Login from "../component/Login/Login";

// const Login = (props) => {
//    const [inputs, setInputs] = useState({});
//    const [mobile, setMobile] = useState("");

//    console.log(props.setUser);

//    const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;

//       setMobile(value);

//       setInputs((values) => ({ ...values, [name]: value }));
//    };

//    const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(inputs);

//       //   setUser((values) => ({ ...values, ...inputs }));
//       console.log("user aya hai => ", setUser);
//       //   clear the inputs
//       setMobile("");
//    };

//    return (
//       <div>
//          {/* <Navbar /> */}
//          <form action="" onSubmit={handleSubmit}>
//             <label htmlFor="Mobile">
//                Mobile :
//                <input
//                   type="text"
//                   name="mobile"
//                   value={mobile}
//                   onChange={handleChange}
//                />
//             </label>
//             <div>
//                <input type="checkbox" />
//                <p>Agree Terms & Condition</p>
//             </div>

//             <input type="submit" />
//          </form>
//       </div>
//    );
// };

const Register = () => {
   return <Login />;
};

export default Register;
