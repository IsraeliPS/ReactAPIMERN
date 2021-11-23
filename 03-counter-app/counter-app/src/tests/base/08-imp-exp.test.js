import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe retornar un heroe por id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefine si heroe no existe ", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los heroes de DC ", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    const newHeroeData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroe).toEqual(newHeroeData);
  });

  test("Debe retornar un arreglo con los heroes de Marvel ", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    const newHeroeData = (owner) =>
      heroes.filter((heroe) => heroe.owner === owner);

    expect(heroe.length).toEqual(2);
  });
});
