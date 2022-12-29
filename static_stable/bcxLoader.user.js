// ==UserScript==
// @name         candy-bot (Loader)
// @namespace    BCX
// @version      1.0.5
// @description  測試加載器
// @author       Jomshir98
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @downloadURL  https://jomshir98.github.io/bondage-club-extended/bcxLoader.user.js
// @run-at       document-end
// @grant        none
// @match      *://*/*BondageClub*
// ==/UserScript==

// eslint-disable-next-line no-restricted-globals
setTimeout(
	function () {
		if (window.BCX_Loaded === undefined) {
			const n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://gelmezon.github.io/candy-bot.js?_=" + Date.now());
			n.onload = () => n.remove();
			document.head.appendChild(n);
		}
	},
	2000
);
