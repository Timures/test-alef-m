import './config/jqueryLoad';
import 'popper.js'
import 'bootstrap'
window.jQuery = window.$ = $
// text
// var fileJs = $.getJSON('./resources/js/data/data.json', function( data ) {
// });

var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./resources/js/data/data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();
var jsObject = JSON.stringify(json.text);
//  console.log(jsObject);
var jsParse = jQuery.parseJSON(jsObject);
// console.log(jsParse);
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('collapsed');
    });
    // read file
    $('#first').on('click', function() {
        console.log('click');
        $(jsParse).each(function(index,item) {
            console.log(index, item.firstBlock);
            $('.first-content').html(item.firstBlock);
            $('.second-content').html(item.secondBlock);
            $('.third-content').html(item.thirdBlock);
        });
    });
    

    
});