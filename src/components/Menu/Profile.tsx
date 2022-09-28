import profileIcon from '../../images/image-avatar.png';

const Profile = () => {
  return (
    <img
      src={profileIcon}
      className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] flex-1 rounded-full border-2 border-orange hover:cursor-pointer"
    />
  );
};

export default Profile;
