const bookList = document.querySelector('[data-list-items]');
const fragment = document.createDocumentFragment();
let startIndex = 0;
let endIndex = 36;

const extracted = books.slice(startIndex, endIndex);

for (let i = 0; i < extracted.length; i++) {
  const sneakPeak = document.createElement('dl');
  sneakPeak.className = 'preview';
  sneakPeak.dataset.id = books[i].id;
  sneakPeak.dataset.title = books[i].title;
  sneakPeak.dataset.image = books[i].image;
  sneakPeak.dataset.subtitle = `${authors[books[i].author]} (${(new Date(books[i].published)).getFullYear()})`;
  sneakPeak.dataset.description = books[i].description;
  sneakPeak.dataset.genre = books[i].genres;

  sneakPeak.innerHTML = /html/`
    <div>
      <image class='preview__image' src="${books[i].image}" alt="no picture available" />
    </div>
    <div class='preview__info'>
      <dt class='preview__title'>${books[i].title}</dt>
      <dt class='preview__author'> By ${authors[books[i].author]}</dt>
    </div>`;

  fragment.appendChild(sneakPeak);
}

bookList.appendChild(fragment);

c// Get the theme select element and the root element
const themeSelect = document.querySelector('[data-settings-theme]');
//const root = document.documentElement;
// Define the color values for the day and night themes
const themeMode = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  }
}
 const form = document.getElementById('settings');
 //const themeSelect = document.querySelector('[data-settings-theme]');
 form.addEventListener('submit', (event) => {
   event.preventDefault();
   const theme = themeSelect.value;
   document.documentElement.style.setProperty('--color-dark', themeMode[theme].dark);
   document.documentElement.style.setProperty('--color-light', themeMode[theme].light);
 });
 // Initialize theme based on user's OS theme preference
 const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const initialTheme = prefersDarkMode ? 'night' : 'day';
 document.documentElement.style.setProperty('--color-dark', themeMode[initialTheme].dark);
 document.documentElement.style.setProperty('--color-light', themeMode[initialTheme].light)

 
const selectAuthor = document.querySelector("[data-search-authors]");
Object.keys(authors).forEach((authorId) => {
  const element = document.createElement('option');
  element.value = authorId;
  element.textContent = authors[authorId];
  selectAuthor.appendChild(element);
});