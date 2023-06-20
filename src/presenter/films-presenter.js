import {render} from '../render.js';
import { FILMS_AMOUNT } from '../const.js';

import MainNavView from '../view/main-nav-view.js';
import SortView from '../view/sort-view.js';
import FilmsContainerView from '../view/films-container-view';
import FilmThumbView from '../view/film-thumb-view.js';
import ShowMoreButtonView from '../view/show-more-button.js';
import FilmDetailsView from '../view/film-details-view.js';

export default class FilmsPresenter {
  init = (mainElement)=> {
    render(new MainNavView(), mainElement);
    render(new SortView(), mainElement);

    render(new FilmsContainerView(), mainElement);

    const filmsListContainer = mainElement.querySelector('.films-list__container');

    for (let i = 0; i < FILMS_AMOUNT; i++) {
      render(new FilmThumbView(), filmsListContainer);
    }

    render(new ShowMoreButtonView(), mainElement);

  };

}
