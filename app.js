var app = angular.module('MeanStack',[]);

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  $scope.message = "Hello Dick!";

  $scope.posts = posts.posts;
  // [
  //   {title: 'The Google', link: 'google.com', upvotes: 5},
  //   {title: 'The Facebook', link: 'facebook.com', upvotes: 2},
  //   {title: 'The Yahoo', link: 'yahoo.com', upvotes: 15},
  //   {title: 'The Berrics', link: 'theberrics.com', upvotes: 99},
  //   {title: 'The Internet', link: 'theinternet.com', upvotes: 4}
  // ];

  $scope.newPost = function(){
    // make sure ze field isn't blank yah
    if (!$scope.title || $scope.title === '') { return; }
    // since ze field isn't blank add it to ze list
    $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
    // reset ze title field
    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementPost = function(post){
    post.upvotes += 1;
  }
}]);

app.factory('posts', [function(){
  // working in ze factory yah?
  var o = {
    posts: [
      {title: 'The Google', link: 'google.com', upvotes: 5},
      {title: 'The Facebook', link: 'facebook.com', upvotes: 2},
      {title: 'The Yahoo', link: 'yahoo.com', upvotes: 15},
      {title: 'The Berrics', link: 'theberrics.com', upvotes: 99},
      {title: 'The Internet', link: 'theinternet.com', upvotes: 4}
    ]
    };
  return o;
}]);
