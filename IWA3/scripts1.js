// scripts.js

import company from './configaration';
import year from './configaration';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;