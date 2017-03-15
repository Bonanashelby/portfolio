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

// Projects.prototype.toHtml = function(){
  // var $newProject = $('project.template').clone();
  // $newProject.removeClass('template');

  // if ()
// };
