'use strict';

(function(module) {
  // const projectController = {};
  // projectController.init = (function() {
  //   $('#about').hide();
  //   $('#projects').show();
  // })

  const projectController = {};
  projectController.index = () => {
  Projects.fetchAll(projectView.initIndexPage);

  $('main > section').hide();
  $('#projects').show();
  };

  module.projectController = projectController;
})(window);
