import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { JAVA_ARTICLES, ANGULAR_ARTICLES } from '../models/article';
import { ArticleState } from './app.states';

export const initialState: ArticleState = { articles: [{ id: 1, title: 'test', category: 'test' }] };

export function reducer(state: ArticleState = initialState, action: fromActions.All): ArticleState {
  switch (action.type) {
    case fromActions.JAVA: {
      return { articles: JAVA_ARTICLES };
    }
    case fromActions.ANGULAR: {
      return { articles: ANGULAR_ARTICLES };
    }
    case fromActions.MY_ARTICLES: {
      return { articles: action.payload };
    }
    case fromActions.ADD_ARTICLE: {
      state.articles = [...state.articles, ...action.payload]
      return { articles: state.articles };
    }
    case fromActions.REMOVE_ARTICLE: {
      return { articles: ANGULAR_ARTICLES };
    }
    default: {
      return state;
    }
  }
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
);
