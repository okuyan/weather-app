export default async (zip) => {
  const apiKey = 'e25a8637f0139232961ce804e91e49a6';
  const endpoint = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=${apiKey}&zip=${zip},us`;
  const response = await fetch(endpoint);
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json);
}
