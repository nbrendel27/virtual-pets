import Dog from "../src/models/Dog";

describe('Dog', ()=> {
    test('name', ()=>{
        let results: Dog= new Dog("Cat")
        expect(results.name).toBe("Cat");
    })
    test('hunger default', ()=>{
        let results: Dog= new Dog("Cat")
        expect(results.hunger).toBe(50);
    })
    test('happiness default', ()=>{
        let results: Dog= new Dog("Cat")
        expect(results.happiness).toBe(50);
    })

})


describe('Dog play', ()=> {
    test('Bob 60 50', ()=>{
        const bob: Dog = new Dog("Bob", 60, 50);
        bob.play()
        expect(bob.happiness).toBe(65);
      })
      test('Doug 75 30', ()=>{
        const bob: Dog = new Dog("Doug", 75, 30);
        bob.play()
        bob.play()
        expect(bob.happiness).toBe(60);
      })
      test('Doug 75 30', ()=>{
          const bob: Dog = new Dog("Doug", 10, 99);
          bob.play()
          expect(bob.happiness).toBe(100);
      })
})

