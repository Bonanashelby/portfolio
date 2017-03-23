'use strict';

// var projects = [];

function Projects (projs) {
  this.title = projs.title;
  this.language = projs.language;
  this.projectUrl = projs.projectUrl;
  this.completedOn = projs.completedOn;
  this.description = projs.description;
}
// added to start getting ready for json
Projects.all = [];

// Projects.prototype.toHtml = function(){
//   var source = $('#project-template').html();
//   var templateRender = Handlebars.compile(source);
//
//   this.daysAgo = parseInt((new Date () - new Date(this.completedOn))/60/60/24/1000);
//   this.completeStatus = this.completedOn ? `completed ${this.daysAgo} days ago` : '(draft)';
//   return templateRender(this);
// };

// added to start getting ready for json
Projects.prototype.toHtml = function (){
  let template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date () - new Date(this.completedOn))/60/6-/24/1000);
  this.completeStatus = this.completedOn ? `completed ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};
// added to start getting ready for json
Project.loadAll = function(projectData) {
  projectData.sort(function(a,b) {
    return (new Date(b.completedOn)) - new Date(a.completedOn));
  });

  projectData.forEach(function(ele){
    Project.all.push(new Project(ele));
  })
}
// added to start getting ready for json
Project.fetchAll = function() {
  if (localStorage = projectData) {
    Project.loadAll(JSON.parse(localStorage.prprojectData));
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectInfo.json')
    .then(function(data){
      localStorage.projectData = JSON.stringify(data);
      Project.loadAll(data);
      console.log(Project.all);
      projectView.initIndexPage();
    }, function(err) {
        console.error(err);
    })
  }
}


// projectData.sort(function(a,b) {
//   return (new Date(b.completedOn)) - (new Date(a.completedOn));
// });
//
// projectData.forEach(function(projectObject){
//   projects.push(new Projects(projectObject));
// });

// projects.forEach(function(a){
//   $('#projects').append(a.toHtml());
// });
