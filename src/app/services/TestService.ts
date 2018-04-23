import { mmAngularModule } from '../AngularModuleBootstraper';
import { ITestService } from './ITestService';

export class TestService implements ITestService {
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

    saveUser(someUserData: any) {
        console.log('will save user:', someUserData);
    }

}

mmAngularModule.service('testService', TestService);
