const apiService = {
  baseURL: 'https://pixabay.com/api/',
  key: '19734316-10978fed4d6ca650a445cb4b9',
  searchQuery: '',
  page: 1,

  fetchImages() {
    return fetch(
      `${this.baseURL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

export default apiService;
