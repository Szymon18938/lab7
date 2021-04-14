var portfolioApp = angular.module('portfolioApp',[]);
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'Rzym',
    'sekcja':'Wycieczka',
     'when':'2011-02-21',
     'thumbnailUrl':'1.jpg'
    },
    { 'title':'Bruksela',
     'when':'2014-08-04',
     'thumbnailUrl':'2.jpg'
     
    },
    { 'title':'Warszawa',
     'when':'2012-08-04',
     'thumbnailUrl':'3.jpg'
    },
    { 'title':'Krym',
     'when':'2011-05-04',
     'thumbnailUrl':'4.jpg',
     'sekcja':'Wycieczka'
    },
    { 'title':'Londyn',
     'when':'2013-03-04',
     'thumbnailUrl':'5.jpg'
    },
    { 'title':'Moskwa',
     'when':'2017-08-21',
     'thumbnailUrl':'6.jpg'
    }
    ];
    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
        {
        'label':'Chronologicznie',
        'value':'when'
        }
        ]; 
    $scope.orderProp = 'when'; 
    }); 
    it('should format date', function() {
        expect(element(by.binding("when | date:'medium'")).getText()).
           toMatch(/ 2\d, 2011 \d{1,2}:\d{2}:\d{2} (AM|PM)/);});
           
