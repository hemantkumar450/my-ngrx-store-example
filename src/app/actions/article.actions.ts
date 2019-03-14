import { Action } from '@ngrx/store';
import { Article } from '../models/article';

export const JAVA = 'Java';
export const ANGULAR = 'Angular';
export const MY_ARTICLES = 'Favorite_Articles';
export const ADD_ARTICLE = '[TUTORIAL] Add';
export const REMOVE_ARTICLE = '[TUTORIAL] Remove';

export class AddArticle implements Action {
  readonly type = ADD_ARTICLE
  constructor(public payload: Article[]) { }
}

export class RemoveArticle implements Action {
  readonly type = REMOVE_ARTICLE
  constructor(public payload: number) { }
}

export class JavaArticlesAction implements Action {
  readonly type = JAVA;
}

export class AngularArticlesAction implements Action {
  readonly type = ANGULAR;
}

export class FavoriteArticlesAction implements Action {
  readonly type = MY_ARTICLES;

  constructor(public payload: Article[]) { }
}

export type All = JavaArticlesAction | AngularArticlesAction | FavoriteArticlesAction | AddArticle | RemoveArticle; 
