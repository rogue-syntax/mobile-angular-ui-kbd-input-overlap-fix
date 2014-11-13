mobile-angular-ui-kbd-input-overlap-fix
=======================================

This is a module for mcasmir's Mobile Anuglar UI to prevent keyboard / text input overlap.

Add the module to your angular app by including the script link in your index.html file and add the module to your app's injector configuration:
<br/>
<h5>var app = angular.module ( 'MobileAngularUiExamples', [ "kbdInputOlapFix"] );</h5>
<h6>(or however you bootstrap it)</h6>

The script provides the lfCtrl directive, which places on-focus / on-blur listeners on the designated elements. The focus event function determines the height of the focused element relative to its scrollable container div - which is identified by a unique classname on the scroller div ("IDENTIFIER") keyed to a ' scrollable-window="IDENTIFIER" ' attribute on the focused element. The scrollable content also needs to be wrapped with a div to add a bottom margin for the inputs near the scroll bottom.

EXAMPLE USE:
<br/>
```html

<pre>
<div class="scrollable">
	<div class="scrollable-content IDENTIFIER">
	  <div name="marginBumper" description="THIS DIV GETS A BOTTOM MARGIN ADDED AND REMOVED TO ACCOMODATE FORM INPUTS AT THE BOTTOM OF THE SCROLL HEIGHT">
	    <ng-repeat="input in inputs" input type="text" lf-ctrl scrollable-window="IDENTIFIER" />
    </div>
  </div>
</div>
</pre>
```


<br/>

Tested on Cordova / Crosswalk APK build (android 4.4.2)
