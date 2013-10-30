
// this is for developing. Will refresh the page whenever it is focused
// window.onfocus = function() {
//     location.reload();
// }

// helper for including html files in a page
includeHTML = function(id, path) {
    if(path === undefined || path === null){
        $("#" + id).load(id + ".html");
    }
    else {
        $("#" + id).load(path + id + ".html");
    }
}
