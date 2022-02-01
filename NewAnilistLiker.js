// ==UserScript==
// @name         New anilist liker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a like all button to anilist user pages
// @author       Nil Silva
// @match        https://anilist.co/user/*
// @icon         https://www.google.com/s2/favicons?domain=anilist.co
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function triggerMostButtons(jNode) {
        triggerMouseEvent(jNode, "click");
    }

    function triggerMouseEvent(node, eventType) {
        console.log(node)
        console.log(eventType)
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    function like(){
        const divs = document.querySelectorAll(".like-wrap.activity .button:not(.liked):nth-child(2)")

        for (const div of divs) {
            div.click();
            triggerMostButtons(div);
        }
    }

    var button = document.createElement("Button");
    button.innerHTML = "like";
    button.style = "bottom:10px;right:10px;position:fixed;z-index:9999999"
    button.onclick = like;
    document.body.appendChild(button);
})();