// ==UserScript==
// @name        clear-guest Login
// @namespace   oracle.com
// @description A user script for the clear-guest login page with improved usability, especially for mobile devices
// @include     http://webauth-redirect.oracle.com/fs/customwebauth/login.html*
// @include     https://webauth-redirect.oracle.com/fs/customwebauth/login.html*
// @require     https://code.jquery.com/jquery-2.2.2.min.js
// @version     1.0.1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle(
`body {
    font-family: sans-serif;
    font-size: 12pt;
}

form {
    margin-left: auto;
    margin-right: auto;
    max-width: 20em;
}

form div {
    margin-bottom: 1em;
}

input {
    font-size: 12pt;
    width: 100%;
}

#submitButton {
    height: 3em;
}
`);

$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');
$('img').remove();

var form = $('form');
form.children('table').remove();
form.children().not('input').remove();

form.append('<h2>clear-guest Login</h2>')
    .append('<div class="field"><label>Username:</label><br/><input id="usernameInput" type="text" name="username" maxlength="63" value="guest"/></div>')
    .append('<div class="field"><label>Password:</label><br/><input id="passwordInput" type="Password" name="password" maxlength="63"/></div>')
    .append('<input id="submitButton" type="button" name="Submit" value="Login" onclick="submitAction();"/>');
    
$('#passwordInput').focus();