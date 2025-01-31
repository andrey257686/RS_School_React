import axios from 'axios';

const BASE_URL = 'https://stapi.co/api/v1/rest';

const baseSearchRequest = async (searchTerm: string, endpoint: string) => {
  const response = await axios.post(
    `${BASE_URL}/${endpoint}/search`,
    {
      name: searchTerm,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
    }
  );
  return response.data;
};

export const fetchAnimalList = async (searchTerm: string) => {
  const responseData = await baseSearchRequest(searchTerm, 'animal');
  return responseData.animals;
};

export const fetchCharacterList = async (searchTerm: string) => {
  const responseData = await baseSearchRequest(searchTerm, 'character');
  return responseData.characters;
};

export const fetchSpacecraftList = async (searchTerm: string) => {
  const responseData = await baseSearchRequest(searchTerm, 'spacecraft');
  return responseData.spacecrafts;
};
