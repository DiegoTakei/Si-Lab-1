angular.module("mySpotify").controller("artistaController", function (myService, $scope) {
    $scope.app = "My Spotify";
    $scope.artista = myService.getArtista();
    $scope.artista.musicas = myService.getArtistaMusicas($scope.artista.nome);

    $scope.salvar = function (artista) {
      myService.atualizarArtista(artista);  
      delete $scope.artista;
    };

});