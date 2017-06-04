function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

// rules :::::::::::::::::::::::::::::::::::::::::::
addScript('/static/js/rules/jquery.min.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::
addScript('/static/js/my_scripts/link.js');

// widjets_scripts :::::::::::::::::::::::::::::::::
addScript('/static/js/widjets/menu.js');
addScript('/static/js/widjets/carousel.js');
addScript('/static/js/widjets/previews.js');
addScript('/static/js/widjets/tree.js');
