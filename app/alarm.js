var app = angular.module('app', []);

app.directive("alarm", function () {
	return {
		restrict: "A",
		controller: function ($scope) {

			this.addRed = function () {
				alert("red alarm!");
			}

			this.addYellow = function () {
				alert("yellow alarm!");
			}

			this.addGreeen = function () {
				alert("green alarm!");
			}
		}
	}	
})

app.directive("red", function() {
	return{
		require:"alarm",
		link: function (scope, element, attrs, alarmCtrl){
				element.bind("click", function(){
				alarmCtrl.addRed();
			})

		}
	}

})

app.directive("yellow", function() {
	return{
		require:"alarm",
		link: function (scope, element, attrs, alarmCtrl){
				element.bind("dblclick", function(){
				alarmCtrl.addYellow();
			})

		}
	}

})


app.directive("green", function() {
	return{
		require:"alarm",
		link: function (scope, element, attrs, alarmCtrl){
				element.bind("mouseenter", function(){
				alarmCtrl.addGreeen();
			})

		}
	}

})
