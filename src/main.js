import { FILMS_AMOUNT, siteElements } from './const.js';
import UserProfileView from './view/user-profile-view.js';
import MainNavView from './view/main-nav-view.js';
import SortView from './view/sort-view.js';
import FilmsContainerView from './view/films-container-view';
import FilmThumbView from './view/film-thumb-view.js';
import ShowMoreButtonView from './view/show-more-button.js';

import { render } from './render.js';


render(new UserProfileView(), siteElements.header);
render(new MainNavView(), siteElements.main);
render(new SortView(), siteElements.main);
render(new FilmsContainerView(), siteElements.main);


const filmsList = siteElements.main.querySelector('.films-list')
const filmsListContainer = filmsList.querySelector('.films-list__container')

for (let i = 1; i <= FILMS_AMOUNT; i++) {
  render(new FilmThumbView(), filmsListContainer);
}

render(new ShowMoreButtonView(), filmsList);
