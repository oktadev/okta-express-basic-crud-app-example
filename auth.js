const okta = require("@okta/okta-sdk-nodejs");


const client = new okta.Client({
    orgUrl: "{yourOktaOrgUrl}",
    token: "{yourOktaToken}"
});


module.exports = { client };