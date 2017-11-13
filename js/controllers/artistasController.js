angular.module("mySpotify").controller("artistasController", function (myService,$scope){
      $scope.app = "My Spotify";
      $scope.artistas = myService.getArtistas();

      $scope.adicionarArtista = function(artista){
        myService.adicionarArtista(artista);
        delete $scope.artista;
      };
      $scope.removerArtista = function (artistas) {
        var artistaRemovido = artistas.filter(function (artista) {
          if (!artista.selecionado) {
            return artista;
          }; 
        });        
        myService.removerArtista(artistaRemovido);
        $scope.artistas = myService.getArtistas();
      };
      $scope.adicionarAosFavoritos = function (artista) {
        console.log(artista);
        myService.adicionarAosFavoritos(artista);
        delete $scope.artista;
      }
      $scope.isArtistaSelecionado = function (artistas) {
        return artistas.some(function (artista) {
          return artista.selecionado;
        });
      };
      $scope.getInfoArtista = function (artista){
        myService.setArtista(artista);
      };
      $scope.classe = "selecionado";
      $scope.adicionarAosFavoritos = function (artista) {
        myService.adicionarAosFavoritos(artista);
        alert("Adicionado aos favoritos");
        delete $scope.artista;
      };
});