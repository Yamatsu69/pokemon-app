import React from "react";
import { WithRouter } from "../utils/Navigate";
import { useTitle } from "../utils/useTitle";

const Pokeinfo = ({ data }) => {
  useTitle("Pokemon Info");
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="flex flex-col md:flex-row lg:flex-row">
            <h1>{data.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
              srcset=""
            />
            <div className="abilities">
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                return (
                  <>
                    <h3>
                      {poke.stat.name} : {poke.base_stat}
                    </h3>
                  </>
                );
              })}
            </div>
            <div>
              <h3>Weight : {data.weight}</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WithRouter(Pokeinfo);
