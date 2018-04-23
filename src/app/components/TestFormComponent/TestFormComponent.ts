import { mmAngularModule } from '../../AngularModuleBootstraper';
import { TestService } from '../../services/TestService';
import './TestFormComponent.less';

export class TestFormComponentController {
    static $inject = ['testService'];
    public firstName: string;
    public lastName: string;
    public email: string;
    public formSubmitted: boolean = false;
    constructor(private testService: TestService) {
        // console.log('test form controller..');
    }

    $onChanges (changesObj) {
        // console.log('model changed..', changesObj);
    }

    onSubmit(form) {
        // console.log('form submitted..');
        this.formSubmitted = true;
        // console.log('form.valid:', form.$valid);
        if (form.$valid) {
            this.testService.saveUser({});
        }
    }
}

export class TestFormComponent {
    public controller: any;
    public template: string;
    public bindings: any;
    constructor() {
        this.controller = TestFormComponentController;
        this.template = require('./TestFormComponent.html');
        this.bindings = {};
    }
}
mmAngularModule.component('testFormComponent', new TestFormComponent());
