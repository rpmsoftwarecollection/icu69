// ==UserScript==
// @name         Replace Text
// @namespace    https://github.com/rpmsoftwarecollection/icu69
// @version      1.0
// @description  Replaces text with other text.
// @author       andykimpe

// @match        https://github.com/*
// @noframes

// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js

// @licence      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==
const wordsToReplace = {
  // old: new
  "Add file": "Ajouter fichier",
  // add more here!
};

document.querySelectorAll('*').forEach((el) => {
  Object.entries(wordsToReplace).forEach((old, new) => {
    if (el.innerHTML.indexOf(` ${old} `) >= 0) {
      el.innerHTML = el.innerHTML.replace(` ${old} `, ` ${new} `);
    }
  });
});
