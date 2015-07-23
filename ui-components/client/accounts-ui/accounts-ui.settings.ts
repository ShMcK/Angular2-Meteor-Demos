///<reference path="typings/typings.d.ts"/>
import {Injectable} from 'angular2/angular2';
/**
 * Settings
 *
 */
@Injectable()
export class AccountsUiSettings {
  socialChoices:ISocialChoices[];

  constructor() {
    this.socialChoices = [];
  }
}