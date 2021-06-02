
import ApiImages from "./apiService.js";
import imgCard from '../templates/img-card.hbs';

const refs = {
    input:document.querySelector('.input-search'),
    galleryList:document.querySelector('.gallery'),
}

refs.input.addEventListener('input', onInputImg);

function onInputImg(e) {
    let searchQuery = e.target.elements.query.value;
    // const imgFindTrim = searchQuery.trim();
}