import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Login = () => {
   const [inputs, setInputs] = useState({});
   const [mobile, setMobile] = useState("");

   const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setMobile(value);

      setInputs((values) => ({ ...values, [name]: value }));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);

      const user = { ...inputs, verify: true };
        console.log("user aya hai => ", user);
      //   clear the inputs

      localStorage.setItem("user", JSON.stringify(user));
      setMobile("");

      
   };

   return (
      <div>
         <Navbar />
         <form action="" onSubmit={handleSubmit}>
            <label htmlFor="Mobile">
               Mobile :
               <input
                  type="Number"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
               />
            </label>
            <div>
               <input type="checkbox" />
               <p>Agree Terms & Condition</p>
            </div>

            <input type="submit" />
         </form>
      </div>
   );
};

export default Login;
