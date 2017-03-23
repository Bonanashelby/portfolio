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
    $('title-filter').val('');
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
// initializing new project page here
projectView.initNewProjectPage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#project-json').on('focus', function(){
    this.select();
  });

  $('#new-project').on('change', 'input, textarea', projectView.create);
};
// this is where we create the new project
projectView.create = function() {
  let project;
  $('#projects').empty();

  project = new Project({
    title: $('#project-title').val(),
    language: $('#project-language').val(),
    projectUrl: $('#project-url').val(),
    description: $('#project-description').val(),
    completedOn: $('#project-completed:checked').length ? new Date() : null
  });

  $('projects').append(project.toHtml());
  $('pre-code').each(function(i, block){
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#project-json').val(`${JSON.stringify(project)},`);
};
//  initializing prjoect index page here
projectView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml())
  });

  projectView.populateFilters();
  projectView.handleLanguageFilter();
  projectView.handleTitleFilter();
  projectView.handleMainNav();
  projectView.setDescriptionTeasers();
};
