'use strict'

var projectView = {};

projectView.populateFilters = function() {
  $('project').each(function (){
    if(!$(this).hasClass('template'))
    {
      var val = $(this).attr('data-title');
      var optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#title-filter option[value="${val}"]`).length === 0){
        $('#title-filter').append(optionTag);
      }

      val =
      $(this).attr('data-language');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#language-filter option[value="${val}"]`).length === 0) {
        $('#language-filter').append(optionTag);
      }
    }
  });
};

projectView.handleTitleFilter = function() {
  $('#title-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $(`project[data-title="${$(this).val()}"]`).fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('#language-filter').val('');
  });
};

projectView.handleLanguageFilter = function () {
  $('#language-filter').on('change', function () {
    if ($(this).val()) {
      $('project').hide();
      $(`project[data-language="${$(this).val()}"]`).fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('project-filter').val('');
  })
}

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
    let test = $(this).attr('data-content');
    console.log(test, 'what is here?');

    if(test === 'home'){
      $('.tab-content').show();
    }
  });
};

projectView.setDescriptionTeasers = function() {
  $('.project-description *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

projectView.populateFilters();
projectView.handleLanguageFilter();
projectView.handleTitleFilter();
projectView.handleMainNav();
projectView.setDescriptionTeasers();
