import Image from 'next/image';
const ProfileImage = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[12/16] rounded-lg">
      <Image src={"/images/chinonso.png"} className='object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
        fill priority alt="about me picture" />
    </div>
  );
};

export default ProfileImage;


