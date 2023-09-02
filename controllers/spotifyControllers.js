const SpotifyServices = require('../services/SpotifyServices');
const LikedTracks = require('../models/LikedTracks');
const clientId = 'client_id';
const clientSecret = 'client_secret';
const redirectUri = 'redirect_uri';
const baseUrl ='base_url';

const spotifyServices = new SpotifyServices(clientId, clientSecret, redirectUri,baseUrl);

exports.authorize = (req, res) => {
    const scopes = 'user-library-read';  // ajoutez d'autres scopes selon vos besoins
    const authorizeUrl = spotifyServices.getAuthorizeUrl(scopes);
    res.redirect(authorizeUrl);
};

exports.callback = async (req, res) => {
    const code = req.query.code || null;

    try {
        await spotifyServices.requestAccessToken(code);
        res.redirect('/');

    } catch (error) {
        res.send('Une erreur est survenue');
    }
};

exports.getTracks = async(req,res) => {
    try{
        let result = await spotifyServices.getLikedTracks();

        const likedTracks = new LikedTracks(
            result.data.href,
            result.data.items,
            result.data.limit,
            result.data.next,
            result.data.next,
            result.data.offset,
            result.data.previous,
            result.data.total
        );

        // send json data for response
        res.status(200).json(likedTracks);
    }catch(error){
        res.send('une erreur est survenue');
    }
};



