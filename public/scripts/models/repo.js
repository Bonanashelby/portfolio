'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      function(info) {
        repos.all = info;
      },
      err => console.error(err)
    )
    .then(callback)
  };

  repos.with = attr =>
  repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
