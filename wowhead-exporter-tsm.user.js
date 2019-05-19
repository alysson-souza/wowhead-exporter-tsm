// ==UserScript==
// @name         Wowhead Item Id Exporter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Exports item ids from WoWDB or Wowhead. For TSM.
// @author       Alysson Souza e Silva
// @match        https://www.wowhead.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ($ === void 0) {
        return;
    }

    $(function() {
        let items = window.listviewitems || window.outfits || window.transmogSets;

        function wowheadExporter() {
            let exportedItems = items.map(i => 'i:' + i.id).join(',');
            window.prompt(`${exportedItems.length} itens:`, exportedItems);
        }

        if (document.location.host.includes('wowhead.com') && items) {
            var exportButton = $('<input>', {
                click: wowheadExporter,
                type: 'button',
                value: 'Export to TSM'
            });

            $('div.filter-row').append('<span>&nbsp;</span>').append(exportButton);
        }
    });
})();
