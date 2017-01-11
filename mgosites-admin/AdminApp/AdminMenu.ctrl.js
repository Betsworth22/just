mgoAdmin.controller('mgoAdminMenu', function($scope, $just, $state) {

    $scope.User = null;
    $scope.localStorage = localStorage;

    // check if the user is logged in or not
    Just.auth_check().then(
        function (data) {

            $scope.User = data;
            if (data.login) {

            } else {
                $state.go("login");
            }
        }, function () {
            $state.go("login");
        }
    );

    $scope.handleLogout = function() {
        $just.auth_logout().then(function() {
            $state.go("login");
        });
    };

    $just.admin_sites().then(function(data) {
        $scope.sites = data;
    });

    $scope.switchSite = function(site) {
        localStorage.sitename = site;
        location.reload();
    };
});
