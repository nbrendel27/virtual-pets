import Cat from "../src/models/Cat";
import Dog from "../src/models/Dog";
import VirtualPet from "../src/models/VirtualPet";
import { decay, makePet } from "../src/pet-functions";

describe('VirtualPet constructor', ()=> {
    test('name', ()=>{
        let results: VirtualPet= new VirtualPet("Cat")
        expect(results.name).toBe("Cat");
    })
    test('hunger default', ()=>{
        let results: VirtualPet= new VirtualPet("Cat")
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: VirtualPet= new VirtualPet("Cat")
        expect(results.happiness).toBe(50);
    })
    test('hunger', ()=>{
        let results: VirtualPet= new VirtualPet("Cat", 67, 84)
        expect(results.hunger).toBe(67);
    })
    test('happiness', ()=>{
        let results: VirtualPet= new VirtualPet("Cat", 67, 84)
        expect(results.happiness).toBe(84);
    })
})


describe('describe', ()=> {
   test('Bob 60 50', ()=>{
    const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
     let results=bob.describe()
     expect(results).toBe("Name: Bob, Hunger: 60, Happiness: 50");
   })
   test('Doug 75 30', ()=>{
    const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
     let results=bob.describe()
     expect(results).toBe("Name: Doug, Hunger: 75, Happiness: 30");
   })
})

describe('getSatisfaction', ()=> {
    test('Bob 60 50', ()=>{
     const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
      let results=bob.getSatisfaction()
      expect(results).toBe(-10);
    })
    test('Doug 75 30', ()=>{
     const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
      let results=bob.getSatisfaction()
      expect(results).toBe(-45);
    })
 })

 describe('describe', ()=> {
    test('Bob 60 50', ()=>{
     const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
      let results=bob.makeSound("meow")
      expect(results).toBe("Bob says meow");
    })
    test('Doug 75 30', ()=>{
     const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
      let results=bob.makeSound("growl")
      expect(results).toBe("Doug says growl");
    })
 })

 describe('feed', ()=> {
    test('Bob 60 50', ()=>{
      const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
      bob.feed()
      expect(bob.hunger).toBe(50);
    })
    test('Doug 75 30', ()=>{
      const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
      bob.feed()
      bob.feed()
      expect(bob.hunger).toBe(55);
    })
    test('Doug 75 30', ()=>{
        const bob: VirtualPet = new VirtualPet("Doug", 10, 30);
        bob.feed()
        bob.feed()
        expect(bob.hunger).toBe(0);
    })
 })

 describe('play', ()=> {
    test('Bob 60 50', ()=>{
      const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
      bob.play()
      expect(bob.happiness).toBe(60);
    })
    test('Doug 75 30', ()=>{
      const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
      bob.play()
      bob.play()
      expect(bob.happiness).toBe(50);
    })
    test('Doug 75 30', ()=>{
        const bob: VirtualPet = new VirtualPet("Doug", 10, 99);
        bob.play()
        expect(bob.happiness).toBe(100);
    })
 })


 describe('decay', ()=> {
    test('Bob 60 50', ()=>{
      const bob: VirtualPet = new VirtualPet("Bob", 60, 50);
      decay(bob)
      expect(bob.happiness).toBe(45);
    })
    test('Doug 75 30', ()=>{
      const bob: VirtualPet = new VirtualPet("Doug", 75, 30);
      decay(bob)
      expect(bob.hunger).toBe(80);
    })
    test('Doug 75 30', ()=>{
        const bob: VirtualPet = new VirtualPet("Doug", 10, 99);
        decay(bob);
        decay(bob)
        expect(bob.happiness).toBe(89);
    })
 })


 describe('makePet function', ()=> {
    test('name', ()=>{
        let results: VirtualPet = makePet("Cat", "Cat");
        expect(results.name).toBe("Cat");
    })
    test('hunger default', ()=>{
        let results: VirtualPet= makePet("Cat", "Cat");
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: VirtualPet= makePet("Cat", "Cat");
        expect(results.happiness).toBe(50);
    })
    test('color', ()=>{
        let results: Cat = makePet("Cat", "Cat") as Cat;
        expect(results.color).toBe("black");
    })
    test('type', ()=>{
        let results: VirtualPet= makePet("Cat", "Cat");
        expect(results instanceof Cat).toBeTruthy();
    })
})

describe('makePet function', ()=> {
    test('name', ()=>{
        let results: VirtualPet = makePet("Cat", "Dog");
        expect(results.name).toBe("Cat");
    })
    test('hunger default', ()=>{
        let results: VirtualPet= makePet("Cat", "Dog");
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: VirtualPet= makePet("Cat", "Dog");
        expect(results.happiness).toBe(50);
    })
    test('type', ()=>{
        let results: VirtualPet= makePet("Cat", "Dog");
        expect(results instanceof Dog).toBeTruthy();
    })
})

describe('makePet function', ()=> {
    test('name', ()=>{
        let results: VirtualPet = makePet("Cat", "Lizard");
        expect(results.name).toBe("Cat");
    })
    test('hunger default', ()=>{
        let results: VirtualPet= makePet("Cat", "Lizard");
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: VirtualPet= makePet("Cat", "Lizard");
        expect(results.happiness).toBe(50);
    })
    test('type', ()=>{
        let results: VirtualPet= makePet("Cat", "Lizard");
        expect(results instanceof VirtualPet).toBeTruthy();
    })
})
