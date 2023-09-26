document.onkeydown = keyHit;
var thisPic = 0;

function keyHit(evt) {
    var myPix = [
        "img/lion.jpg",
        "img/tigger.jpg",
        "img/puma.jpg",
        "img/leopard.jpg",
        "img/lince.jpg"
    ];
    var imgCt = myPix.length - 1;

    var ltArrow = 37;
    var rtArrow = 39;

    var thisKey = (evt) ? evt.which : window.event.keyCode;

    if (thisKey == ltArrow) {
        chgSlide(-1);
    } else if (thisKey == rtArrow) {
        chgSlide(1);
    }
    return false;

    function chgSlide(direction) {
        thisPic = thisPic + direction;
        if (thisPic > imgCt) {
            thisPic = 0;
        }
        if (thisPic < 0) {
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}
