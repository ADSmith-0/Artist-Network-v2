const getEncodedCredentials = () => Buffer.from(`${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`).toString('base64');

module.exports = { getEncodedCredentials };