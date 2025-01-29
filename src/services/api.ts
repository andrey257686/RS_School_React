import axios from 'axios';

const BASE_URL = 'https://stapi.co/api/v1/rest';

export const fetchAnimalList = async (searchTerm: string) => {
  const response = await axios.post(
    `${BASE_URL}/animal/search`,
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
  return response.data.animals;
};
