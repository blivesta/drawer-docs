IScroll = require('iscroll');
var $ = jQuery = require('jquery');
var drawer = require('jquery-drawer');
// var dropdown = require('bootstrap/js/dropdown.js'); // bootstrap v3.3.5
var dropdown = require('bootstrap/dist/js/umd/dropdown.js'); // bootstrap v4.0.0-alpha

$(document).on('ready', function(){
  $('.drawer')
    .drawer()
    .on('drawer.opened',function(){
      console.log('opened');
    })
    .on('drawer.closed',function(){
      console.log('closed');
    });

  $('.drawer-dropdown-hover').hover(function(){
    $('[data-toggle="dropdown"]', this).trigger('click');
  });
});
