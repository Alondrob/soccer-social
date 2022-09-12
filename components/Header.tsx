import React from 'react'
import { GiSoccerBall } from 'react-icons/gi';

function Header() {
  return (
    <div className="flex justify-center  bg-black py-4">
      <div className="absolute left-2 top-6">
        <GiSoccerBall color="white" size={45} />
      </div>
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