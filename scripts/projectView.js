'use strict'

var projectView = {};

projectView.populateFilters = function() {
  $('project').each(function (){
    if(!$(this).hasClass('template'))
    {
      var val = $(this).find('address a').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#project-filter option[value="${val}"]`).length === 0){
        $('#project-filter').append(optionTag);
      }

      val =
      $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
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
    if ($(this).val() {
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
  });

  $('.main-nav .tab:first').click();
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
