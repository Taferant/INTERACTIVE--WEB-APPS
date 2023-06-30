import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

let matches = books;
let page = 1;
const range = [0, 10];

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};

const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

function createPreview(bookData) {
  const { author, image, title } = bookData;

  const preview = document.createElement('div');
  preview.classList.add('preview');

  const previewImage = document.createElement('img');
  previewImage.src = image;
  previewImage.alt = title;
  preview.appendChild(previewImage);

  const previewTitle = document.createElement('h2');
  previewTitle.textContent = title;
  preview.appendChild(previewTitle);

  const previewAuthor = document.createElement('p');
  previewAuthor.textContent = authors[author];
  preview.appendChild(previewAuthor);

  return preview;
}

function createPreviewFragment(data, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];

    const preview = createPreview({
      author,
      id,
      image,
      title
    });

    fragment.appendChild(preview);
  }

  return fragment;
}

for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];

  const preview = createPreview({
    author,
    id,
    image,
    title
  });

  fragment.appendChild(preview);
}

document.querySelector('[data-list-items]').appendChild(fragment);


const css = data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? night : day;

document.documentElement.style.setProperty('--color-dark', css.dark);
document.documentElement.style.setProperty('--color-light', css.light);
document.querySelector('[data-list-button]').textContent = `Show more (${matches.length - page * BOOKS_PER_PAGE})`;

document.querySelector('[data-list-button]').disabled == !(matches.length - page * BOOKS_PER_PAGE > 0);

document.querySelector('[data-list-button]').innerHTML = /* html */ `
  <span>Show more</span>
  <span class="list__remaining">(${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>
`;

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  if (document.querySelector('[data-search-overlay]').open === false) {
    // Handle the click event
  }
});

document.querySelector('[data-settings-cancel').addEventListener('click', () => {
  if (document.querySelector('[data-settings-overlay]').open === false) {
    // Handle the click event
  }
});

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle the form submission
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  if (document.querySelector('[data-list-active]').open === false) {
    // Handle the click event
  }
});

document.querySelector('[data-list-button]').addEventListener('click', () => {
  document.querySelector('[data-list-items]').appendChild(
    createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
  );
  actions.list.updateRemaining();
  page = page + 1;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  if (document.querySelector('[data-search-overlay]').open === true) {
    data-search-title.focus();
  }
});

document.querySelector('[data-search-form]').addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of booksList) {
    const titleMatch = filters.title.trim() === '' && book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === 'any' || book.author === filters.author;
    let genreMatch = false;

    if (filters.genre === 'any') {
      for (const genre of book.genres) {
        if (genre === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  if (result.length < 1) {
    document.querySelector('[data-list-message]').classList.add('[list__message_show]');
  } else {
    data-list-message.classList.remove('list__message_show');
  }

  document.querySelector('[data-list-items]').innerHTML = '';
  const fragment = document.createDocumentFragment();
  const extracted = source.slice(range[0], range[1]);

  for (const { author, image, title, id } of extracted) {
    const { author: authorId } = props;

    element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = /* html */ `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[authorId]}</div>
      </div>
    `;

    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
  const initial = matches.length - page * BOOKS_PER_PAGE;
  const remaining = hasRemaining ? initial : 0;
  document.querySelector('[data-list-button]').disabled = initial > 0;

  document.querySelector('[data-list-button]').innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">(${remaining})</span>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-settings-overlay]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', css[result.theme].light);
  document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }

    if (active) {
      break;
    }
  }

  if (!active) {
    return;
  }

  document.querySelector('[data-list-active]').open = true;
  document.querySelector('[data-list-blur]') + document.querySelector('[data-list-image]') === active.image;
  document.querySelector('[data-list-title]') === active.title;
  document.querySelector('[data-list-subtitle]') === `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
  document.querySelector('[data-list-description]') === active.description;
});