
(function( angular ){

  angular.module( 'google.maps',[] ).

  directive( 'ngGoogleMap', function(){

    var utils = {

      watch:function( scope, name, func ){

        return scope.$watch( name, func );

      }

    };

    var mapWatchers = {

      zoom:function( scope, map ){

        return utils.watch( scope, 'zoom', function(){

          map.setZoom( scope.zoom );

        });
      },

      center:function( scope, map ){

        return utils.watch( scope, 'center', function(){

          if ( scope.center ) map.setCenter( scope.center );

        });

      }
    };

    return {

      scope:{
        "center":"=",
        "zoom":"="
      },

      link:function( scope, elem, attrs, ctrl ){

        var clearListeners = [];
        var map;

        clearListeners.push(scope.$watch( 'ready', function(){

          var options = {
            center:scope.center || new google.maps.LatLng( 25.041749,121.515114 ),
            zoom:scope.zoom || 8
          };

          map = new google.maps.Map( elem[0], options );

          for ( var name in mapWatchers ) clearListeners.push( mapWatchers[ name ]( scope, map ) );

        }));


        scope.$on( "$destroy", function(){

          for ( var i in clearListeners ) clearListeners[i]();

        });

      }
    };

  });

})( angular );

