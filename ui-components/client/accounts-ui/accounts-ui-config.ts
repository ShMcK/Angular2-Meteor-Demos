///<reference path="typings/typings.d.ts"/>
import {Control, Validators} from 'angular2/angular2';

var defaultForm = {
  controls: {
    username: new Control(''),
    email: new Control('', Validators.required),
    password: new Control('', Validators.required)
  },
  fields: [{
    name: 'username',
    type: 'text',
  }, {
    name: 'email',
    type: 'email'
  }, {
    name: 'password',
    type: 'password'
  }]
};

export var uiConfig = {
  login: {
    title: 'Login',
    target: 'login',
    form: defaultForm
  },
  register: {
    title: 'Sign up',
    target: 'register',
    form: defaultForm
  },
  passwordReset: {
    title: 'Password Reset',
    target: 'forgotPassword',
    form: {
      fields: [{
        name: 'email',
        type: 'email'
      }],
      controls: {
        email: new Control('', Validators.required)
      }
    }
  }
};