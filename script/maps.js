
ymaps.ready(function () { 
 
    var myMap = new ymaps.Map("YMapsID", {
        center: [42.869296, 74.603665],
        zoom: 11,
    });
 
    // создание маркера
    var myPlacemark = new ymaps.Placemark([42.869296, 74.603665], {
       content: 'название маркера',
       balloonContent: 'html-контент',
    });

    // добавление маркера на карту
    myMap.geoObjects.add(myPlacemark);
    
});