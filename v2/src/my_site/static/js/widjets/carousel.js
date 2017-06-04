var j = jQuery.noConflict();

j(function() {
    // added attributes carousel-indicator ::::::::::::::::::::::
    var count = 0;
    j('.carousel-indicator li').each(function() {
        count ++;
        j(this).attr('data-slider-to', count);

        if (j(this).attr('data-slider-to') == 1) {
            j(this).addClass('active');
        }
    });

    // added attributes carousel-iner :::::::::::::::::::::::::::
    var count2 = 0;

    j('.carousel-inner .item').each(function() {
        count2 ++;
        j(this).attr('data-item', count2);

        if (j(this).attr('data-item') == 1) {
            j(this).addClass('active');
        }
    });

    // added handler carousel-indicator :::::::::::::::::::::::::
    j('.carousel-indicator li').click(function() {
        var dataSlide = j(this).attr('data-slider-to');

        // remove .active and add .active new item :::::::::::::::
        j('.carousel-inner .item').each(function() {
            var dataItem = j(this).attr('data-item');

            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }

            if (dataSlide == dataItem) {
                j(this).addClass('active');
            }

        });

        // remove .active indicator :::::::::
        j('.carousel-indicator li').each(function() {
            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }
        });

        // add .active new indicator
        j(this).addClass('active');

    });

    // added handler next/prev button :::::::::::::::::::::::::::
    j('.widjet-carousel .left, .right').click(function(event) {
        event = event || window.event;
        event.preventDefault();
        var itemActive = 0;
        var maxItem = 0;
        var items = [];

        // get and remove class .active :::::::::::::::::::::::::
        j('.carousel-inner .item').each(function() {
            items.push(j(this));
            maxItem ++;

            if (j(this).hasClass('active')) {
                itemActive = Number(j(this).attr('data-item'));
                j(this).removeClass('active');
            }
        });

        // get and remove class .active in .carousel-indicator ::
        j('.carousel-indicator li').each(function() {
            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }
        });

        // this next ::::::::::::::::::::::::::::::::::::::::::::
        if (j(this).hasClass('right')) {
            if (itemActive == maxItem) {
                items[0].addClass('active');
                j('.carousel-indicator li').each(function() {
                    if (j(this).attr('data-slider-to') == 1) {
                        j(this).addClass('active');
                    }
                });
            } else {
                items[itemActive].addClass('active');
                j('.carousel-indicator li').each(function() {
                    if (j(this).attr('data-slider-to') == itemActive + 1) {
                        j(this).addClass('active');
                    }
                });
            }
        }

        // this prev ::::::::::::::::::::::::::::::::::::::::::::
        if (j(this).hasClass('left')) {
            if (itemActive <= 1) {
                items[(maxItem - 1)].addClass('active');
                j('.carousel-indicator li').each(function() {
                    if (j(this).attr('data-slider-to') == maxItem) {
                        j(this).addClass('active');
                    }
                });
            } else {
                items[(itemActive - 2)].addClass('active');
                 j('.carousel-indicator li').each(function() {
                    if (j(this).attr('data-slider-to') == (itemActive - 1)) {
                        j(this).addClass('active');
                    }
                });
            }
        }

        return false;
    });
});
