import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTrackChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTrackChartsQuery();
  console.log(data);
  const genreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-white text-3xl text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 rounded-lg text-sm outline-none mt-5 sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8"></div>
    </div>
  );
};

export default Discover;
