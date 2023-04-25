//Слайдер
$(document).ready(function() {

    $('.slider_items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.slider_items').css('margin-left', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');
    $('.slick-next').css('right', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');
    $('.slick-prev').css('right', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');

});

$(window).resize(function() {
    $('.slider_items').css('margin-left', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');
    setTimeout(function() {
        $('.slick-next').css('right', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');
        $('.slick-prev').css('right', (($('body').width() - $('.main_container').innerWidth()) / 2) + 'px');
    }, 100);
});

//Карта
YMaps.jQuery(function () {
    // Создание экземпляра карты и его привязка к созданному контейнеру
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

    // Установка для карты ее центра и масштаба
    map.setCenter(new YMaps.GeoPoint(37.563761, 55.713174), 15);

    // Добавление элементов управления
    map.enableScrollZoom();

    //Стили меток
    var beauty = new YMaps.Style();
    beauty.iconStyle = new YMaps.IconStyle();
    beauty.iconStyle.href = "image/beauty.svg";
    beauty.iconStyle.size = new YMaps.Point(78, 93);
    beauty.iconStyle.offset = new YMaps.Point(-55, -20);

    var medicine = new YMaps.Style();
    medicine.iconStyle = new YMaps.IconStyle();
    medicine.iconStyle.href = "image/medicine.svg";
    medicine.iconStyle.size = new YMaps.Point(78, 93);
    medicine.iconStyle.offset = new YMaps.Point(-55, -20);

    var shop = new YMaps.Style();
    shop.iconStyle = new YMaps.IconStyle();
    shop.iconStyle.href = "image/shop.svg";
    shop.iconStyle.size = new YMaps.Point(78, 93);
    shop.iconStyle.offset = new YMaps.Point(-55, -20);

    var education = new YMaps.Style();
    education.iconStyle = new YMaps.IconStyle();
    education.iconStyle.href = "image/education.svg";
    education.iconStyle.size = new YMaps.Point(78, 93);
    education.iconStyle.offset = new YMaps.Point(-55, -20);

    var coffee = new YMaps.Style();
    coffee.iconStyle = new YMaps.IconStyle();
    coffee.iconStyle.href = "image/coffee.svg";
    coffee.iconStyle.size = new YMaps.Point(78, 93);
    coffee.iconStyle.offset = new YMaps.Point(-35, -35);

    var cinema = new YMaps.Style();
    cinema.iconStyle = new YMaps.IconStyle();
    cinema.iconStyle.href = "image/cinema.svg";
    cinema.iconStyle.size = new YMaps.Point(78, 93);
    cinema.iconStyle.offset = new YMaps.Point(-55, -20);

    var baby = new YMaps.Style();
    baby.iconStyle = new YMaps.IconStyle();
    baby.iconStyle.href = "image/baby.svg";
    baby.iconStyle.size = new YMaps.Point(78, 93);
    baby.iconStyle.offset = new YMaps.Point(-55, -20);

    var zoo = new YMaps.Style();
    zoo.iconStyle = new YMaps.IconStyle();
    zoo.iconStyle.href = "image/zoo.svg";
    zoo.iconStyle.size = new YMaps.Point(78, 93);
    zoo.iconStyle.offset = new YMaps.Point(-55, -20);

    // Группы объектов
    var groups = [
            createGroup("КРАСОТА И ЗДОРОВЬЕ <span class='number'>3</span>", [
            createPlacemark(new YMaps.GeoPoint(37.559317, 55.712721), {style: beauty}),
            createPlacemark(new YMaps.GeoPoint(37.565993, 55.709612), {style: medicine}),
            createPlacemark(new YMaps.GeoPoint(37.569598, 55.715064), {style: medicine})
        ], "default#redPoint"),
            createGroup("МАГАЗИНЫ <span class='number'>4</span>", [
            createPlacemark(new YMaps.GeoPoint(37.552431, 55.716541), {style: shop}),
            createPlacemark(new YMaps.GeoPoint(37.56942, 55.716687), {style: shop}),
            createPlacemark(new YMaps.GeoPoint(37.566079, 55.715112), {style: shop}),
            createPlacemark(new YMaps.GeoPoint(37.573202, 55.709903), {style: shop})
        ], "default#greenPoint"),
            createGroup("ОБУЧЕНИЕ <span class='number'>2</span>", [
            createPlacemark(new YMaps.GeoPoint(37.554320, 55.713852), {style: education}),
            createPlacemark(new YMaps.GeoPoint(37.577408, 55.710848), {style: education}),
        ], "default#orangePoint"),
        createGroup("ДЕТСАД <span class='number'>3</span>", [
            createPlacemark(new YMaps.GeoPoint(37.576035, 55.716614), {style: baby}),
            createPlacemark(new YMaps.GeoPoint(37.568825, 55.713247), {style: baby}),
            createPlacemark(new YMaps.GeoPoint(37.571486, 55.715912), {style: baby})
        ]),
        createGroup("ОТДЫХ, РАЗВЛЕЧЕНИЯ <span class='number'>5</span>", [
            createPlacemark(new YMaps.GeoPoint(37.555693, 55.717147), {style: coffee}),
            createPlacemark(new YMaps.GeoPoint(37.571786, 55.714288), {style: coffee}),
            createPlacemark(new YMaps.GeoPoint(37.568911, 55.709007), {style: coffee}),
            createPlacemark(new YMaps.GeoPoint(37.565606, 55.713368), {style: zoo}),
            createPlacemark(new YMaps.GeoPoint(37.556208, 55.714967), {style: cinema})
        ])
    ];

    // Создание списка групп
    for (var i = 0; i < groups.length; i++) {
            addMenuItem(groups[i], map, YMaps.jQuery("#menu"));
        }
    });

    // Добавление одного пункта в список
    function addMenuItem (group, map, menuContainer) {

    // Показать/скрыть группу на карте
    YMaps.jQuery("<a class=\"title\" href=\"#\">" + group.title + "</a>")
        .bind("click", function () {

            map.removeAllOverlays();

            var link = YMaps.jQuery(this);

            map.addOverlay(group);

            // Меняем "активность" пункта меню
            link.addClass("active");

            return false;
        })

    // Добавление нового пункта меню в список
    .appendTo(
        YMaps.jQuery("<li></li>").appendTo(menuContainer)
    );

        map.addOverlay(group);
    };

    // Создание группы
    function createGroup (title, objects, style) {
        var group = new YMaps.GeoObjectCollection(style);

        group.title = title;
        group.add(objects);

        return group;
    };

    // Создание метки
    function createPlacemark (point, style) {
        var placemark = new YMaps.Placemark(point, style);
        return placemark;
    }


