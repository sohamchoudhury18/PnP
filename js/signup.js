$(document).ready(function() {
    var modal = $("#sign-up-modal");
    var btn = $("#loginbtn");
    var span = document.getElementsByClassName("close")[0];
    btn.click(function() {
        modal.show();
    });
    span.onclick = function() {
        modal.hide();
    };
    $(window).click(function(e) {
        console.log(e);
        if (e.target.id == "sign-up-modal") {
            modal.hide();
        }
    });
});


$('.form').find('input, textarea').on('keyup blur focus', function(e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        }
        else {
            label.addClass('active highlight');
        }
    }
    else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        }
        else {
            label.removeClass('highlight');
        }
    }
    else if (e.type === 'focus') {

        if ($this.val() === '') {
            label.removeClass('highlight');
        }
        else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function(e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');
    console.log(target);
    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);

});
