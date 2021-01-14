const fetchAlbums = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  const json = await res.json(res)
  console.log(json);
}

fetchAlbums();