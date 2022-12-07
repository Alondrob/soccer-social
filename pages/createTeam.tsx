import { formation } from "../utils/formation";
import Field from "../components/shared-components/Field";

const createTeam = () => {
  return (
    <div className=" ">
      <div className="flex justify-evenly">
        <div>
          <h4 className="mt-4 text-center">Country</h4>
          <select className="border-2 border-black rounded-xl  w-56 h-8 "></select>
        </div>
        <div>
          <h4 className="mt-4 text-center">Teams</h4>
          <select className="border-2 border-black rounded-xl  w-56 h-8 "></select>
        </div>
        <div>
          <h4 className="mt-4 text-center">Players</h4>
          <select className="border-2 border-black rounded-xl  w-56 h-8 "></select>
        </div>
        <div>
          <h4 className="mt-4 text-center">Formation</h4>
          <select className="border-2 border-black rounded-xl  w-56 h-8 ">
            {formation.map((item, key) => (
              <option className="text-center font-bold">{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className=" ">
        <Field />
      </div>
    </div>
  );
};

export default createTeam;
