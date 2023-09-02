class Track {
    constructor(album) {
        this.album = new Album(album.albumType, album.totalTracks, album.availableMarkets, album.externalUrls, album.href, album.id, album.images, album.name, album.releaseDate, album.releaseDatePrecision, album.restrictions, album.artists);
    }
}
