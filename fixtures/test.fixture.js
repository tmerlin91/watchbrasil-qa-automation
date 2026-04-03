import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { searchMovie } from '../services/tmdb.service';

export const test = base.extend({
  home: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },

  api: async ({}, use) => {
    await use({
      searchMovie
    });
  }
});

export const expect = base.expect;