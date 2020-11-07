class Form{
   constructor(){


   } 
display(){
  var title = createElement('h1', 'Car Racing Game');
  title.position(windowWidth/2-200, windowHeight/2-300);
  var input = createInput('Name');
  input.position(windowWidth/2-150, windowHeight/2-200);
  var button=createButton('PLAY');
  button.position(windowWidth/2-70, windowHeight/2-150);
  button.mousePressed(function(){
      title.hide();
      input.hide();
      button.hide();
      var name = input.value();
      var greeting = createElement('h3', 'Hello '+name);
      greeting.position(windowWidth/2-100, windowHeight/2);
      var greeting1 = createElement('h3', 'Wait for the other players to join....');
      greeting1.position(windowWidth/2-200, windowHeight/2+100);
      playerCount+=1;
      player.updateCount(playerCount);
    });
}










}