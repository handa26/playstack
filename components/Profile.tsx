import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="flex gap-3">
        <Image
          src={"/images/default-profile.jpg"}
          className="rounded-md"
          alt=""
          width={100}
          height={100}
        />
        <h3 className="text-2xl">John Doe</h3>
      </div>
    </>
  );
};

export default Profile;
