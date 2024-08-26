import { useEffect } from "react";
import CharactersList from "./Components/CharactersList";
import LogoSearch from "./Components/LogoSearch";
import { useState } from "react";
import CharacterStats from "./Pages/CharacterStats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// debonce

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  async function getAllCharacters(search) {
    try {
      const endpoint = search
        ? `characters?name=${search}`
        : `characters?limit=${showMore ? `500` : `17`}`;
      setLoading(true);
      const res = await fetch(`https://dragonball-api.com/api/${endpoint}`);
      const data = await res.json();
      setCharacters(search ? data : data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(
    function () {
      const timeOut = setTimeout(() => {
        getAllCharacters(search);
      }, [300]);

      return () => {
        clearTimeout(timeOut);
      };
    },
    [search, showMore]
  );

  return (
    <>
      <BrowserRouter>
        <LogoSearch setSearch={setSearch} search={search} />
        <Routes>
          <Route
            path="/"
            element={
              <CharactersList
                characters={characters}
                isLoading={loading}
                showMore={showMore}
                setShowMore={setShowMore}
              />
            }
          />
          <Route path="Characters/:id" element={<CharacterStats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
