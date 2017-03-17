'use strict'

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(event) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('main-nav .tab:first').click();
};

projectView.setDescriptionTeasers = function() {
  $('.project-description *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function(){
  projectView.handleMainNav();
  projectView.setDescriptionTeasers();
})
