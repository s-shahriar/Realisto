import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user, setLoading, updateUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    document.title = "Update Profile - Realisto";
  }, []);

  const { displayName, photoURL, emailVerified, phoneNumber } = user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoURL } = data;
    const userInfo = {
      displayName: name,
      photoURL: photoURL === "" ? null : photoURL,
    };
    updateUser(userInfo).then((result) => {
      toast.success("Profile Updated");
      setLoading(false);
    });
  };

  return (
    <div className="my-8 w-full max-w-md p-8 space-y-3 rounded-xl bg-blue-50 text-gray-800 container mx-auto">
      <h1 className="text-2xl font-bold text-center">Update Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm relative">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            defaultValue={displayName}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.name && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm relative">
          <label htmlFor="photoURL" className="block text-gray-600">
            Photo URL
          </label>
          <input
            {...register("photoURL")}
            type="text"
            name="photoURL"
            id="photoURL"
            defaultValue={photoURL}
            placeholder="Enter URL of your avatar"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm relative">
          <label htmlFor="emailVerified" className="block text-gray-600">
            Email Verified
          </label>
          <input
            {...register("emailVerified")}
            type="text"
            name="emailVerified"
            id="emailVerified"
            defaultValue={emailVerified ? "Yes" : "No"}
            readOnly
            disabled
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-600 focus:border-violet-600 cursor-not-allowed"
          />
        </div>
        <div className="space-y-1 text-sm relative">
          <label htmlFor="phoneNumber" className="block text-gray-600">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={phoneNumber}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <button
          className="block w-full p-3 text-center rounded-sm text-gray-50 bg-slate-600"
          type="submit"
        >
          Update Profile
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 text-gray-600">
        <Link
          to={"/"}
          rel="noopener noreferrer"
          className="underline text-gray-800 ml-2"
        >
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default UpdateProfile;
