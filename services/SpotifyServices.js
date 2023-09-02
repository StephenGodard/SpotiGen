const axios = require('axios');
const qs = require('querystring');

class SpotifyServices {
    constructor(clientId, clientSecret, redirectUri, baseUrl){
        this.client_id=clientId;
        this.client_secret = clientSecret;
        this.redirect_uri=redirectUri;
        this.access_token ='';
        this.refresh_token='';
        this.base_url = baseUrl;
    }
    getAuthorizeUrl(scopes) {
        return 'https://accounts.spotify.com/authorize' +
            '?response_type=code' +
            '&client_id=' + this.client_id+
            (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
            '&redirect_uri=' + encodeURIComponent(this.redirect_uri);
    }

    async requestAccessToken(code) {
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
                code: code,
                redirect_uri: this.redirect_uri,
                grant_type: 'authorization_code',
            }), {
                headers: {
                    'Authorization': 'Basic ' + (new Buffer.from(this.client_id + ':' + this.client_secret).toString('base64')),
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

            this.access_token=response.data.access_token;
            this.refresh_token=response.data.refresh_token;

        } catch (error) {
            console.error(`Erreur dans la récupération du token : ${error}`);
            throw error;
        }
    }

    async getLikedTracks() {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
                headers: {
                    'Authorization': `Bearer ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching liked tracks:", error);
            throw error;
        }
    }

}

module.exports = SpotifyServices;
