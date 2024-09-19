"use strict";
// tager fat i button og giver laver onclick event som tilføjer en class
document.getElementById('mode-button').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });