
export default class SearchApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;

  }

  fetchImgSearch() {
    const key = '21902781-05f70a6abac1a4120ac7c9ed1';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;

    fetch(url)
    .then(r => r.json())
    .then(pageNum => {
     this.incrementPage();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  };

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};


