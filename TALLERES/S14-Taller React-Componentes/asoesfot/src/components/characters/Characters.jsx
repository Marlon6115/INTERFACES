import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => resolve(setCharacters(data.results)))
        .catch((error) => console.error("Error:", error));
    }, 2000);
  });
  const handleCallPromise = async () => {
    return await myPromise;
  };
  useEffect(() => {
    handleCallPromise();
  }, []);
  if (characters.length === 0) {
    return <p>Cargando...</p>;
  }
  return (
    <section className="ocio__card-container">
      {characters.map((character) => (
        <div className="ocio__card" key={character.id}>
          <img
            className="ocio__card-image"
            src={character.image}
            alt={character.name}
          />
          <h3 className="ocio__card-title">{character.name}</h3>
          <p className="ocio__card-description">Especie: {character.species}</p>
        </div>
      ))}
      <button onClick={handleCallPromise}>LLAMAR PROMESA</button>
    </section>
  );
};

export default Characters;
