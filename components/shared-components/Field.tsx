import SoccerLineUp from "react-soccer-lineup";
import Image from "next/image";
 import field_picImg from "../../public/assets/field_pic.jpg";
const Field = () => {
  return (
    <div className=" mt-20 absolute right-6  ">
          <Image src={field_picImg} alt='/' height={600} width={900} />
    </div>
  );
};

export default Field;
