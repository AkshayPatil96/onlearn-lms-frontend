import { styles } from "@/app/styles/style";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import {
  useUpdateAvatarMutation,
  useUpdateProfileMutation,
} from "@/redux/features/user/userApi";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";
import avatarDefault from "@/public/assets/images/avatar.png";

type Props = {
  user: any;
  avatar: string;
};

const ProfileInfo: React.FC<Props> = ({ user, avatar }) => {
  const [name, setName] = useState("");

  const [loadUser, setLoadUser] = useState(false);

  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();

  const [
    updateProfile,
    {
      isSuccess: isUpdateSuccess,
      error: updateError,
      isLoading: isUpdateLoading,
    },
  ] = useUpdateProfileMutation();

  const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

  useEffect(() => {
    if (user) {
      setName(user?.name);
    }
  }, [user]);

  const imageUploader = async (e: any) => {
    console.log("====>");
    var file = e.target.files[0];
    let url = URL.createObjectURL(e.target.files[0]);
    // const formData = new FormData();
    // formData.append("image", file);
    // console.log("formData: ", formData);
    await updateAvatar({ avatar: url });

    // fileReader.onload = () => {
    //   if (fileReader.readyState === 2) {
    //   }
    // };
  };

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      setLoadUser(true);
    }
    if (error) {
      console.log(error);
    }
  }, [isSuccess, error, isUpdateSuccess]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await updateProfile({ name });
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Profile updated successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        toast.error("An error occured: ", error as any);
      }
    }
  }, [isUpdateSuccess, error]);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={
              user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
            }
            alt=""
            width={120}
            height={120}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageUploader}
            accept="image/png,image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera
                size={20}
                className="z-1"
              />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2">Full Name</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className="block pb-2">Email Address</label>
              <input
                type="text"
                readOnly
                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                required
                value={user?.email}
              />
            </div>
            <button
              className={`w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer hover:bg-[#37a39a] hover:text-white transition-all duration-300`}
              type="submit"
            >
              {isUpdateLoading ? (
                <CircularProgress
                  size={20}
                  color="inherit"
                  className="text-white"
                />
              ) : (
                "Update"
              )}
            </button>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default ProfileInfo;
