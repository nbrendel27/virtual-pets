import Cat from "../src/models/Cat";
import { decay } from "../src/pet-functions";

describe('Cat', ()=> {
    test('name', ()=>{
        let results: Cat= new Cat("Cat", "orange");
        expect(results.name).toBe("Cat");
    })
    test('color', ()=>{
        let results: Cat= new Cat("Cat", "orange");
        expect(results.color).toBe("orange");
    })
    test('hunger default', ()=>{
        let results: Cat= new Cat("Cat", "orange");
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: Cat= new Cat("Cat", "orange");
        expect(results.happiness).toBe(50);
    })

})


describe('Dog play', ()=> {
    test('Bob 50 50', ()=>{
        const bob: Cat = new Cat("Bob", "orange");
        expect(bob.getAttitude()).toBe("grumpy");
      })
      test('Doug 50 50', ()=>{
        const bob: Cat = new Cat("Doug", "orange");
        bob.play()
        bob.play()
        expect(bob.getAttitude()).toBe("inquisitive");
      })
      test('Doug 50 50', ()=>{
          const bob: Cat = new Cat("Doug", "orange");
          decay(bob);
          expect(bob.getAttitude()).toBe("grumpy");
      })
})