const uri = "https://api.coincap.io/v2";

async function getCriptos(limit=10) {
  const response = await fetch(`${uri}/assets?limit=${limit}`);
  const data = await response.json();
  return data;
}

export { getCriptos };
