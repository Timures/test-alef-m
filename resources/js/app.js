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
    // show on first time
    $('.first-content').html('');
        console.log('click f t');
        var firstHtmlElement = '';
        var thirdHtmlElement = '';
        $(jsParse).each(function(index,item) {
            // first 
            $(item.firstBlock).each(function(index_fb, item_fb){
               firstHtmlElement += '<div class="first-content__item"><div class="first-content__logo"></div><div class="first-content__text">'+ item_fb + '</div></div>';
            });
            $('.first-content').append(firstHtmlElement);
            // second
            $('.second-content').html(item.secondBlock);
            // third
            $(item.thirdBlock).each(function(index_tb, item_tb){
                thirdHtmlElement += '<div class="third-content__item">'+ item_tb + '</div>';
             });
            $('.third-content__item').html(thirdHtmlElement);
        });
        
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('collapsed');
    });
    // read file
    $('#first').on('click', function() {
        $('.first-content').html('');
        console.log('click f t');
        var firstHtmlElement = '';
        var thirdHtmlElement = '';
        $(jsParse).each(function(index,item) {
            // first 
            $(item.firstBlock).each(function(index_fb, item_fb){
               firstHtmlElement += '<div class="first-content__item"><div class="first-content__logo"></div><div class="first-content__text">'+ item_fb + '</div></div>';
            });
            $('.first-content').append(firstHtmlElement);
            // second
            $('.second-content').html(item.secondBlock);
            // third
            $(item.thirdBlock).each(function(index_tb, item_tb){
                thirdHtmlElement += '<div class="third-content__item">'+ item_tb + '</div>';
             });
            $('.third-content__item').html(thirdHtmlElement);
        });
    });
    

    
});