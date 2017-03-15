'use strict';

var projects = [];

// projects need a title, what language they are linked as the url, completed on date and small description
function Projects (projs) {
  this.title = projs.title;
  this.language = projs.language;
  this.projectUrl = projs.projectUrl;
  this.completedOn = projs.completedOn;
  this.description = projs.description;
}
// just started this part - but did not finish the JS part
Projects.prototype.toHtml = function(){
  var $newProject = $('project.template').clone();
  $newProject.removeClass('template');

  if (!this.completedOn) $newProject.addClass('draft');
  $newProject.data('language', this.language);

  $newProject.find('h1').text(this.title);
  $newProject.find('a').text(this.language);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('time').text(this.completedOn);
  $newProject.find('project-description').html(this.description);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.completedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};
