
$().ready(function() {
    console.log("Posting!!!");

    var postTemplate = '#postTemplate';
    var elementToInject = '#posts';

    console.log($(postTemplate).html());
    var post = {
        heading: "Coming Soon!",
        date: "September 9, 2013",
        body: "It's time for Battle Royale once more and the team is hard at work to pull off a great event.<br><br>We'll be releasing <strong>Ticket</strong>, <strong>Venue</strong>, and <strong>Date</strong> information as it comes in during the next few weeks so stay tuned and check back here for updates. We're having trouble booking our usual venue, and are working hard on finding an alternative. <br><br> Tournaments have been decided upon so be sure to check out the <a href='tournaments.html'>Tournaments</a> page"
    }

    $(elementToInject).append($(postTemplate));

});
