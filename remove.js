var INTERVAL_PERIOD = 200;

window.setInterval(function() {
    var surveyPosts = $('#contentArea ._4-u2:contains(surveymonkey.com)');
    if (surveyPosts.length) {
        surveyPosts.remove();
    }
}, INTERVAL_PERIOD);