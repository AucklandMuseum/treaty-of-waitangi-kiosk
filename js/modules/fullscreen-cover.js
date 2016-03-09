define([
    'modules/globals'
], function(g) {
    return function($el, imgOrigWidth, imgOrigHeight, minWidth, minHeight) {
        var aspectRatio = imgOrigWidth / imgOrigHeight;
        $el.css({
            'position': 'absolute'
        });

        $(document).on('updateSizes', function(e, data) {
            setImageSize(data.w, data.h);
        });

        function setImageSize(w, h) {
            var windowWidth = w; //$el.parent().width(); //window.innerWidth;
            var windowHeight = h; //$el.parent().height(); //window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var imgWidth = windowWidth;
            var imgHeight = windowHeight;
            var imgX = 0;
            var imgY = 0;


            if (!minHeight) minHeight = Number.NEGATIVE_INFINITY;
            if (!minWidth) minWidth = Number.NEGATIVE_INFINITY;

            if (windowRatio > aspectRatio) {
                imgHeight = Math.max(minHeight, windowWidth / aspectRatio);
                imgY = (windowHeight - imgHeight) / 2;
            } else {
                imgWidth = Math.max(minWidth, windowHeight * aspectRatio);
                imgX = (windowWidth - imgWidth) / 2;
            }
            $el.css({
                'width': imgWidth + 'px',
                'height': imgHeight + 'px',
                'margin-top': imgY + 'px',
                'margin-left': imgX + 'px'
            });
        }
    };
});