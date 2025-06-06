import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb/movies";
import PersonCard from "../atoms/PersonCard";

interface Person {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface MovieInfoBodyProps {
  id: string | undefined;
  type: string | undefined;
}

const PrimaryContentSection: React.FC<MovieInfoBodyProps> = ({ id, type }) => {
  const [personList, setPersonList] = useState<Person[]>([]);

  const getPerson = async () => {
    try {
      const res = await getMovieCredits(type, id);
      setPersonList(res.data.credits.cast);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPerson();
  }, [id]);

  return (
    <div>
      <div className="flex gap-4 py-2">
        <h2 className="text-lg font-bold">Top Billed Cast</h2>
      </div>

      <ul className="flex gap-5 overflow-x-auto overflow-y-hidden pb-2 w-full max-w-screen scroll-smooth ">
        {personList &&
          personList.map((data) => (
            <li
              key={data.id}
              className="w-[140px] sm:w-[140px] md:w-[160px] h-[15rem] flex-shrink-0 p-0 m-0"
            >
              <PersonCard
                profilePath={data.profile_path}
                name={data.name}
                character={data.character}
              />
            </li>
          ))}
      </ul>

      <p className="py-4 font-medium">Full Cast & Crew</p>
      <hr className="border-gray-300" />
    </div>
  );
};

export default PrimaryContentSection;
