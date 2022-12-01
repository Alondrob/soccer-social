import { GiSoccerBall } from 'react-icons/gi';

const  Header = () => {
  return (
    <div className="flex justify-center  bg-black py-4">
      {/* ****** left side ********* */}
      <div className=" top-6">
        <button>
          <GiSoccerBall color="white" size={45} />
        </button>
      </div>
      {/* ****** Middle ********* */}
      <div className="justify-center text-white">
        <h1 className="flex justify-center text-3xl bold  font-extrabold ">
          {" "}
          Soccer-Social
        </h1>
        <h5> A place for people who love the game!</h5>
      </div>
    </div>
  );
}

export default Header