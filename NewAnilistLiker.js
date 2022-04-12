// ==UserScript==
// @name         New anilist liker
// @updateURL    https://nilsilva.github.io/NewAnilistLiker/NewAnilistLiker.js
// @downloadURL  https://nilsilva.github.io/NewAnilistLiker/NewAnilistLiker.js
// @version      0.4.0
// @description  Add a like all button to anilist user pages
// @author       Nil Silva
// @match        https://anilist.co/user/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function like() {
        var username = document.getElementsByClassName("links")[0].getElementsByClassName("link")[1].href;
        var likes = document.querySelectorAll(".button:not(.liked)");

        function eventFire(el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            } else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        }

        console.log('There are ' + likes.length + ' activities.')

        for (let elt of likes) {
            if (username != elt.closest('.wrap').getElementsByClassName("name")[0].href) {
                eventFire(elt, 'click');
            }
        }
    }

    
    var button = document.createElement("Button");
    button.innerHTML = "like";

    button.style = `
    border-radius: 50%;
    border: 2px solid white;
    background-color: #0b1622;
    color: white;
    bottom: 10px;
    right: 10px;
    position: fixed;
    z-index: 9999999;
    width: 45px;
    height:45px`

    button.onclick = like;
    document.body.appendChild(button);
})();