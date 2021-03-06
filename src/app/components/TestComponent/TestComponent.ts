import { mmAngularModule } from '../../AngularModuleBootstraper';
import { TestService } from '../../services/TestService';

export class TestComponentController {
    static $inject = ['testService'];
    public post: any;
    public id: number;
    constructor(private testService: TestService) {}
    $onInit() {
        this.testService.getPostDetail(this.id).then(
            (post) => {
                this.post = post;
            }
        );
    }
}

export class TestComponent {
    public controller: any;
    public template: string;
    public bindings: any;
    constructor() {
        this.controller = TestComponentController;
        this.template = `<div class="test-component">Test content {{$ctrl.id}}</div>`;
        this.bindings = {
            id: '@'
        };
    }
}
mmAngularModule.component('testComponent', new TestComponent());

