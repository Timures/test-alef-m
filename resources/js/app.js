import './config/jqueryLoad';
import 'popper.js'
import 'bootstrap'
// For some plugins and global use.
window.jQuery = window.$ = $

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});