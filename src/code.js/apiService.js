
const authorization = '21902781-05f70a6abac1a4120ac7c9ed1';

function fetchPictures(image) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${image}&page=1&per_page=12&key=${authorization}`)
    .then(response => {
        return response.json();
    },
  ).catch(onError);
}

export default { fetchPictures };