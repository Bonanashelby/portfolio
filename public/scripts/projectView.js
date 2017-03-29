'use strict'
var projectView = {};

projectView.populateFilters = function() {
  $('project').each(function (){
    if(!$(this).hasClass('template')) {
      let val = $(this).attr('data-title');
      // line 11 is es6 not jquery
      let optionTag = `<option value="${val}">${val}</option>`;
      // checking a property in line 12 not running a function
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
    $('#title-filter').val('');
  })
}

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
    var test = $(this).attr('data-content');

    if(test === 'home'){
      $('.tab-content').show();
    }
  });
};
projectView.setDescriptionTeasers = function() {
  $('.project-description *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};
//turned a forEach into a map function.
projectView.initIndexPage = function() {
  Projects.all.map((a) => {
    $('#projects').append(a.toHtml())
  });
  $('#timeTaken').append(Projects.all.map((a) => parseInt(a.timeSpent)).reduce((b, c) => b + c));
  //$('#timeTaken').append(Projects.all.timeSpent.reduce((a, b) = a + b);
  projectView.populateFilters();
  projectView.handleLanguageFilter();
  projectView.handleTitleFilter();
  projectView.handleMainNav();
  projectView.setDescriptionTeasers();
};
