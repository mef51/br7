
// this is for developing. Will refresh the page whenever it is focused
// window.onfocus = function() {
//     location.reload();
// }

// helper for including html files in a page
include = function(id) {
    $("#" + id).load(id + ".html");
}
