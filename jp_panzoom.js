require.undef('jp_panzoom');

define('jp_panzoom', ['panzoom'], function (panzoom) {
    function draw(container) {
        // just grab a DOM element
        var element = document.querySelector('#scene');
        console.log(element)
        // And pass it to panzoom
        panzoom(element)
    }
    return draw;
});
