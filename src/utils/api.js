const uri = "https://api.coincap.io/v2";

async function getCriptos(limit = 10) {
  const response = await fetch(`${uri}/assets?limit=${limit}`);
  const data = await response.json();
  return data;
}
async function getCripto(cripto) {
  const response = await fetch(`${uri}/assets/${cripto}`);
  const data = await response.json();
  return data;
}
async function getCriptoHistory(cripto) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const response = await fetch(
    `${uri}/assets/${cripto}/history?interval=h1&start=${start}&end=${end}`
  );
  const data = await response.json();
  return data;
}

export { getCriptos, getCripto, getCriptoHistory };
