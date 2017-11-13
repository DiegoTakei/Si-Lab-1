var app = angular.module("mySpotify").config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/adicionarArtista', {
        templateUrl: 'view/adicionarArtista.html',
        controller: "artistasController"
    });
    $routeProvider.when('/index.html', {
        templateUrl: 'view/menu.html'
    });
    $routeProvider.when("/adicionarMusica",{
        templateUrl: "view/adicionarMusica.html",
        controller: "musicaController"
    });
    $routeProvider.when("/artista",{
        templateUrl: "view/artista.html",
        controller: "artistaController"
    });
    $routeProvider.when("/playlists",{
        templateUrl: "view/playlists.html",
        controller: "musicaController"
    });
    $routeProvider.when("/playlist", {
        templateUrl: "view/playlist.html",
        controller: "musicaController"
    });
    $routeProvider.when("/criarPlaylist", {
        templateUrl: "view/criarPlaylist.html",
        controller: "musicaController"
    });
    $routeProvider.when("/album", {
        templateUrl: "view/album.html",
        controller: "musicaController"
    });
});