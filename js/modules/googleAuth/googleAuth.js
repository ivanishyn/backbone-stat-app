define([
], function () {
    'use strict';
    console.log(window);
    // A client ID for a web application from the Google Developer Console.
    var clientId = '478961719878.apps.googleusercontent.com';

    // The API key from the Google Developer Console
    var apiKey = 'AIzaSyAMf6AmnorsKBKNRQy5gFpqxhtQhwQt6QI';

    // To enter one or more authentication scopes, refer to the documentation for the API.
    var scopes = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    // Use a button to handle authentication the first time.
    //function handleClientLoad() {
        setTimeout(checkAuth, 1);
    //}

    function checkAuth() {
        gapi.client.setApiKey(apiKey);
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
    }


    function handleAuthResult(authResult) {
        var authorizeButton = document.getElementById('authorizeButton');
        if (authResult && !authResult.error) {
            authorizeButton.style.visibility = 'hidden';
            makeApiCall();
        } else {
            authorizeButton.style.visibility = '';
            authorizeButton.onclick = handleAuthClick;
        }
    }

    function handleAuthClick(event) {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
    }

    // Load the API and make an API call.  Display the results on the screen.
    function makeApiCall() {
        gapi.client.load('plus', 'v1', function () {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function (resp) {
                var heading = document.createElement('h4');
                var image = document.createElement('img');
                image.src = resp.image.url;
                heading.appendChild(image);
                heading.appendChild(document.createTextNode(resp.displayName));

                document.getElementById('content').appendChild(heading);
            });
        });
    }
});