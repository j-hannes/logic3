/* global angular */
var app = angular.module('logic3', []);

app.controller('BoardCtrl', function() {
  this.puzzleConfig = puzzleConfig;
});

app.filter('spaceRequired', function() {
  return function(blocks) {
    var add = function(a,b) {return a+b};
    var sum = blocks.reduce(add, 0);
    return sum + blocks.length - 1;
  };
});

var puzzleConfig = {
  vertical: [
    [4],
    [3],
    [3],
    [3],
    [7,2],

    [11,2],
    [4,4,1],
    [3,3,1],
    [2,2,1],
    [2,4,2],

    [1,6,2],
    [1,7,2],
    [1,7,2],
    [1,3,4,1],
    [1,3,3,1,2],

    [1,4,2,2,2],
    [1,5,2,2,2],
    [1,8,3,2],
    [1,1,2,4,3,2],
    [3,2,3,2,2],

    [2,3,3,2,2],
    [9,1,2],
    [8,2,2],
    [6,3,3],
    [2,3,2],

    [7],
    [1],
    [1],
    [2],
    [2],
  ],
  horizontal: [
    [12],
    [4,2],
    [2,4],
    [3,2],
    [2,10],

    [2,13],
    [2,9,4],
    [2,4,4,3],
    [2,5,8],
    [2,6,7],

    [2,15],
    [3,7,3],
    [2,1],
    [2,5],
    [2,5,4],

    [1,6,3],
    [1,2,4,1],
    [4,5,3],
    [6,16,2],
    [9,10,4],
  ],
};

