import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/characters";
import leftArrow from "../assets/leftArrow.png";
import { Table, Loading, FavoriteIcon } from "../components";

const CharacterDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useCharacter(id as string);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="relative">
        <div className="flex items-center justify-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-56 h-auto rounded-full border-4 border-green-400"
          />
        </div>

        <div className="absolute top-0 left-0 p-2">
          <img
            src={leftArrow}
            alt="Back"
            className="text-blue-500 cursor-pointer"
            onClick={() => window.history.back()}
          />
        </div>

        <FavoriteIcon
          className="absolute top-0 right-0 p-2 cursor-pointer"
          id={data.id}
        />

        <Table
          items={[
            ["Name", data.name],
            ["Alternate Names", data.alternate_names.join(", ")],
            ["Species", data.species],
            ["Gender", data.gender],
            ["House", data.house],
            ["Date Of Birth", data.dateOfBirth],
            ["Wizard", data.wizard.toString()],
            ["Ancestry", data.ancestry],
            ["Eye Colour", data.eyeColour],
            ["Hair Colour", data.hairColour],
            ["Patronus", data.patronus],
            ["Hogwarts Student", data.hogwartsStudent.toString()],
            ["Hogwarts Staff", data.hogwartsStaff.toString()],
            ["Actor", data.actor],
            ["Alternate Actors", data.alternate_actors.join(", ")],
            ["Alive", data.alive.toString()],
          ]}
        />
      </div>
    </div>
  );
};

export default CharacterDetail;
