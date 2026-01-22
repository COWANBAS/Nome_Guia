// ==UserScript==
// @name           Nome Guia
// @description    Altera o nome da guia
// @namespace      CowanGUIA
// @license        CowBas
// @version        GPL-3.0
// @author         Cowanbas
// @match          https://web.whatsapp.com/*
// @run-at         document-start
// ==/UserScript==

// Mude ou adicione no @match o site que deseja alterar o nome da guia

(function () {
  'use strict';

  // Altere o nome da guia aqui
  const NomeGuia = "MUDE AQUI";

  // Alterar o nome da guia para o valor de "NomeGuia"   
  const Wpp = () => {
    if (document.title !== NomeGuia) {
      document.title = NomeGuia;
    }
  };

  Wpp();
  const observer = new MutationObserver(() => {
    Wpp();
  });

  // Observar mudanças no título da guia
  const config = { subtree: true, childList: true, characterData: true };
  observer.observe(document.querySelector('head'), config);


})();
