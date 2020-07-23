export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";
  _imageBase = "https://starwars-visualguide.com/assets/img/";

  getRecource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getRecource("people");

    return res.results.map((item) => this._transformPerson(item));
  };

  getAllPlanet = async () => {
    const res = await this.getRecource("planets");

    return res.results.map((item) => this._transformPlanet(item));
  };

  getAllStarships = async () => {
    const res = await this.getRecource("starships");

    return res.results.map((item) => this._transformStarship(item));
  };

  getPerson = async (id) => {
    const res = await this.getRecource(`people/${id}`);

    return this._transformPerson(res);
  };

  getPlanet = async (id) => {
    const res = await this.getRecource(`planets/${id}`);

    return this._transformPlanet(res);
  };

  getStarship = async (id) => {
    const res = await this.getRecource(`starships/${id}`);

    return this._transformStarship(res);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}characters/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}planets/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}starships/${id}.jpg`;
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
}
