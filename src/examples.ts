export interface Dog {
    id: number;
    breed: string;
    age: number;
    name: string;
}

export class MyExamples {

    // this is our array of objects
    dogArray: Dog[] = [
        { id: 1, breed: 'germanshepard', age:8, name: 'ned' },
        { id: 2, breed: 'poodle', age:2, name: 'eustice' },
        { id: 3, breed: 'lab', age:10, name: 'eleanor' }
    ];

    // we want to add an object to an array
    addObject() {
        const newDog: Dog = {id: 4, breed: 'beagle', age:6, name: 'sue' };
        this.dogArray.push(newDog);
    }

    // we want to remove a dog given a certain name
    removeDogByName() {
        this.dogArray.filter(currentDog => {
            return currentDog.name !== 'ned';
        });
    }

    // we want to get just one dog with id 3
    getDogId3() {
        this.dogArray.filter(currentDog =>{
            return currentDog.id === 3;    
        });
    }

}
