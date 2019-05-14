import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals');
  this.route('about');
  this.route('contact');
  this.route('posts', function() {
    this.route('post', { path: '/:hello-world' });
    this.route('my-app',{path: '/:my-app:'});
    this.route('index', { path: '/' });
  });
});

export default Router;
