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

  this.daysAgo = parseInt((new Date () - new Date(this.completedOn))/60/60/24/1000);
  this.completeStatus = this.completedOn ? `completed ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};
// added to start getting ready for json
Projects.loadAll = function(projectData) {
  projectData.sort(function(a,b) {
    return (new Date(b.completedOn) - new Date(a.completedOn));
  });

  projectData.forEach(function(ele){
    Projects.all.push(new Projects(ele));
  })
}
// added to start getting ready for json
Projects.fetchAll = function() {
  if (localStorage.projectData) {
    Projects.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectInfo.json')
    .then(function(data){
      localStorage.projectData = JSON.stringify(data);
      Projects.loadAll(data);
      console.log(Projects.all);
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
