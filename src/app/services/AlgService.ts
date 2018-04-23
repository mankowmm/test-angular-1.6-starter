import { mmAngularModule } from '../AngularModuleBootstraper';

export class AlgService {
    sortArrayByTitle(array) {
        var newArray = array.slice();
        var sortedArr = newArray.sort(function(a, b) {
            var nameA = a.title.toLowerCase();
            var nameB = b.title.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        // console.log('input arr:', array);
        // console.log('sortedArr', sortedArr);
        return sortedArr;
    }

    highlightWordInStringManually(text, hightLightStr) {
        let newString;
        const startIndex = text.indexOf(hightLightStr);
        const endIndex = startIndex + hightLightStr.length;
        // console.log(startIndex, endIndex);

        var first = text.substring(0, startIndex);
        var highlight = text.substring(startIndex, endIndex);
        var last = text.substring(endIndex, text.length);
        // console.log('parts:', first, highlight, last);

        newString = `${first}<span class="highlight">${highlight}</span>${last}`;

        /* console.log('input text:', text);
        console.log('highlight str:', hightLightStr);
        console.log('newString', newString); */
        return newString;
    }

    highlightWordInStringReplaceJoin(text, hightLightStr) {
        let newString;
        newString = text.split(hightLightStr).join(`<span class="highlight">${hightLightStr}</span>`);
        return newString;
    }

    filterNumbersByMinVal (arr, minNumber) {
        return arr.filter((num) => {
            if (num >= minNumber) {
                return true;
            }
            return false;
        });
    }

    isPrimeNo(n) {
        // console.log('/////////////////////////////////check isPrime//////////////////////');
        var divisor = 2;
        while (n > divisor) {
            /* console.log('n:', n);
            console.log('divisor:', divisor);
            console.log('n % divisor', (n % divisor));
            console.log('-------------------------------------'); */
            if (n % divisor === 0) {
                return false;
            } else {
                divisor++;
            }
        }
        return true;
    }

    removeDuplicates (arr) {
        let unique = new Set();
        arr.forEach(num => {
            unique.add(num);
        });
        const outArray = Array.from(unique);
        return outArray;
    }

    reverseString (str) {
        let strReversed = '';
        /**
         * can cause issues with special chars..
         */
        // let strReversed = str.split('').reverse().join('');
        /**
         * some traditional way
         */
        let strArrReversed = [];
        for (var i = (str.length - 1); i >= 0; i--) {
            strArrReversed.push(str[i]);
        }
        strReversed = strArrReversed.join('');
        return strReversed;
    }

    finFirstNonRepeating (str) {
        const chars = str.split('');
        const charsOccurence = new Map();
        chars.forEach(char => {
            let howManyOfGivenChars = charsOccurence.get(char);
            if (!howManyOfGivenChars) {
                howManyOfGivenChars = 1;
            } else {
                howManyOfGivenChars++;
            }
            charsOccurence.set(char, howManyOfGivenChars);
        });

        let firstChar = '';
        // only for of allows break
        // arr.forEach does not - exception needs to be thrown
        for (let key of Array.from(charsOccurence.keys())) {
            const howManyFound = charsOccurence.get(key);
            if (howManyFound === 1) {
                firstChar = key;
                break;
            }
        }
        return firstChar;
    }


}

mmAngularModule.service('algService', AlgService);
