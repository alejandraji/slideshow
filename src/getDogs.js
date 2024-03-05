const getDogs = () => {
  return fetch('https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json')
  .then((response) => response.json())
  .then((response) => {
    let images = [];
    const dogs = response.data.children;
    for (const dog of dogs) {
      const title = dog.data.title;
      const url = dog.data.preview?.images[0].resolutions[2].url;
      if (url) {
        images.push({ title: title, url: url.replaceAll("&amp;", "&") })
      }
    }
    console.log('images', images)
    return images;
    
  });
}

export default getDogs;
