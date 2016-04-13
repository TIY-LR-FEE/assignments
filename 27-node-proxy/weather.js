import http from 'http';
import httpProxy from 'http-proxy';
import url from 'url';

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {

    let parsedUrl = url.parse(req.url, true);

    /**
     * We want to proxy our requests to Open Weather Map's API,
     * but we need to add our API key as a querystring parameter.
     *
     * 1. Add your API key to parsedUrl.query by adding a
     *    property called APPID to it.
     *
     * 2. Set parsedUrl.search to null. We want to make sure it
     *    uses our querystring params, and if search is set, it
     *    will ignore them.
     *
     * 3. Set req.url to url.format(parsedUrl)
     *
     *    This is how we apply the changes we made
     *
     * 4. You should be able to run npm run nasa and visit localhost:8000
     *    in your browser. At /planetary/apod you should see data for the
     *    Astronomy Picture of the Day.
     */

    proxy.web(req, res, {
        target: 'http://api.openweathermap.org'
    });

});

server.listen(8000);
