screen
'use strict';

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (className == "light-theme") {
        switcher.textContent = 'Dark';
        console.log('current class name: ' + className);
    } else {
        switcher.textContent = 'Light';
    }
});
