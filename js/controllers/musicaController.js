angular.module("mySpotify").controller("musicaController", function (myService, $scope){
    $scope.app = "My Spotify";
    $scope.albuns = myService.getAlbuns();
    $scope.musicas = myService.getMusicas();
    $scope.playlists = myService.getPlaylists();
    $scope.playlist = myService.getPlaylist();
    $scope.album = myService.getAlbum();

    $scope.adicionarMusica = function(musica){
        myService.adicionarMusica(musica);
        delete $scope.musica;
    };
    $scope.removerMusica = function (musicas) {
      $scope.musicas = musicas.filter(function (musica) {
          if (!musica.selecionada) {
            return musica;
          };
        });
    };
    $scope.removerPlaylist = function (playlists) {
        var playlistRemovida = playlists.filter(function (playlist) {
            if (!playlist.selecionada) {
                return playlist;
            };
        });
        myService.removerPlaylist(playlistRemovida);
        $scope.playlists = myService.getPlaylists();
    };
    $scope.isMusicaSelecionada = function (musicas) {
        return musicas.some(function (musica) {
          return musica.selecionada;
        });
    };
    $scope.adicionarMusicaAPlaylist = function (musica) {
        myService.adicionarMusicaAPlaylist(musica,$scope.playlist);
        delete $scope.musica;
        $scope.playlist = myService.getPlaylist();
    }
    $scope.getInfoPlaylist = function (playlist) {
        myService.setPlaylist(playlist);
    };
    $scope.getInfoAlbum = function (album) {
        myService.setAlbum(album);
    };
    $scope.salvarPlaylist = function (playlist, nome) {
        myService.adicionarPlaylist(playlist, nome);
        delete $scope.playlist;
    }
    $scope.isPlaylistSelecionada = function (playlists) {
        return playlists.some(function (playlist) {
            return playlist.selecionada;
        });
    };
    $scope.classe = "selecionada";
});