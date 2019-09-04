 import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';

// import 'webpack-jquery-ui/accordion';
// import 'webpack-jquery-ui/autocomplete';
// import 'webpack-jquery-ui/button';
// import 'webpack-jquery-ui/checkboxradio';
// import 'webpack-jquery-ui/controlgroup';
 // import 'webpack-jquery-ui/datepicker';
// import 'webpack-jquery-ui/dialog';
// import 'webpack-jquery-ui/tabs';
// import 'webpack-jquery-ui/menu';
// import 'webpack-jquery-ui/progressbar';
// import 'webpack-jquery-ui/selectmenu';
// import 'webpack-jquery-ui/tooltip';
// import 'webpack-jquery-ui/slider';
// import 'webpack-jquery-ui/spinner';



jQuery(document).ready(function($){
    $( function() {
        $( "#datepicker" ).datepicker({
        showOn: "button",
        // buttonImage: "images/calendar.gif",
        // buttonImageOnly: true,
        buttonText: "Select date"
        });
    });
});