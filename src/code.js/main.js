
import SearchIpiImages from "./apiService.js";
import imgCard from '../templates/img-card.hbs';

const refs = {
    input:document.querySelector('#search-form'),
    galleryList:document.querySelector('.gallery-container'),
    loadMoreBtm:document.querySelector('[data-action="load-more"]'),
}

const searchIpiImages = new SearchIpiImages();

refs.input.addEventListener('submit', onInputImg);
refs.loadMoreBtm.addEventListener('click', onLoadMore);


function onInputImg(e) {
    e.preventDefault();

    searchIpiImages.query = e.currentTarget.elements.query.value;
    searchIpiImages.resetPage();
    searchIpiImages.fetchImgSearch();
    
}

function onLoadMore() {
    
    searchIpiImages.fetchImgSearch();
}


