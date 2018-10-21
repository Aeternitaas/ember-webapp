import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function() {
  });

  this.route('projects', function() {
  });

  this.route('resume', function() {
  });

  this.route('coursework', function() {
  });
});

export default Router;
