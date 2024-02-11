export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '9fff1c1e25msh2a78b08e7583016p1bbc0cjsnab036a7c33a5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers }
  );

  const result = await response.json();
  return result;
}
