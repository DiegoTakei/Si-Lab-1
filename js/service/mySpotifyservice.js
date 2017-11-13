angular.module('mySpotify').service('myService', function () {
    var _artistas = [];
    var _albuns = [];
    var _musicas = [];
    var _playlists = [];
    var _artista;
    var _playlist;
    var _album;
    var _favoritos = [];

    var _adicionarArtista = function (artista) {

        if(!_existsArtista(artista.nome)) {
            _artistas.push(angular.copy(artista));
        }else{
            alert("Artista já existe!");
        }
    }
    var _adicionarMusica = function (musica) {
        var album = [];
        var existsAlbum = false;
        for (var i = 0; i < _albuns.length; i++) {
            if (_albuns[i].nomeAlbum === musica.album) {

                if (!_existsMusic(_albuns[i], musica)) {
                    _albuns[i].album.push(angular.copy(musica));
                    existsAlbum = true;
                } else {
                    alert("Música já Existe");
                    return;
                }
            }
        }
        if (existsAlbum == false) {
            album.push(angular.copy(musica));
            _adicionarAlbum(album, musica.album);
        }
        _musicas.push(angular.copy(musica));
    }
    var _adicionarAlbum = function (album,nomeAlbum) {

        _albuns.push(angular.copy({ nomeAlbum: nomeAlbum, album }));
    }
    var _adicionarPlaylist = function (musicas,nome) {

        if (!_existsPlaylist(nome)){
            _playlists.push(angular.copy({ nomePlaylist: nome, musicas}));
        }else{
            alert("Playlist já existente!");
        }
    }

    var _removerArtista = function (artistas) {

        _artistas = artistas;   
    }
    var _removerPlaylist = function (playlists) {

        _playlists = playlists;
    }

    var _existsMusic = function (musicas, musica) {
        console.log(musicas.album);
        for (var i = 0; i < musicas.album.length; i++) {
            if (musicas.album[i].nome == musica.nome) {
                return true;
            }
        }
        return false;
    }
    var _existsArtista = function (nome) {
        for (var i = 0; i < _artistas.length; i++) {
            if (_artistas[i].nome == nome) {
                return true;
            }
        }
        return false;
    }
    var _existsPlaylist = function (nome) {
        for (var i = 0; i < _playlists.length; i++) {
            if (_playlists[i].nomePlaylist == nome) {
                return true;
            }
        }
        return false;
    }

    var _adicionarMusicaAPlaylist = function (musica,playlist) {
        
        for (var i = 0; i < _playlists.length; i++) {
            if (_playlists[i].nomePlaylist == playlist.nomePlaylist) {
               _playlists[i].musicas.push(angular.copy(musica));
              // _playlist.musicas.push(angular.copy(musica));
            }
        }

    }
    var _adicionarAosFavoritos = function (artista) {
        
       _favoritos.push(angular.copy(artista));
       console.log(_favoritos);
    }

    var _getArtistaMusicas = function (nomeArtista) {
        var musicas = [];
        for (var i = 0; i < _musicas.length; i++) {
            if (_musicas[i].artista === nomeArtista) {
                musicas.push(_musicas[i]);
            }
        } 
        return musicas; 
        
    }

    var _getArtistas = function () {
        return _artistas;
    }
    var _getArtista = function () {
        return _artista;
    }
    var _getPlaylist = function () {
        return _playlist;
    }
    var _getAlbum= function () {
        return _album;
    }
    var _setArtista = function (artista) {
        _artista = artista;
    }
    var _setPlaylist = function (playlist) {
        _playlist = playlist;
    }
    var _setAlbum = function (album) {
        _album = album;
    }
    var _getAlbuns = function () {
        return _albuns;
    }
    var _getMusicas = function () {
        return _musicas;
    }
    var _getPlaylists = function () {
        return _playlists;
    }

    return {
        adicionarArtista: _adicionarArtista,
        adicionarMusica: _adicionarMusica,
        adicionarPlaylist: _adicionarPlaylist,
        removerArtista: _removerArtista,
        removerPlaylist: _removerPlaylist,
        adicionarAosFavoritos: _adicionarAosFavoritos,
        adicionarMusicaAPlaylist: _adicionarMusicaAPlaylist,
        getArtistas: _getArtistas,
        getAlbuns: _getAlbuns,
        getMusicas: _getMusicas,
        getPlaylists: _getPlaylists,
        getArtista: _getArtista,
        getPlaylist: _getPlaylist,
        getAlbum: _getAlbum,
        setAlbum: _setAlbum,
        setPlaylist: _setPlaylist,
        getArtistaMusicas: _getArtistaMusicas,
        setArtista: _setArtista,
        existsMusic: _existsMusic
    };

});


/*

Da mesma forma o usuário pode excluir artistas da lista de favoritos, exibindo uma mensagem de confirmação caso o usuário aceite ou não a exclusão.
O usuário poderá criar uma playlist com determinado nome e adicionar músicas a determinada playlist.
Da mesma forma o usuário poderá excluir determinada playlist ou excluir determinada música de tal playlist, exibindo uma mensagem de confirmação caso o usuário aceite ou não a exclusão.
*/