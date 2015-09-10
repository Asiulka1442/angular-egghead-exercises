'use strict';

var app = angular.module('app', []);

app.controller('AppCtrl', ['$scope', function ($scope)
{
    $scope.description = {
        element: {
            name: 'restrict E',
            call: '<this element is using restrict E directive>'
        },
        attribute: {
            name: 'restrict A',
            call: '<this element is using restrict A directive>'
        },
        class: {
            name: 'restrict C',
            call: '<this element is using restrict C directive>'
        }
    };
}]);

app.directive("restrictE", function() {
    return {
        restrict: "E",
        template: "{{description.element.name}}: {{description .element.call}}"
    };
});
app.directive("restrictA", function() {
    return {
        restrict: "A",
        template: "{{description.attribute.name}}: {{description .attribute.call}}"
    };
});

app.directive("restrictC", function() {
    return {
        restrict: "C",
        template: "{{description.class.name}}: {{description .class.call}}"
    };
});

app.directive("restrictM", function() {
    
    return {
        restrict: "M",
        link: function(){
            alert("directive M: working...");
        }
    }; 
});


