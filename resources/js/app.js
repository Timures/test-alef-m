import './config/jqueryLoad';
import 'popper.js'
import 'bootstrap'
// import 'animate.css'
// For some plugins and global use.
window.jQuery = window.$ = $
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('collapsed');
        $('#content').toggleClass('active');
        console.log("hide show");
        
    });

});