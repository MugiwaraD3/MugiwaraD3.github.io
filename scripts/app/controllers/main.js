window.angular.module(window.config.id).controller('mainController', ['$scope', '$firebase',
  function($scope, $firebase) {

    window.localeDate = moment();
    window.localeDate.lang('fr');

    var postsRef = new Firebase('https://thomassloboda.firebaseio.com/md3_posts');
    $scope.postProvider = $firebase(postsRef);
    $scope.posts = [];
    
    postsRef.on('child_added', function(newChild) {
      
      $scope.posts.push(newChild.val());
    });

    $scope.newPostTitle = '';
    $scope.newPostBody = '';
    $scope.addPost = function() {
      var date = moment();
      date.lang('fr');
      $scope.postProvider.$add({
        id: Guid(),
        title: $scope.newPostTitle,
        body: $scope.newPostBody.convertURI(),
        created: date.format('LLLL')
      });
      $scope.newPostTitle = '';
      $scope.newPostBody = '';
    }
  }
]);