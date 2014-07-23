angular.module("alanloffler.directives", [])
.directive("numericInput", function() {
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$parsers.push(function(input) {
				var newInput = input.replace(/[^0-9.,]/g, '');
				if(newInput !== input) {
					ctrl.$setViewValue(newInput);
					ctrl.$render();
				};
				return newInput;
			});
		}
	};
})
.directive("letterInput", function() {
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$parsers.push(function(input) {
				var newInput = input.replace(/[0-9]/g, '');
				if(newInput !== input) {
					ctrl.$setViewValue(newInput);
					ctrl.$render();
				};
				return newInput;
			});
		}
	};
})
.directive("phoneInput", function() {
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$parsers.push(function(input) {
				var newInput = input.replace(/[^0-9()-. _]/, '');
				if(newInput !== input) {
					ctrl.$setViewValue(newInput);
					ctrl.$render();
				};
				return newInput;
			});
		}
	};
});