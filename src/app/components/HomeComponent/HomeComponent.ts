import { mmAngularModule } from '../../AngularModuleBootstraper';
import './HomeComponent.scss';

export class HomeComponentController {
    public static $inject = [];
}

export class HomeComponent {
    public controller: any;
    public template: string;
    constructor() {
        this.controller = HomeComponentController;
        this.template = `<div class="home-component"><h1>Home content..</h1></div>`;
    }
}
mmAngularModule.component('homeComponent', new HomeComponent());

