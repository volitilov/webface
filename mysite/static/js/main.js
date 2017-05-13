function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

// rules :::::::::::::::::::::::::::::::::::::::::::
addScript('/js/rules/jquery.min.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::
addScript('/js/my_scripts/link.js');

// widjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/menu.js');
addScript('/js/widjets/carousel.js');
