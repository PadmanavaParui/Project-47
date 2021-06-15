// the game class
class Game {
  // the constructor function
          constructor(){
        
          }
        
          // the get state function
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
          }
        
          // the updaqte state function
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          // the start function
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
            // creating the ships
            ship1 = createSprite(100, 100, 10, 10);
            ship2 = createSprite(200, 200, 10, 10);
            ship3 = createSprite(300, 300, 10, 10);
            ship4 = createSprite(400, 400, 10, 10);
          }
        
          // the play function
          play(){
            form.hide();

            Player.getPlayerInfo();

            player.update();
            //display sprites
            drawSprites();
          }      
      }