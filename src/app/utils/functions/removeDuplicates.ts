export function removeDuplicates<T>(originalArray:T[], prop:string):T[] {
    var newArray = [];
    var lookupObject  = {} as any;

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}