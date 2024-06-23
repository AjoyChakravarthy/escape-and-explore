
import List from "./List";

function ProfilePage() {

   return (
      <div className=" flex justify-between xl:max-w-[1280px] mx-auto overflow-hidden">
         <div className="flex flex-col gap-5 mx-3 w-[70%] h-[100vh] pt-[110px]">
            <div className="flex justify-between items-center ">
               <h1 className="text-2xl">User Information</h1>
               <button className="w-[140px] px-1 rounded-lg">
                  Update Profile
               </button>
            </div>
            <div className="flex flex-col gap-3">
               <span className="flex items-center gap-3 text-sm">
                  Avatar:{" "}
                  <img
                     src="https://lh3.googleusercontent.com/a/ACg8ocIXqhi5iegpmweL3sbJacp1hDXqg-NNU4UDEPo6DZWW7VhP4MnMEQ=s476-c-no"
                     alt="User Image"
                     className="w-[40px] h-[40px] object-cover rounded-full"
                  />
               </span>
               <span className="text-sm">
                  Username: <b>Ajoy</b>
               </span>
               <span className="text-sm">
                  Email: <b>Ajoy@gmail.com</b>
               </span>
               <button
                  className="w-[100px] text-sm rounded-lg px-auto"
               >
                  Logout
               </button>
            </div>
            <div className="flex justify-between items-center">
               <h1 className="text-2xl">My List</h1>
               <button className="w-[140px] px-1 rounded-lg">View List</button>
            </div>
            <div className=" overflow-y-scroll py-5">
               <List />
            </div>
         </div>
         <div className="flex-1 mx-2 bg-cyan-200 h-[100vh] pt-[110px]">
            Right container
         </div>
      </div>
   );
}

export default ProfilePage;
