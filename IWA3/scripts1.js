// scripts.js

import * as company from './configaration.js';
import * as year from './configaration.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;