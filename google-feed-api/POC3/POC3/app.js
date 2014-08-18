var request = require('request');

request('http://sxp.microsoft.com/feeds/3.0/msdntn/CSharpHeadlines', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }
})
