ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93855426475575,30.323020794150363],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938654059375445,30.322849132773417], {

        }, {
            iconLayout: 'default#image',
            iconImageHref: './images/footer/map.png',
            iconImageSize: [113, 106],
            iconImageOffset: [-25, -45]
        });

    myMap.geoObjects
        .add(myPlacemark);

});
