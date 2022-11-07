// ==UserScript==
// @name         GitHub Auto Member View
// @version      0.1
// @description  Automatically loads a GitHub organisation pages with member view
// @author       zFl4wless
// @match        https://github.com/*
// ==/UserScript==


(function() {
    'use strict';

    if (window.location.search == '?view_as=member') {
        return;
    }

    const repoAdmin = document.querySelector(`a[href='${'/organizations' + window.location.pathname + '/settings/profile'}']`);
    if (repoAdmin) {
        window.location.href = window.location.href + '?view_as=member';
    }
})();
