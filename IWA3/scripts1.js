// scripts.js

import company from './configaration.js';
import year from './configaration.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;