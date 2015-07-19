import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'socially'
})
@View({
  //template: "<p>Nothing here {{'yet' + '!'}}</p>"
  templateUrl: "client/socially.ng.html"
})
class Socially {}

bootstrap(Socially);