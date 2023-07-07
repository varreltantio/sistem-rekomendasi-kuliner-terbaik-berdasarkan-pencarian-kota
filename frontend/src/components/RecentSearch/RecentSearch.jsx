import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { RecentSearchContainer } from "./RecentSearchElements";

const RecentSearch = () => {
  return (
    <>
      <RecentSearchContainer>
        <p>Recent Searches</p>
        <Stack direction="horizontal" gap={5}>
          <Marquee>
            {/* Loop Recent Searches */}
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Jakarta</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Surabaya</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Yogyakarta</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Jember</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Malang</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Bandung</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Bali</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Papua</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Bogor</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Maluku</div>
            </Link>
            <Link
              to="/#"
              style={{
                textDecoration: "underline black",
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "15px",
              }}
            >
              <div className="p-2">Aceh</div>
            </Link>
            {/* End Loop Recent Searches */}
          </Marquee>
        </Stack>
      </RecentSearchContainer>
    </>
  );
};

export default RecentSearch;
