'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
        controller('MyCtrl1', ["$scope",function(scope) {
        var MAX_CLOUD = 6;

        scope.watt = 0;
        scope.cloud_nb = 0;
        scope.cloud_pop = 2;

        var animate_sun = function(){
            
        };

        var animate_cloud = function() {

        };
        
        var poping_
        
        scope.garbage = {
            solar_panel: {
                nb: 0,
                initPrize: 100,
                nbBuy: 0,
                getPrize: function() {
                    return scope.garbage.solar_panel.nb * scope.garbage.solar_panel.initPrize;
                }
            },
            sainte_grenade: {
                nb: 0,
                initPrize: 1000,
                nbBuy: 0,
                getPrize: function() {
                    return scope.garbage.sainte_grenade.nb * scope.garbage.sainte_grenade.initPrize;
                }
            },
            pegaze: {
                nb: 0,
                initPrize: 500,
                nbBuy: 0,
                getPrize: function() {
                    return scope.garbage.pegaze.nb * scope.garbage.pegaze.initPrize;
                }
            }
        };
    }])
        .controller('MyCtrl2', [function() {

    }]);