// ==UserScript==
// @name           UmaParadaAe
// @description    ZAPZAP
// @spacename      CowanZAP
// @license         CowBas
// @version        1.0
// @author         Cowanbas
// @match          https://web.whatsapp.com/*
// @run-at         document-start
// ==/UserScript==

(function () {
  'use strict';

  // ZAPZAP
  const Ozapzap = "MUDA AQUI";

  const Frango = () => {
    if (document.title !== Ozapzap) {
      document.title = Ozapzap;
    }
  };

  Frango();

  const observer = new MutationObserver(() => {
    Frango();
  });

  const config = { subtree: true, childList: true, characterData: true };
  observer.observe(document.querySelector('head'), config);

})();
