//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Questions: {
      name: 'Questions',
      fields: {
        questionId: 'Question Id',
        content: 'Content',
        category: 'Category',
        difficultyLevel: 'Difficulty Level',
        dateCreated: 'Date Created',
        id: 'id',
      },
    },
    Answers: {
      name: 'Answers',
      fields: {
        answerId: 'Answer Id',
        questionId: 'Question Id',
        content: 'Content',
        explanation: 'Explanation',
        dateCreated: 'Date Created',
        id: 'id',
      },
    },
    Categories: {
      name: 'Categories',
      fields: {
        categoryId: 'Category Id',
        name: 'Name',
        description: 'Description',
        id: 'id',
      },
    },
    DifficultyLevels: {
      name: 'Difficulty Levels',
      fields: {
        difficultyId: 'Difficulty Id',
        name: 'Name',
        description: 'Description',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Questions: {
      name: 'Questions (fr)',
      fields: {
        questionId: 'Question Id (fr)',
        content: 'Content (fr)',
        category: 'Category (fr)',
        difficultyLevel: 'Difficulty Level (fr)',
        dateCreated: 'Date Created (fr)',
        id: 'id',
      },
    },
    Answers: {
      name: 'Answers (fr)',
      fields: {
        answerId: 'Answer Id (fr)',
        questionId: 'Question Id (fr)',
        content: 'Content (fr)',
        explanation: 'Explanation (fr)',
        dateCreated: 'Date Created (fr)',
        id: 'id',
      },
    },
    Categories: {
      name: 'Categories (fr)',
      fields: {
        categoryId: 'Category Id (fr)',
        name: 'Name (fr)',
        description: 'Description (fr)',
        id: 'id',
      },
    },
    DifficultyLevels: {
      name: 'Difficulty Levels (fr)',
      fields: {
        difficultyId: 'Difficulty Id (fr)',
        name: 'Name (fr)',
        description: 'Description (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);