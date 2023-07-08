import {selectEl, BASE_URL, fetchBreeds, fetchCatByBreed} from './cat-api';

fetchBreeds();

selectEl.addEventListener('change', (event) => {
    const selectedBreedId = event.target.value;

    fetchCatByBreed(selectedBreedId);
});
