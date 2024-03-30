King of the Jungle:

Assignment Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

1. Create a Big Cat class
2. Give the class properties of speed, strength, intelligence, health and durability. And set all attributes to 5
3. Create a Lion class that inherits from the BigCat class and set the Lion's strength to 50 and health to 50
4. Give the Lion class a method called king() that accepts a BigCat object as a parameter and depletes all the objects attributes (sets them to 0). If the object is a Cheetah then it should have a 60% chance of leaving unscathed. (Hint use a random number generator)
5. Create a Leopard class that inherits from the BigCat class and set the Leopard's strength, intelligence, and health to 30
6. Give the Leopard a method called attack that accepts a BigCat object. If the object is a lion then you must run the Lion's king()  function, if the object is anything else then you must deplete the objects health by 15points. If the object is a Cheetah then it should have a 60% chance of leaving unscathed. (Hint use a random number generator)
7. Create a Cheetah class that inherits from the BigCat class and set the Cheetah's speed to 75, and the rest of its attributes to 25
8. Give the Cheetah a method called run() that accepts a BigCat object. If it encounter's a Leopard run the Leopard's attack method. If it encounters the Lion run the Lion's king() method.
9. If the Cheetah runs away from any of its foes then they lose 20 points in health.
10. Now after doing all of this try to create a game where ALL objects get created and All their methods are used. In the end there should only be one winner. Challenge: Try to make your game challenging enough so that the Lion doesn't win every single time.
