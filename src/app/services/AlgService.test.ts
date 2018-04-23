import angular = require('angular');
import { mmAngularModuleName } from '../AngularModuleBootstraper';
import { AlgService } from './AlgService';

describe('AlgService test suite', () => {

    let service: AlgService;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    beforeEach(inject(function($injector: any) {
        service = $injector.get('algService');
    }));

    it('will test array sorting', () => {
        const inputArray = [
            { id: 1, title: 'C'},
            { id: 2, title: 'A'},
            { id: 3, title: 'B'},
        ];
        const sortedArray = service.sortArrayByTitle(inputArray);
        expect(sortedArray[0].title).toBe(inputArray[1].title);
        expect(sortedArray[1].title).toBe(inputArray[2].title);
        expect(sortedArray[2].title).toBe(inputArray[0].title);
    });

    it('will test string highlight', () => {
        const inputString = 'siedze w domu i pracuje';
        const highlightStr = 'w domu';
        const newStr = service.highlightWordInStringManually(inputString, highlightStr);
        expect(newStr).toBe('siedze <span class="highlight">w domu</span> i pracuje');
    });

    it('will test string highlight with replace and join', () => {
        const inputString = 'siedze w domu i pracuje w domu';
        const highlightStr = 'w domu';
        const newStr = service.highlightWordInStringReplaceJoin(inputString, highlightStr);
        expect(newStr).toBe('siedze <span class="highlight">w domu</span> i pracuje <span class="highlight">w domu</span>');
    });

    it('will test filtering numbers by min val', () => {
        const arr = [1, 4, 5, 12, 123, 45, 456];
        const filteredArr = service.filterNumbersByMinVal(arr, 100);
        const expectedArr = [123, 456];
        expect(filteredArr).toEqual(expectedArr);

        const filteredArr2 = service.filterNumbersByMinVal(arr, 40);
        const expectedArr2 = [123, 45, 456];
        expect(filteredArr2).toEqual(expectedArr2);
    });

    it('will test if number is prime', () => {
        expect(service.isPrimeNo(3)).toBeTruthy();
        expect(service.isPrimeNo(5)).toBeTruthy();
        expect(service.isPrimeNo(11)).toBeTruthy();
        expect(service.isPrimeNo(255)).toBeFalsy();
    });

    it('will test removing duplicates', () => {
        const inputArr = [1, 1, 2, 4, 5, 6, 6, 6, 9];
        const expectedArr = [1, 2, 4, 5, 6, 9];
        expect(service.removeDuplicates(inputArr)).toEqual(expectedArr);
    });

    it('will test reversing string', () => {
        const inputStr = 'michal';
        const outStr = 'lahcim';
        expect(service.reverseString(inputStr)).toEqual(outStr);
    });

    it('will test firstNonRepeatingChar in string', () => {
        const inputStr = 'the quick brown fox jumps then quickly blow air';
        const expectedChar = 'f';
        expect(service.finFirstNonRepeating(inputStr)).toBe(expectedChar);

        const inputStr2 = 'jestem w domu i pracuje sobie spokojnie';
        const expectedChar2 = 't';
        expect(service.finFirstNonRepeating(inputStr2)).toBe(expectedChar2);
    });

});

