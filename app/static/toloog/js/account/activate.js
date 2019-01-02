/* Switchery Init*/

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-a'));
$('.js-switch-b').each(function() {
    new Switchery($(this)[0], $(this).data());
});

