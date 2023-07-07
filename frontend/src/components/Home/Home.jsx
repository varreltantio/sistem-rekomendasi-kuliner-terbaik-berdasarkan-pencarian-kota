import { HeroContent, HeroH1 } from "./HomeElements";
import Stack from "react-bootstrap/Stack";
import RecentSearch from "../RecentSearch/RecentSearch";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <Stack direction="horizontal" className="col-md-5 mx-auto" gap={2}>
        <HeroContent>
          <HeroH1>KULINER.ID</HeroH1>
          <p className="text-center" style={{ color: "#fff" }}>
            Pick A Place!
          </p>
          <Search />
        </HeroContent>
      </Stack>
      <RecentSearch />
    </>
  );
};

export default Home;
