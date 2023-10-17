$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>'
});

// ======= Hot deals part zoom effect ========

$(document).ready(function () {
    var anik = document.querySelectorAll("#NZoomImg")
    var arr = Array.from(anik)
    arr.map((item, index) => {
        let t = item,
            e = t.getAttribute("data-NZoomscale") <= 0 ? 1 : t.getAttribute("data-NZoomscale"),
            s = t.clientWidth,
            o = t.clientHeight;
        item.parentElement.classList.add(`NZoomContainer${index}`)
        let i = $(`.NZoomContainer${index}`),
            n = item;
        i.mouseenter(function () {
            item.style.cursor = "pointer"
            item.style.transition = "0.2s"
            item.style.transform = `scale(${e})`
        })
        i.mousemove(function (t) {
            let e = $(this).offset(),
                x = (t.pageX - e.left) / 380 * 100 <= 100 ? (t.pageX - e.left) / 380 * 100 : 100,
                c = (t.pageY - e.top) / 380 * 100 <= 100 ? (t.pageY - e.top) / 380 * 100 : 100;
            item.style.transformOrigin = `${x}% ${c}%`

        })
        i.mouseleave(function () {
            item.style.transition = "0.2s"
            item.style.transform = "scale(1)"
        })
    })

})


// =====Hot deals Main Mega menu======

$('.dealMega_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left preArrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right nexArrow"></i>'
});


// =====Hot deals Side Mega menu======
$('.side_megaMenu').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left preArrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right nexArrow"></i>'
});

// ============= Counter ===============

$('.counter').counterUp({
    delay: 10,
    time: 1000
});