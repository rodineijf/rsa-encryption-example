const nodeRsa = require("node-rsa");

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwP8Qdog0cldSTyNclYMjTALKI
IMqU1OEhLazOg3Xpxuj0ap1UH3+D9wiYngARWmHKFi3U/ySil2kXLveDq8kY04Nd
vyZPOBnDazC6pv/aBxQvu+fAdGompecq2/NLa4lq9qKxZbMwke6H37TsAfiOuQsa
coEWgD9TopTnku6GiQIDAQAB
-----END PUBLIC KEY-----"`;

const key = new nodeRsa(publicKey, "pkcs8-public-pem");
const encrypted = key.encrypt("encrypted-test-string");
const encoded = encrypted.toString("base64");

console.log(encoded);

console.log("finished");
