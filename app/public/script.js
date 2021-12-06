const app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) => {
  const getData = () => {
    return $http({
      method: "GET",
      url: "/book",
    }).then(
      function successCallback(response) {
        $scope.books = response.data;
      },
      function errorCallback(response) {
        console.log("Error: " + response);
      }
    );
  };
  getData();
  $scope.del_book = (book) => {
    $http({
      method: "DELETE",
      url: "/book/:isbn",
      params: { isbn: book.isbn },
    }).then(
      function successCallback(response) {
        console.log(response);
        return getData();
      },
      function errorCallback(response) {
        console.log("Error: " + response);
      }
    );
  };
  $scope.add_book = () => {
    const body =
      '{ "name": "' +
      $scope.Name +
      '", "isbn": "' +
      $scope.Isbn +
      '", "author": "' +
      $scope.Author +
      '", "pages": "' +
      $scope.Pages +
      '" }';
    $http({
      method: "POST",
      url: "/book",
      data: body,
    }).then(
      function successCallback(response) {
        console.log(response);
        return getData();
      },
      function errorCallback(response) {
        console.log("Error: " + response);
      }
    );
  };
});
