'use strict';
(function(module) {
  function Projects (projs) {
    this.title = projs.title;
    this.language = projs.language;
    this.projectUrl = projs.projectUrl;
    this.completedOn = projs.completedOn;
    this.description = projs.description;
    this.timeSpent = projs.timeSpent;
  }
  Projects.all = [];

  Projects.prototype.toHtml = function (){
    let template = Handlebars.compile($('#project-template').text());

    this.daysAgo = parseInt((new Date () - new Date(this.completedOn))/60/60/24/1000);
    this.completeStatus = this.completedOn ? `completed ${this.daysAgo} days ago` : '(draft)';

    return template(this);
  };

  Projects.loadAll = function(projectData) {
    projectData.sort(function(a,b) {
      return (new Date(b.completedOn) - new Date(a.completedOn));
    });
  // changed a forEach into a map statment. Not really a neccesary change.
    projectData.map((ele) => {
      Projects.all.push(new Projects(ele));
    })
  }

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

module.Projects = Projects;
})(window);
