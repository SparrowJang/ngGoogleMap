ngGoogleMap
==================

An [Angularjs](http://angularjs.org/) module that is google map. It supports some center and zoom features.

## Dependency

* angularjs
* google map

## Install

```
bower install ngGoogleMap
```

## Usage

#### First,include some scripts
```html
<script type="text/javascript" src="/bower_components/angular/angular.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
<script type="text/javascript" src="/src/ngGoogleMap.js"></script>
```

#### Create a google map
```html
<div ng-google-map style="height:300px;width:400px;"></div>
```

#### Setup a dependency of module
```js
angular.module( "app", [
    "ngGoogleMap"
]);
```

> Optionally, specify `center` or `zoom` or `markers`:
Set a zoom attribute.
```html
<div ng-google-map zoom="zoom" style="height:300px;width:400px;"></div>
$scope.zoom = 3;
```
Set a center attribute.
```html
<div ng-google-map center="center" style="height:300px;width:400px;"></div>
$scope.center = new google.maps.LatLng( 25.042749, 121.525114 );
```
Add a markers array.
```html
<div ng-google-map markers="markers" style="height:300px;width:400px;"></div>
$scope.markers = [];
$timeout(function(){
  $scope.markers.push( marker );
},1000);
```

#### Use the map event

Set a `map-events` model.
```html
<div ng-google-map map-events="mapEvents"></div>
```
Setup events.
```js
$scope.mapEvents = {
  click:function(){
    console.log( "click" );
  }
};
```

## Events

* resize
* bounds

#### Refresh this map

Trigger a event by scope.

```js
$scope.$broadcast( 'resize' );
```

#### Set a bounds by trigger

```js
$scope.$broadcast( "bounds", bounds );
```

## Demo
 
Clone this project.
 
```
git clone http://github.com/SparrowJang/ngGoogleMap.git
 
cd ngGoogleMap
```
 
Install the express framework and grunt modules.
```
npm install
```
 
run a server:
```
grunt server
```
 
Finally,open your brower,enter [http://localhost:3000/index.html](http://localhost/index.html).

