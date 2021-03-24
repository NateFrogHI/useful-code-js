/*
 * A callback that can be used in the nock.reply function to intercept the
 * headers and body from a reply.
 */
const interceptResponseData = (uri, req, body) => {
    nock.restore();
    fetch(`<someDomain>${uri}`, {
        headers: req.headers,
        body: body
    })
        .then(async res => {
            const body = await res.buffer();
            console.log(body.toString());
            console.log(res.headers.raw());
        })
        .catch(err => console.log(err));
};

// Sample use
nock('<someDomain>')
    .get('/')
    .query({ 'list-type': '2', delimiter: '/', prefix: 'wcr/data.json' })
    .reply(200, function(uri) {
        interceptResponseData(uri, this.req);
    });
