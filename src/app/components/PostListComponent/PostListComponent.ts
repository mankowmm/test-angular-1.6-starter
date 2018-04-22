import { mmAngularModule } from '../../AngularModuleBootstraper';
import { PostsService } from '../../services/PostsService';

export class PostListController {
    public static $inject = ['postsService'];
    public posts = [];
    constructor(private postsService: PostsService) {}

    $onInit() {
        console.log('will call for posts..');
        this.postsService.getPosts().then(
            (posts) => {
                console.log('posts retreived..', posts);
                this.posts = posts;
                console.log('this.posts:', this.posts);
            },
            (error) => {
                console.log('error', error);
            }
        );
    }
}

export class PostListComponent {
    public controller: any;
    public template: string;
    constructor() {
        this.controller = PostListController;
        this.template = `<div class="post-list-component">Post list content..</div>`;
    }
}
mmAngularModule.component('postListComponent', new PostListComponent());

