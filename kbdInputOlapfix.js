/**
 * 
 */
angular.module('kbdInputOlapFix', [])
.constant('MODULE_VERSION', '0.0.1')
.service('scrlSvc', function() {
	return function formScrl(startY, placer, relD) {
	    	  scrollderWindow.scrollTop = placer;
	}; 
})
.directive('lfCtrl', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function($scope, elm, attr) {
 
        	elm[0].addEventListener('focus', function () {
            	var scrollWin = attr.scrollableWindow;
            	var scrollderWindow = document.querySelector(".scrollWin");
            	var scrollderWindowChild = scrollderWindow.children[0];
            	var vHeight = scrollderWindow.offsetHeight;
            	var elem = elm;
        	    var height = elem[0].offsetTop;
        	    var scroller = scrollderWindow.scrollTop;
        	    var relD = height - scroller;
        	    var dB = vHeight - relD;
        	    var startY = height - (vHeight - dB);
        	    var marginH = .5*vHeight;
        	    var place = scroller + relD;
        	    var sH = scrollderWindow.scrollHeight;
        	    var placer = height - (marginH*.50);
        	    var threshold = marginH*.7;
        	    var hBuffer = marginH+100;
        	    if (relD > threshold ){
        	    	scrollderWindowChild.setAttribute("style", "padding-bottom:"+hBuffer+"px")
        	    	$scope.$apply();
        	    	scrollderWindow.scrollTop = placer;
        	     }
            });
            elm[0].addEventListener('blur', function () {
            		var scrollWin = attr.scrollableWindow;
            		var scrollderWindow = document.querySelector(".scrollWin");
            		var scrollderWindowChild = scrollderWindow.children[0];
            		scrollderWindowChild.setAttribute("style", "padding-bottom:0px")
            		$scope.$apply();
       	    }); 
        }
    };
});

