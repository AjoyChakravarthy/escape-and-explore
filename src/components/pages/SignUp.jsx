
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function SignUp() {

   return (
      <div className=" h-[100vh] flex items-center justify-center mx-5  ">
         <div className="w-[650px] flex justify-center md:justify-between  bg-cyan-100 rounded-3xl mt-[100px] md:mt-0">
            <div className="md:pl-5 pt-5">
               <h1 className="text-lg uppercase font-bold mb-5">
                  Start your journey with us
               </h1>
               <form >
                  <label className="text-sm">Username:</label>
                  <br />
                  <input
                     type="text"
                     id="username"
                     name="username"
                     required
                     autoComplete="off"
                     className="bg-white mb-5 w-full"
                  />
                  <br />
                  <label className="text-sm">Email:</label>
                  <br />
                  <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     autoComplete="off"
                     className="bg-white mb-5 w-full"
                  />
                  <br />
                  <label className="text-sm">Password:</label>
                  <br />
                  <input
                     type="password"
                     id="password"
                     name="password"
                     required
                     autoComplete="off"
                     className="bg-white mb-10 w-full"
                  />
                  <br />
                  <button className="mb-3 w-full">Sign UP</button>

               </form>
               <div>
                  <p className="text-base text-slate-600 mb-5">
                     Already have an account ?
                     <span className="text-lg  text-cyan-600 hover:text-cyan-800 font-semibold cursor-pointer pl-2">
                        <Link to="/login">Log In</Link>
                     </span>
                  </p>
               </div>
            </div>
            <div className="w-[325px] h-auto hidden md:inline ">
               <img
                  src={assets.sign_img}
                  alt="Mountain "
                  className="object-cover w-full h-full rounded-tr-3xl rounded-br-3xl mb-0"
               />
            </div>
         </div>
      </div>
   );
}

export default SignUp;
