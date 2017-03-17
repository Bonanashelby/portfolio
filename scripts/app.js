'use strict';

var projects = [];

function Projects (projs) {
  this.title = projs.title;
  this.language = projs.language;
  this.projectUrl = projs.projectUrl;
  this.completedOn = projs.completedOn;
  this.description = projs.description;
}

Projects.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date () - new Date(this.completedOn))/60/60/24/1000);
  this.completeStatus = this.completedOn ? `completed ${this.daysAgo} days ago` : '(draft)';
  return templateRender(this);
};

projectData.sort(function(a,b) {
  return (new Date(b.completedOn)) - (new Date(a.completedOn));
});

projectData.forEach(function(projectObject){
  projects.push(new Projects(projectObject));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
