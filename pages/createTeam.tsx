import { formation } from "../utils/formation";
import Field from "../components/shared-components/Field";
const createTeam = () => {
  return (
    <div className="flex h-96 ">
      <div className="ml-4 w-1/5">
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
        Side 1
      </div>
      <div className="mt-10 mr-4 ml-10 w-4/5 ">
        <Field />
      </div>
    </div>
  );
};

export default createTeam;
