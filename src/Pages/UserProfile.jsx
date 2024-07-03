import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserProfile = () => {
  const {user} = useContext(AuthContext)

  useEffect(() => {
    document.title = "User - Realisto";
  }, []);


  let { displayName, email, photoURL } = user;
  

  if(email === null){
    email = "Not Found";
  }



  return (<div className="container mx-auto my-10">
  <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>
  <div className="max-w-lg w-full bg-blue-50 shadow-lg rounded-lg overflow-hidden mx-auto">
    <div className="sm:flex sm:items-center px-6 py-4">
      {photoURL ? (
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
          src={photoURL}
          alt="User"
        />
      ) : (
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
          src="https://i.ibb.co/XS4d8LZ/image.png"
          alt=""
        />
      )}
      <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        {displayName ? (
          <p className="text-xl font-semibold text-gray-800">
            Name: <span className="font-normal">{displayName}</span>
          </p>
        ) : (
          <p className="text-red-500 font-semibold">
            Please update your Name
          </p>
        )}
        <p className="text-xl font-semibold text-gray-800">
          Email: <span className="font-normal">{email}</span>
        </p>
      </div>
    </div>
    <div className="text-center pb-4">
    <Link to="/update">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Update Profile
        </button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default UserProfile;
