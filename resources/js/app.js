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
// $(jsParse[1]).each(function(m_index, m_item) {
//     console.log(m_index, m_item);
// });

$(document).ready(function () {
    // show on first time
    $('.first-content').html('');
        // console.log('click f t');
    getContentByMenu(jsParse[0]);
    // show sidebar  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('collapsed');
    });
    // read json file
    $('#first').on('click', function() {
        $('.first-content').html('');
        // console.log('click f t');
        getContentByMenu(jsParse[0]);
        // close menu
        $('#sidebar').toggleClass('collapsed');
    });
    // second 
    $('#second').on('click', function() {
        $('.first-content').html('');
        // console.log('click s t');
        getContentByMenu(jsParse[1]);
        // close menu
        $('#sidebar').toggleClass('collapsed');
    });
    // third
    $('#third').on('click', function() {
        $('.first-content').html('');
        // console.log('click s t');
        getContentByMenu(jsParse[2]);
        // close menu
        $('#sidebar').toggleClass('collapsed');
    });

    // functions
    function getContentByMenu(jsonArray) {
        $(jsonArray).each(function(index,item) {
            var firstHtmlElement = '';
            var thirdHtmlElement = '';
            // first 
            $(item.firstBlock).each(function(index_fb, item_fb){
                if(index_fb == 0) {
                    // console.log('first');
                    firstHtmlElement += '<div class="first-content__item first-content__item--first position-sticky"><div class="first-content__logo"></div><div class="first-content__text">'+ item_fb + '</div></div>';
                } else {
                    firstHtmlElement += '<div class="first-content__item"><div class="first-content__logo"></div><div class="first-content__text">'+ item_fb + '</div></div>';
                }
                
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
    }
    
    // document ready
});