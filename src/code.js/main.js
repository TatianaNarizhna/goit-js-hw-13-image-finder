
import imgCard from '../templates/img-card.hbs';
import SearchIpiImages from "./apiService.js";
import LoadButton from "./load-more-btn.js";

const refs = {
    input:document.querySelector('#search-form'),
    galleryList:document.querySelector('.gallery-container'),
    // loadMoreBtm:document.querySelector('[data-action="load-more"]'),
}

const loadButton = new LoadButton({ 
    selector: '[data-action="load-more"]',
    hidden: true,
});

const searchIpiImages = new SearchIpiImages();


refs.input.addEventListener('submit', onSearchImg);
loadButton.refs.button.addEventListener('click', fetchImages);

function onSearchImg(e) {
    e.preventDefault();

    searchIpiImages.query = e.currentTarget.elements.query.value;
    const searchImgTrim = searchIpiImages.query.trim();

    // if (searchIpiImages.query === '') {
    //     clearImgMarkUp();
    // }

    loadButton.show();
    searchIpiImages.resetPage();
    clearImgMarkUp();
    fetchImages(); 
}

function fetchImages() {
    loadButton.disableBtn();
    searchIpiImages.fetchImgSearch().then(hits => {
        imagesMarkUp(hits);
        loadButton.enableBtn();
    });
}

function imagesMarkUp(hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', imgCard(hits))
}

function clearImgMarkUp() {
    refs.galleryList.innerHTML = '';
}


