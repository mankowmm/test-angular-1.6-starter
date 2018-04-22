import { mmAngularModule } from '../AngularModuleBootstraper';

export class PostsService {
    public static $inject = ['$q', '$http'];
    constructor(private $q: any, private $http: any) {}

    getPosts() {
        const defer = this.$q.defer();
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
            (result: any) => {
                defer.resolve(result.data);
            },
            (error: any) => {
                console.error(error);
            }
        );
        return defer.promise;
    }
    getPostDetail(id: number) {
        const defer = this.$q.defer();
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            (result: any) => {
                defer.resolve(result.data);
            },
            (error: any) => {
                console.error(error);
            }
        );
        return defer.promise;
    }

}

mmAngularModule.service('postsService', PostsService);
