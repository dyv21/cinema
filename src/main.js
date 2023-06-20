import { render } from './render.js';

import { siteElements } from './const.js';
import UserProfileView from './view/user-profile-view.js';
import FilmsPresenter from './presenter/films-presenter.js';

const filmPresenter = new FilmsPresenter();

render(new UserProfileView(), siteElements.header);

filmPresenter.init(siteElements.main);


