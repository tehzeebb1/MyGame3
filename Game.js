class Game
{
   constructor()
   {

    
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log("gameState is:"+gameStateRef)
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   
   async start()
   {
    if (gameState === 0)
    {
        console.log("inside start");
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here
    player1 = createSprite(525, 250)
    player1.addImage(player1Img);
    player1.scale = 0.2;
    player2 = createSprite(545, 250)
    player2.addImage(player2Img);
    player2.scale = 0.2;
    players=[player1,player2];
    createWallPuzzle();
    createCoins();

   
    

   }
   

   play()
   {
        form.hide();
        spawnCoin();
         Player.getPlayerInfo();
         if(allPlayers !== undefined){
            
            var index = 0;
            var x = 525;
            var y;
            var conf;
                for (var plr in allPlayers)
                {

                    index = index+1;
                    y = allPlayers[plr].playerY;
                    x = allPlayers[plr].playerX;
                    conf=allPlayers[plr].playerConfidence;
                    players[index-1].x=x;
                    players[index-1].y=y;
                    players[index-1].conf=conf;

                   

                }
            

         }

         for(var i=0;i<players.length;i++)
         {
             console.log("i am here")
             if(players[i].isTouching(coin))
             {
                players[i].conf=players[i].conf+1;
                console.log( players[i].conf)
                players.playerConfidence= players[i].conf
                player.update();
             }
         }
       
    
        
 
    // form.hide();
    if(keyIsDown(UP_ARROW)&& player.index != null)
    {
        console.log("It worked!");
        player.playerY = player.playerY-2;
        player.update();
    }
    if(keyIsDown(DOWN_ARROW)&& player.index != null)
    {
        player.playerY = player.playerY+2;
        player.update();
    }
    if(keyIsDown(RIGHT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX+2;
        player.update();
    }
    if(keyIsDown(LEFT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX-2;
        player.update();
    }
    
   

        text(mouseX + "," + mouseY, mouseX, mouseY);
      drawSprites();
      fill("black");
      textSize(20);
       text("CONFIDENCE:"+confidence,900,24);
      
   }
   end()
   {
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 
   } 
} 

function spawnCoin()
{
   
        //write code here to spawn the clouds
        if (frameCount % 30 === 0) {
          var reward = createSprite(600,120,40,10);
          reward.addAnimation("rewardCoin", rewardImg);
          reward.scale = 0.2;
          reward.y = Math.round(random(100,1000));
         reward.x = Math.round(random(100, 1000));
        
         
          
          //add each cloud to the group
          rewardGroup.add(reward);
        }
        
      
}
function createCoins()
{
coin = createSprite(600,120,40,10);
coin.setAnimation("coin",rewardImg);
/*coin2 = createSprite(48, 54);
coin2.setAnimation("coin");
coin3 = createSprite(48, 69);
coin3.setAnimation("coin");
coin4 = createSprite(48, 84);
coin4.setAnimation("coin");
coin5 = createSprite(48, 99);
coin5.setAnimation("coin");
coin6 = createSprite(48, 114);
coin6.setAnimation("coin");
coin7 = createSprite(48, 129);
coin7.setAnimation("coin");
coin8 = createSprite(48, 144);
coin8.setAnimation("coin");
coin9 = createSprite(48, 159);
coin9.setAnimation("coin");
coin10 = createSprite(48, 174);
coin10.setAnimation("coin");
coin11 = createSprite(48, 189);
coin11.setAnimation("coin");
coin12 = createSprite(48, 204);
coin12.setAnimation("coin");
coin13 = createSprite(48, 219);
coin13.setAnimation("coin");
coin14 = createSprite(48, 234);
coin14.setAnimation("coin");*/

}
function createWallPuzzle()
{
    var wall = createSprite(505, 250, 10,100);
         wall.shapeColor = "Red";
         var wall2 = createSprite(540, 200, 80, 10);
         wall2.shapeColor ="Red";
         var wall3 = createSprite(575, 220, 10, 40);
         wall3.shapeColor = "Red";
         var wall4 = createSprite(575, 280, 10, 40);
         wall4.shapeColor = "Red";
         var wall5 = createSprite(540, 300, 80, 10);
         wall5.shapeColor = "Red"
         var wall6 = createSprite(595, 235, 50, 10);
         wall6.shapeColor = "Red";
         var wall7 = createSprite(595, 265, 50, 10);
         wall7.shapeColor = "Red";
         var wall8 = createSprite(625, 295, 10, 70);
         wall8.shapeColor = "Red";
         var wall9 = createSprite(625, 220, 10, 40);
         wall9.shapeColor = "Red";
         var wallx = createSprite(650, 250, 10, 100);
         wallx.shapeColor = "Red";
         var wally = createSprite(680, 300, 70, 10);
         wally.shapeColor = "Red";
         var wallx2 = createSprite(650, 325, 50, 10);
         wallx2.shapeColor = "Red";
         var wallx3 = createSprite(680, 345, 10, 50);
         wallx3.shapeColor = "Red";
         var wallx4 = createSprite(705, 370, 10, 100);
         wallx4.shapeColor = "Red";
         var wallx5 = createSprite(730, 325, 50, 10);
         wallx5.shapeColor = "Red";
         var wallx6 = createSprite(620, 370, 130, 10);
         wallx6.shapeColor = "Red";
         var wallx7 = createSprite(665, 395, 40, 10);
         wallx7.shapeColor = "Red";
         var wallx8 = createSprite(680, 405, 10, 30);
         wallx8.shapeColor = "Red";
         var wallx9 = createSprite(692, 420, 34, 10);
         wallx9.shapeColor = "Red";
         var wallx20 = createSprite(650, 430, 10, 60);
         wallx20.shapeColor = "Red";
         var wallx21 = createSprite(625, 405, 10, 30);
         wallx21.shapeColor = "Red";
         var wallx22 = createSprite(600, 415, 40, 10);
         wallx22.shapeColor = "Red";
         var wallx23 = createSprite(590, 435, 70, 10);
         wallx23.shapeColor = "Red";
         var wallx24 = createSprite(625, 450, 10, 40);
         wallx24.shapeColor = "Red";
         var wallx25 = createSprite(600, 395, 40, 10);
         wallx25.shapeColor = "Red";
         var wallx26 = createSprite(575, 390, 10, 35);
         wallx26.shapeColor = "Red";
        // wallx26.velocityY = 1; 
         // wallx26 add velocity Y and bounce off
         var wallx27 = createSprite(550, 425, 10, 30);
         wallx27.shapeColor = "Red";
         var wallx28 = createSprite(550, 380, 10, 30);
         wallx28.shapeColor = "Red";
         var wallx29 = createSprite(525, 390, 40, 10);
         wallx29.shapeColor = "Red";
         var wallx30 = createSprite(525, 415, 40, 10);
         wallx30.shapeColor = "Red";
         var wallx31 = createSprite(505, 430, 10, 40);
         wallx31.shapeColor = "Red";
         var wallx32 = createSprite(505, 375, 10, 40);
         wallx32.shapeColor = "Red";
         var wallx33 = createSprite(485, 402, 10, 95);
         wallx33.shapeColor = "Red";
         var wallx34 = createSprite(470, 453, 40, 10);
         wallx34.shapeColor = "Red";
         var wallx35 = createSprite(525, 453, 50, 10);
         wallx35.shapeColor = "Red";
         var wallx36= createSprite(555, 463, 10, 30);
         wallx36.shapeColor = "Red";
         var wallx37 = createSprite(525, 473, 50, 10);
         wallx37.shapeColor = "Red";
         var wallx38 = createSprite(455, 405, 10, 90);
         wallx38.shapeColor = "Red";
         var wallx39 = createSprite(465, 473, 70, 10);
         wallx39.shapeColor = "Red";
         var wallx40 = createSprite(435, 415, 10, 110);
         wallx40.shapeColor = "Red";
         var wallx41 = createSprite(415, 355, 50, 10);
         wallx41.shapeColor = "Red";
         var wallx42 = createSprite(455, 355, 10, 50);
         wallx42.shapeColor = "Red";
         var wallx43 = createSprite(415, 335, 70, 10);
         wallx43.shapeColor = "Red";
         var wallx44 = createSprite(380, 315, 10, 50);
         wallx44.shapeColor = "Red";
         var wallx45 = createSprite(390, 425, 10, 150);
         wallx45.shapeColor = "Red";
         var wallx46 = createSprite(370, 432, 10, 165);
         wallx46.shapeColor = "Red";
         var wallx47 = createSprite(460, 500, 150, 10);
         wallx47.shapeColor = "Red";
         var wallx48 = createSprite(450, 518, 170, 10);
         wallx48.shapeColor = "Red";
         var wallx49 = createSprite(530, 534, 10, 40);
         wallx49.shapeColor = "Red";
         var wallx50 = createSprite(550, 534, 10, 40);
         wallx50.shapeColor = "Red";
         var wallx51 = createSprite(540, 550, 30, 10);
         wallx51.shapeColor = "Red";
         var wallx52 = createSprite(595, 518, 100, 10);
         wallx52.shapeColor = "Red";
         var wallx53 = createSprite(650, 491, 10, 65);
         wallx53.shapeColor = "Red";
         var wallx54 = createSprite(575, 500, 90, 10);
         wallx54.shapeColor = "Red";
         var wallx55 = createSprite(625, 487, 10, 36);
         wallx55.shapeColor = "Red";
         var wallx56 = createSprite(720, 250, 10, 110);
         wallx56.shapeColor = "Red";
         var wallx57 = createSprite(740, 265, 10, 80);
         wallx57.shapeColor = "Red";
         var wallx58= createSprite(757, 300, 25, 10);
         wallx58.shapeColor = "Red";
         var wallx59 = createSprite(770, 265, 10, 80);
         wallx59.shapeColor = "Red";
         var wallx60 = createSprite(790, 250, 10, 110);
         wallx60.shapeColor = "Red";
         var wallx61 = createSprite(740, 220, 30, 10);
         wallx61.shapeColor = "Red";
         //wallx61.velocityX
         var wallx62 = createSprite(735, 200, 20, 10);
         wallx62.shapeColor = "Red";
         var wallx63 = createSprite(780, 200, 20, 10);
         wallx63.shapeColor = "Red";
         var wallx64 = createSprite(770, 185, 10, 40);
         wallx64.shapeColor = "Red";
         var wallx65 = createSprite(750, 185, 10, 40);
         wallx65.shapeColor = "Red";
         var wallx66 = createSprite(760, 150, 100, 10);
         wallx66.shapeColor = "Red";
         var wallx67 = createSprite(790, 170, 40, 10);
         wallx67.shapeColor = "Red";
         var wallx68 = createSprite(730, 170, 40, 10);
         wallx68.shapeColor = "Red";
         var wallx69 = createSprite(760, 370, 10, 100);
         wallx69.shapeColor = "Red";
         var wallx70 = createSprite(780, 365, 10, 80);
         wallx70.shapeColor = "Red";
         var wallx71 = createSprite(800, 365, 10, 80);
         wallx71.shapeColor = "Red";
         var wallx72 = createSprite(820, 370, 10, 100);
         wallx72.shapeColor = "Red";
         var wallx73 = createSprite(790, 325, 30, 10);
         wallx73.shapeColor = "Red";
         var wallx74 = createSprite(775, 405, 30, 10);
         wallx74.shapeColor = "Red";
         //wallx74.velocityX
         var wallx75 = createSprite(805, 305, 40, 10);
         wallx75.shapeColor = "Red";
         var wallx76 = createSprite(820, 310, 10, 20);
         wallx76.shapeColor = "Red";
         var wallx77 = createSprite(768, 420, 26, 10);
         wallx77.shapeColor = "Red";
         var wallx78 = createSprite(812, 420, 26, 10);
         wallx78.shapeColor = "Red";
         var wallx79 = createSprite(780, 440, 10, 50);
         wallx79.shapeColor = "Red";
         var wallx80= createSprite(800, 440, 10, 50);
         wallx80.shapeColor = "Red";
         var wallx81 = createSprite(810, 465, 30, 10);
         wallx81.shapeColor = "Red";
         var wallx82 = createSprite(770, 465, 30, 10);
         wallx82.shapeColor = "Red";
         var wallx83 = createSprite(790, 482, 70, 10);
         wallx83.shapeColor = "Red";
         var wallx84 = createSprite(810, 135, 10, 40);
         wallx84.shapeColor = "Red";
         var wallx85 = createSprite(815, 170, 30, 10);
         wallx85.shapeColor = "Red";
         var wallx86 = createSprite(830, 145, 10, 60);
         wallx86.shapeColor = "Red";
         var wallx87 = createSprite(795, 120, 40, 10);
         wallx87.shapeColor = "Red";
         var wallx88 = createSprite(845, 120, 40, 10);
         wallx88.shapeColor = "Red";
         var wallx89 = createSprite(820, 100, 90, 10);
         wallx89.shapeColor = "Red";
         var wallx90 = createSprite(870, 85, 10, 40);
         wallx90.shapeColor = "Red";
         var wallx91 = createSprite(870, 135, 10, 40);
         wallx91.shapeColor = "Red";
         var wallx92 = createSprite(890, 110, 10, 90);
         wallx92.shapeColor = "Red";
         var wallx93 = createSprite(710, 160, 10, 30);
         wallx93.shapeColor = "Red";
         var wallx94 = createSprite(625, 180, 10, 40);
         wallx94.shapeColor = "Red";
         var wallx95 = createSprite(650, 160, 10, 90);
         wallx95.shapeColor = "Red";
         var wallx96 = createSprite(720, 120, 130, 10);
         wallx96.shapeColor = "Red";
         var wallx97 = createSprite(560, 140, 140, 10);
         wallx97.shapeColor = "Red";
         var wallx98 = createSprite(560, 160, 140, 10);
         wallx98.shapeColor = "Red";
         var wallx99 = createSprite(625, 120, 10, 30);
         wallx99.shapeColor = "Red";
         var wallx100 = createSprite(698, 100, 155, 10);
         wallx100.shapeColor = "Red";
         var wallx101 = createSprite(900, 150, 30, 10);
         wallx101.shapeColor = "Red";
         var wallx102 = createSprite(910, 220, 10, 110);
         wallx102.shapeColor = "Red";
         var wallx103 = createSprite(870, 160, 10, 20);
         wallx103.shapeColor = "Red";
         var wallx104 = createSprite(885, 170, 40, 10);
         wallx104.shapeColor = "Red";
         var wallx105 = createSprite(930, 210, 10, 70);
         wallx105.shapeColor = "Red";
         var wallx106 = createSprite(950, 210, 10, 70);
         wallx106.shapeColor = "Red";
         var wallx107 = createSprite(970, 220, 10, 110);
         wallx107.shapeColor = "Red";
         var wallx108 = createSprite(940, 170, 30, 10);
         wallx108.shapeColor = "Red";
         var wallx109 = createSprite(940, 150, 50, 10);
         wallx109.shapeColor = "Red";
         var wallx110 = createSprite(970, 160, 10, 30);
         wallx110.shapeColor = "Red";
         var wallx111 = createSprite(925, 250, 30, 10);
         wallx111.shapeColor = "Red";
         //wallx111.velocityX
         var wallx112 = createSprite(925, 270, 20, 10);
         wallx112.shapeColor = "Red";
         var wallx113 = createSprite(955, 270, 20, 10);
         wallx113.shapeColor = "Red";
         var wallx114 = createSprite(490, 115, 10, 60);
         wallx114.shapeColor = "Red";
         var wallx115 = createSprite(490, 185, 10, 60);
         wallx115.shapeColor = "Red";
         var wallx116 = createSprite(470, 115, 10, 60);
         wallx116.shapeColor = "Red";
         var wallx117 = createSprite(470, 185, 10, 60);
         wallx117.shapeColor = "Red";
         var wallx118 = createSprite(440, 140, 50, 10);
         wallx118.shapeColor = "Red";
         var wallx119 = createSprite(440, 160, 50, 10);
         wallx119.shapeColor = "Red";
         var wallx120 = createSprite(410, 180, 10, 50);
         wallx120.shapeColor = "Red";
         var wallx121 = createSprite(390, 180, 10, 50);
         wallx121.shapeColor = "Red";
         var wallx122 = createSprite(400, 140, 30, 10);
         wallx122.shapeColor = "Red";
         var wallx123 = createSprite(390, 150, 10, 20);
         wallx123.shapeColor = "Red";
         var wallx124 = createSprite(420, 200, 30, 10);
         wallx124.shapeColor = "Red";
         var wallx125 = createSprite(390, 215, 10, 20);
         wallx125.shapeColor = "Red";
         var wallx126 = createSprite(440, 220, 112, 10);
         wallx126.shapeColor = "Red"
         var wallx127 = createSprite(430, 205, 10, 20);
         wallx127.shapeColor = "Red"
         var wallx128 = createSprite(870, 55, 10, 25);
         wallx128.shapeColor = "Red";
         var wallx129 = createSprite(905, 48, 60, 10);
         wallx129.shapeColor = "Red";
         var wallx130 = createSprite(915, 70, 40, 10);
         wallx130.shapeColor = "Red";
         var wallx131 = createSprite(930, 85, 10, 40);
         wallx131.shapeColor = "Red";
         var wallx132 = createSprite(940, 48, 20, 10);
         wallx132.shapeColor = "Red";
         var wallx133 = createSprite(950, 75, 10, 63);
         wallx133.shapeColor = "Red";
         var wallx134 = createSprite(930, 120, 10, 30);
         wallx134.shapeColor = "Red";
         var wallx135 = createSprite(955, 130, 40, 10);
         wallx135.shapeColor = "Red";
         var wallx136 = createSprite(960, 105, 30, 10);
         wallx136.shapeColor = "Red";
         var wallx137 = createSprite(980, 150, 10, 50);
         wallx137.shapeColor = "Red";
         var wallx138 = createSprite(980, 85, 10, 50);
         wallx138.shapeColor = "Red";
         var wallx139 = createSprite(1000,85, 10, 50);
         wallx139.shapeColor = "Red";
         var wallx140 = createSprite(1000, 150, 10, 50);
         wallx140.shapeColor = "Red";
         var wallx141 = createSprite(1020, 105, 30, 10);
         wallx141.shapeColor = "Red";      
         var wallx142 = createSprite(1020, 130, 30, 10);
         wallx142.shapeColor = "Red";
         var wallx143 = createSprite(1020, 65, 30, 10);
         wallx143.shapeColor = "Red";
         var wallx144 = createSprite(980, 50, 10, 20);
         wallx144.shapeColor = "Red";
         var wallx145 = createSprite(1010, 45, 50, 10);
         wallx145.shapeColor = "Red";
         var wallx146 = createSprite(1030, 90, 10, 40);
         wallx146.shapeColor = "Red";
         var wallx147 = createSprite(1045, 45, 30, 10);
         wallx147.shapeColor = "Red";
         var wallx148 = createSprite(1055, 85, 10, 70);
         wallx148.shapeColor = "Red";
         var wallx149 = createSprite(1020, 130, 30, 10);
         wallx149.shapeColor = "Red";
         var wallx150 = createSprite(1045, 130, 25, 10);
         wallx150.shapeColor = "Red";
         var wallx151 = createSprite(1055, 125, 10, 20);
         wallx151.shapeColor = "Red";
         var wallx152 = createSprite(1015, 170, 40, 10);
         wallx152.shapeColor = "Red";
         var wallx153 = createSprite(990, 190, 35, 10);
         wallx153.shapeColor = "Red";
         var wallx154 = createSprite(1030, 220, 10, 100);
         wallx154.shapeColor = "Red";
         var wallx155 = createSprite(1010, 240, 10, 110);
         wallx155.shapeColor = "Red";
         var wallx156 = createSprite(1045, 270, 40, 10);
         wallx156.shapeColor = "Red";
         var wallx157 = createSprite(1035, 290, 60, 10);
         wallx157.shapeColor = "Red";
         var wallx158 = createSprite(1070, 240, 10, 70);
         wallx158.shapeColor= "Red";
         var wallx159 = createSprite(1070, 320, 10, 70);
         wallx159.shapeColor = "Red";
         var wallx160 = createSprite(1090, 280, 10, 200);
         wallx160.shapeColor = "Red";
         var wallx161 = createSprite(1060,375, 60, 10);
         wallx161.shapeColor = "Red";
         var wallx162 = createSprite(1045, 350, 40, 10);
         wallx162.shapeColor = "Red";
         var wallx163 = createSprite(950, 300, 10, 50);
         wallx163.shapeColor = "Red";
         var wallx164 = createSprite(930, 300, 10, 50);
         wallx164.shapeColor = "Red";
         var wallx165 = createSprite(905, 320, 40, 10);
         wallx165.shapeColor = "Red";
         var wallx166 = createSprite(895, 340, 60, 10);
         wallx166.shapeColor = "Red";
         var wallx167 = createSprite(930, 357, 10, 45);
         wallx167.shapeColor = "Red";
         var wallx168 = createSprite(980, 375, 100, 10);
         wallx168.shapeColor = "Red";
         var wallx169 = createSprite(1015, 350, 20, 10);
         wallx169.shapeColor = "Red";
         var wallx170 = createSprite(1000, 335, 10, 40);
         wallx170.shapeColor = "Red";
         var wallx171 = createSprite(980, 335, 10, 40);
         wallx171.shapeColor = "Red";
         var wallx172 = createSprite(990, 315, 30, 10);
         wallx172.shapeColor = "Red";
         var wallx173 = createSprite(860, 310, 10, 70);
         wallx173.shapeColor = "Red"; 
         var wallx174 = createSprite(885, 285, 10, 80);
         wallx174.shapeColor = "Red";
         var wallx175 = createSprite(845, 270, 40, 10);
         wallx175.shapeColor = "Red";
         var wallx176 = createSprite(865, 250, 30, 10);
         wallx176.shapeColor = "Red";
         var wallx177 = createSprite(830, 235, 10, 60);
         wallx177.shapeColor = "Red";
         var wallx178 = createSprite(850, 230, 10, 50);
         wallx178.shapeColor = "Red";
         var wallx179 = createSprite(840, 200, 30, 10);
         wallx179.shapeColor = "Red";
         var wallx180 = createSprite(950, 333, 10, 40);
         wallx180.shapeColor = "Red";
         var wallx181 = createSprite(960, 350, 30, 10);
         wallx181.shapeColor = "Red";
         var wallx182 = createSprite(830, 465, 30, 10);
         wallx182.shapeColor = "Red";
         var wallx183 = createSprite(830, 482, 30, 10);
         wallx183.shapeColor = "Red";
         var wallx184 = createSprite(840, 440, 10, 40);
         wallx184.shapeColor = "Red";
         var wallx185 = createSprite(840, 505, 10, 40);
         wallx185.shapeColor = "Red";
         var wallx186 = createSprite(860, 473, 10, 105);
         wallx186.shapeColor = "Red";
         var wallx187 = createSprite(840, 405, 10, 30);
         wallx187.shapeColor = "Red";
         var wallx188 = createSprite(865, 395, 40, 10);
         wallx188.shapeColor = "Red";
         var wallx189 = createSprite(875, 418, 40, 10);
         wallx189.shapeColor = "Red";
         var wallx190 = createSprite(910, 395, 50, 10);
         wallx190.shapeColor = "Red";
         var wallx191 = createSprite(900, 418, 30, 10);
         wallx191.shapeColor = "Red";
         var wallx192 = createSprite(910, 438, 10, 30);
         wallx192.shapeColor = "Red";
         var wallx193 = createSprite(930, 438, 10, 30);
         wallx193.shapeColor = "Red";
         var wallx194 = createSprite(945, 420, 40, 10);
         wallx194.shapeColor = "Red";
         var wallx195 = createSprite(910, 465, 10, 30);
         wallx195.shapeColor = "Red";
         var wallx196 = createSprite(935, 475, 40, 10);
         wallx196.shapeColor = "Red";
         var wallx197 = createSprite(950, 455, 50, 10);
         wallx197.shapeColor = "Red";
         var wallx198 = createSprite(980, 475, 10, 50);
         wallx198.shapeColor = "Red";
         var wallx199 = createSprite(955, 485, 10, 30);
         wallx199.shapeColor = "Red";
         var wallx200 = createSprite(935, 495, 40, 10);
         wallx200.shapeColor = "Red";
         var wallx201 = createSprite(1000, 495, 40, 10);
         wallx201.shapeColor = "Red";      
         var wallx202 = createSprite(935, 515, 40, 10);
         wallx202.shapeColor = "Red";
         var wallx203 = createSprite(1000, 515, 40, 10);
         wallx203.shapeColor = "Red";
         var wallx204 = createSprite(950, 545, 10, 50);
         wallx204.shapeColor = "Red";
         var wallx205 = createSprite(985, 535, 10, 30);
         wallx205.shapeColor = "Red";
         var wallx206 = createSprite(1000, 555, 40, 10);
         wallx206.shapeColor = "Red";
         var wallx207 = createSprite(985, 575, 80, 10);
         wallx207.shapeColor = "Red";
         var wallx208 = createSprite(985, 395, 100, 10);
         wallx208.shapeColor = "Red";
         var wallx209 = createSprite(1020, 515, 25, 10);
         wallx209.shapeColor = "Red";
         var wallx210 = createSprite(1035, 455, 10, 130);
         wallx210.shapeColor = "Red";
         var wallx211 = createSprite(1015, 455, 10, 75);
         wallx211.shapeColor = "Red";
         var wallx212 = createSprite(990, 420, 60, 10);
         wallx212.shapeColor = "Red";
         var wallx213 = createSprite(905, 495, 20, 10);
         wallx213.shapeColor = "Red";
         var wallx214 = createSprite(895, 473, 10, 54);
         wallx214.shapeColor = "Red";
         var wallx215 = createSprite(875, 500, 10, 110);
         wallx215.shapeColor = "Red";
         var wallx216 = createSprite(910, 515, 20, 10);
         wallx216.shapeColor = "Red";
         var wallx217 = createSprite(895, 543, 10, 65);
         wallx217.shapeColor = "Red";
         var wallx218 = createSprite(860, 540, 10, 30);
         wallx218.shapeColor = "Red";
         var wallx219 = createSprite(840, 550, 10, 50);
         wallx219.shapeColor = "Red";
         var wallx220 = createSprite(880, 570, 30, 10);
         wallx220.shapeColor = "Red";
         var wallx221 = createSprite(850, 570, 30, 10);
         wallx221.shapeColor = "Red";
         var wallx222 = createSprite(885, 450, 30, 10);
         wallx222.shapeColor = "Red";
         var wallx223 = createSprite(870, 550, 20, 10);
         wallx223.shapeColor = "Red";
         var wallx224 = createSprite(1040, 555, 40, 10);
         wallx224.shapeColor = "Red";
         var wallx225 = createSprite(1042, 575, 35, 10);
         wallx225.shapeColor = "Red";
         var wallx226 = createSprite(1055, 535, 10, 40);
         wallx226.shapeColor = "Red";
         var wallx227 = createSprite(1055, 585, 10, 30);
         wallx227.shapeColor = "Red";
         var wallx228 = createSprite(1080, 535, 10, 50);
         wallx228.shapeColor = "Red";
         var wallx229 = createSprite(1080, 585, 10, 30);
         wallx229.shapeColor = "Red";
         var wallx230 = createSprite(1068, 600, 35, 10);
         wallx230.shapeColor = "Red";
         var wallx231 = createSprite(1080, 565, 10, 20);
         wallx231.shapeColor = "Red";
         var wallx232 = createSprite(1055, 460, 10, 110);
         wallx232.shapeColor = "Red";
         var wallx233 = createSprite(1080, 470, 10, 80);
         wallx233.shapeColor = "Red";
         var wallx234 = createSprite(1085, 410, 50, 10);
         wallx234.shapeColor = "Red";
         var wallx235 = createSprite(1093, 435, 35, 10);
         wallx235.shapeColor = "Red";
         var wallx236 = createSprite(1110, 265, 10, 300);
         wallx236.shapeColor = "Red";
         var wallx237 = createSprite(1110, 515, 10, 170);
         wallx237.shapeColor = "Red";
         var wallx238 = createSprite(1140, 340, 10, 520);
         wallx238.shapeColor = "Red";
         var wallx239 = createSprite(1125, 595, 40, 10);
         wallx239.shapeColor = "Red";
         var wallx240 = createSprite(1070, 145, 10, 130);
         wallx240.shapeColor = "Red";
         var wallx241 = createSprite(1090, 150, 10, 70);
         wallx241.shapeColor = "Red";
         var wallx242 = createSprite(1105, 80, 80, 10);
         wallx242.shapeColor = "Red";
         var wallx243 = createSprite(1100, 110, 30, 10);
         wallx243.shapeColor = "Red";
         var wallx244 = createSprite(745, 410, 10, 120);
         wallx244.shapeColor = "Red";
         var wallx245 = createSprite(720, 390, 10, 90);
         wallx245.shapeColor = "Red";
         var wallx246 = createSprite(732, 345, 35, 10);
         wallx246.shapeColor = "Red";
         var wallx247 = createSprite(755, 465, 10, 10);
         wallx247.shapeColor = "Red";
         var wallx248 = createSprite(755, 492, 10, 30);
         wallx248.shapeColor = "Red";
         var wallx249 = createSprite(785, 505, 70, 10);
         wallx249.shapeColor = "Red";
         var wallx250 = createSprite(775, 525, 50, 10);
         wallx250.shapeColor = "Red";
         var wallx251 = createSprite(795, 545, 10, 40);
         wallx251.shapeColor = "Red";
         var wallx252 = createSprite(815, 545, 10, 80);
         wallx252.shapeColor = "Red";
         var wallx253 = createSprite(770, 560, 40, 10);
         wallx253.shapeColor = "Red";
         var wallx254 = createSprite(770, 580, 40, 10);
         wallx254.shapeColor = "Red";
         var wallx255 = createSprite(790, 590, 10, 30);
         wallx255.shapeColor = "Red";
         var wallx256 = createSprite(845, 605, 120, 10);
         wallx256.shapeColor = "Red";
         var wallx257 = createSprite(860, 585, 100, 10);
         wallx257.shapeColor = "Red";
         var wallx258 = createSprite(910, 595, 10, 30);
         wallx258.shapeColor = "Red";
         var wallx259 = createSprite(695, 440, 60, 10);
         wallx259.shapeColor = "Red";
         var wallx260 = createSprite(695, 460, 60, 10);
         wallx260.shapeColor = "Red";
         var wallx261 = createSprite(670, 450, 10, 20);
         wallx261.shapeColor = "Red";
         var wallx262 = createSprite(720, 495, 10, 60);
         wallx262.shapeColor = "Red";
         var wallx263 = createSprite(735, 525, 40, 10);
         wallx263.shapeColor = "Red";
         var wallx264 = createSprite(725, 560, 60, 10);
         wallx264.shapeColor = "Red";
         var wallx265 = createSprite(700, 528, 10, 60);
         wallx265.shapeColor = "Red";
         var wallx266 = createSprite(680, 528, 10, 60);
         wallx266.shapeColor = "Red";
         var wallx267 = createSprite(690, 500, 30, 10);
         wallx267.shapeColor = "Red";
         var wallx268 = createSprite(680, 570, 10, 30);
         wallx268.shapeColor = "Red";
         var wallx269 = createSprite(715, 580, 70, 10);
         wallx269.shapeColor = "Red";
         var wallx270 = createSprite(525, 350, 50, 10);
         wallx270.shapeColor = "Red";
         var wallx271 = createSprite(525, 330, 50, 10);
         wallx271.shapeColor = "Red";
         var wallx272 = createSprite(566, 330, 40, 10);
         wallx272.shapeColor = "Red";
         var wallx273 = createSprite(590, 315, 10, 40);
         wallx273.shapeColor = "Red";
         var wallx274 = createSprite(610, 315, 10, 40);
         wallx274.shapeColor = "Red";
         var wallx275 = createSprite(600, 300, 30, 10);
         wallx275.shapeColor = "Red";
         var wallx276 = createSprite(625, 340, 40, 10);
         wallx276.shapeColor = "Red";
         var wallx277 = createSprite(625, 355, 40, 10);
         wallx277.shapeColor = "Red";
         var wallx278 = createSprite(640, 345, 10, 20);
         wallx278.shapeColor = "Red";
         var wallx279 = createSprite(585, 355, 50, 10);
         wallx279.shapeColor = "Red";
         var wallx280 = createSprite(550, 350, 10, 10);
         wallx280.shapeColor = "Red";
         var wallx281 = createSprite(555, 355, 10, 10);
         wallx281.shapeColor = "Red";
         var wallx282 = createSprite(485, 340, 10, 30);
         wallx282.shapeColor = "Red";
         var wallx283 = createSprite(505, 320, 10, 30);
         wallx283.shapeColor = "Red";
         var wallx284 = createSprite(475, 320, 30, 10);
         wallx284.shapeColor = "Red";
         var wallx285 = createSprite(480, 300, 40, 10);
         wallx285.shapeColor = "Red";
         var wallx286 = createSprite(445, 320, 30, 10);
         wallx286.shapeColor = "Red";
         var wallx287 = createSprite(435, 300, 10, 30);
         wallx287.shapeColor = "Red";
         var wallx288 = createSprite(460, 285, 10, 40);
         wallx288.shapeColor = "Red";
         var wallx289 = createSprite(420, 290, 30, 10);
         wallx289.shapeColor = "Red";
         var wallx290 = createSprite(430, 270, 50, 10);
         wallx290.shapeColor = "Red";
         var wallx291 = createSprite(390, 290, 30, 10);
         wallx291.shapeColor = "Red";
         var wallx292 = createSprite(385, 270, 40, 10);
         wallx292.shapeColor = "Red";
         var wallx293 = createSprite(370, 250, 10, 40);
         wallx293.shapeColor = "Red";
         var wallx294 = createSprite(360, 350, 30, 10);
         wallx294.shapeColor = "Red";
         var wallx295 = createSprite(350, 330, 10, 40);
         wallx295.shapeColor = "Red";
         var wallx296 = createSprite(335, 310, 40, 10);
         wallx296.shapeColor = "Red";
         var wallx297 = createSprite(335, 290, 40, 10);
         wallx297.shapeColor = "Red";
         var wallx298 = createSprite(350, 260, 10, 50);
         wallx298.shapeColor = "Red";
         var wallx299 = createSprite(310, 270, 10, 50);
         wallx299.shapeColor = "Red";
         var wallx300 = createSprite(325, 240, 40, 10);
         wallx300.shapeColor = "Red";
         var wallx301 = createSprite(300, 310, 30, 10);
         wallx301.shapeColor = "Red";
         var wallx302 = createSprite(280, 325, 10, 40);
         wallx302.shapeColor = "Red";
         var wallx303 = createSprite(260, 315, 10, 60);
         wallx303.shapeColor = "Red";
         var wallx304 = createSprite(270, 280, 30, 10);
         wallx304.shapeColor = "Red";
         var wallx305 = createSprite(285, 250, 10, 70);
         wallx305.shapeColor = "Red";
         var wallx306 = createSprite(330, 220, 90, 10);
         wallx306.shapeColor = "Red";
         var wallx307 = createSprite(370, 230, 10, 20);
         wallx307.shapeColor = "Red";
         var wallx308 = createSprite(250, 350, 30, 10);
         wallx308.shapeColor = "Red";
         var wallx309 = createSprite(235, 370, 60, 10);
         wallx309.shapeColor = "Red";
         var wallx310 = createSprite(280, 370, 10, 60);
         wallx310.shapeColor = "Red";
         var wallx311 = createSprite(300, 405, 50, 10);
         wallx311.shapeColor = "Red";
         var wallx312 = createSprite(290, 425, 30, 10);
         wallx312.shapeColor = "Red";
         var wallx313 = createSprite(300, 450, 10, 40);
         wallx313.shapeColor = "Red";
         var wallx314 = createSprite(325, 435, 10, 70);
         wallx314.shapeColor = "Red";
         var wallx315 = createSprite(260, 400, 10, 60);
         wallx315.shapeColor = "Red";
         var wallx316 = createSprite(270, 425, 20, 10);
         wallx316.shapeColor = "Red";
         var wallx317 = createSprite(230, 320, 10, 70);
         wallx317.shapeColor = "Red";
         var wallx318 = createSprite(210, 340, 10, 60);
         wallx318.shapeColor = "Red";
         var wallx319 = createSprite(210, 290, 40, 10);
         wallx319.shapeColor = "Red";
         var wallx320 = createSprite(190, 310, 50, 10);
         wallx320.shapeColor = "Red";
         var wallx321 = createSprite(170, 330, 10, 40);
         wallx321.shapeColor = "Red";
         var wallx322 = createSprite(150, 320, 10, 60);
         wallx322.shapeColor = "Red";
         var wallx323 = createSprite(195, 270, 10, 40);
         wallx323.shapeColor = "Red";
         var wallx324 = createSprite(175, 270, 10, 40);
         wallx324.shapeColor = "Red";
         var wallx325 = createSprite(162, 290, 34, 10);
         wallx325.shapeColor = "Red";
         var wallx326 = createSprite(125, 345, 40, 10);
         wallx326.shapeColor = "Red";
         var wallx327 = createSprite(125, 365, 40, 10);
         wallx327.shapeColor = "Red";
         var wallx328 = createSprite(150, 380, 10, 40);
         wallx328.shapeColor = "Red";
         var wallx329 = createSprite(170, 370, 10, 40);
         wallx329.shapeColor = "Red";
         var wallx330 = createSprite(200, 390, 70, 10);
         wallx330.shapeColor = "Red";
         var wallx331 = createSprite(190, 410, 50,10);
         wallx331.shapeColor = "Red";
         var wallx332 = createSprite(240, 415, 10, 60);
         wallx332.shapeColor = "Red";
         var wallx333 = createSprite(220, 425, 10, 40);
         wallx333.shapeColor = "Red";
         var wallx334 = createSprite(150, 420, 10, 40);
         wallx334.shapeColor = "Red";
         var wallx335 = createSprite(170, 440, 10, 60);
         wallx335.shapeColor = "Red";
         var wallx336 = createSprite(220, 455, 10, 20);
         wallx336.shapeColor = "Red";
         var wallx337 = createSprite(240, 455, 10, 20);
         wallx337.shapeColor = "Red";
         var wallx338 = createSprite(195, 470, 60, 10);
         wallx338.shapeColor = "Red";
         var wallx339 = createSprite(270, 470, 70, 10);
         wallx339.shapeColor = "Red";
         var wallx340 = createSprite(230, 490, 120, 10);
         wallx340.shapeColor = "Red";
         var wallx341 = createSprite(295, 510, 10, 50);
         wallx341.shapeColor = "Red";
         var wallx342 = createSprite(315, 510, 10, 50);
         wallx342.shapeColor = "Red";
         var wallx343 = createSprite(325, 480, 10, 20);
         wallx343.shapeColor = "Red";
         var wallx344 = createSprite(320, 540, 20, 10);
         wallx344.shapeColor = "Red";
         var wallx345 = createSprite(330, 525, 10, 40);
         wallx345.shapeColor = "Red";
         var wallx346 = createSprite(350, 525, 10, 40);
         wallx346.shapeColor = "Red";
         var wallx347 = createSprite(340, 500, 30, 10);
         wallx347.shapeColor = "Red";
         var wallx348 = createSprite(375, 550, 60, 10);
         wallx348.shapeColor = "Red";
         var wallx349 = createSprite(375, 570, 60, 10);
         wallx349.shapeColor = "Red";
         var wallx350 = createSprite(420, 550, 30, 10);
         wallx350.shapeColor = "Red";
         var wallx351 = createSprite(440, 560, 10, 30);
         wallx351.shapeColor = "Red";
         var wallx352 = createSprite(410, 580, 10, 30);
         wallx352.shapeColor = "Red";
         var wallx353 = createSprite(280, 540, 40, 10);
         wallx353.shapeColor = "Red";
         var wallx354 = createSprite(280, 560, 40, 10);
         wallx354.shapeColor = "Red";
         var wallx355 = createSprite(300, 575, 10, 40);
         wallx355.shapeColor = "Red";
         var wallx356 = createSprite(345, 580, 10, 30);
         wallx356.shapeColor = "Red";
         var wallx357 = createSprite(377.5, 590, 75, 10);
         wallx357.shapeColor = "Red";
         var wallx358 = createSprite(460, 570, 40, 10);
         wallx358.shapeColor = "Red";
         var wallx359 = createSprite(445, 590, 70, 10);
         wallx359.shapeColor = "Red";
         var wallx360 = createSprite(325, 590, 40, 10);
         wallx360.shapeColor = "Red";
         var wallx361 = createSprite(520, 570, 80, 10);
         wallx361.shapeColor = "Red";
         var wallx362 = createSprite(520, 590, 80, 10);
         wallx362.shapeColor = "Red";
         var wallx363 = createSprite(565, 555, 10, 40);
         wallx363.shapeColor = "Red";
         var wallx364 = createSprite(585, 565, 10, 60);
         wallx364.shapeColor = "Red";
         var wallx365 = createSprite(575, 535, 30, 10);
         wallx365.shapeColor = "Red";
         var wallx366 = createSprite(575, 590, 30, 10);
         wallx366.shapeColor = "Red";
         var wallx367 = createSprite(260, 525, 10, 40);
         wallx367.shapeColor = "Red";
         var wallx368 = createSprite(260, 570, 10, 30);
         wallx368.shapeColor = "Red";
         var wallx369 = createSprite(215, 510, 90, 10);
         wallx369.shapeColor = "Red";
         var wallx370 = createSprite(195, 530, 90, 10);
         wallx370.shapeColor = "Red";
         var wallx371 = createSprite(175, 500, 10, 30);
         wallx371.shapeColor = "Red";
         var wallx372 = createSprite(150, 485, 10, 100);
         wallx372.shapeColor = "Red";
         var wallx373 = createSprite(215, 550, 50, 10);
         wallx373.shapeColor = "Red";
         var wallx374 = createSprite(215, 570, 50, 10);
         wallx374.shapeColor = "Red";
         var wallx375 = createSprite(235, 580, 10, 30);
         wallx375.shapeColor = "Red";
         var wallx376 = createSprite(235, 540, 10, 30);
         wallx376.shapeColor = "Red";
         var wallx377 = createSprite(250, 590, 30, 10);
         wallx377.shapeColor = "Red";
         var wallx378 = createSprite(170, 550, 80, 10);
         wallx378.shapeColor = "Red";
         var wallx379 = createSprite(150, 570, 90, 10);
         wallx379.shapeColor = "Red";
         var wallx380 = createSprite(130, 520, 10, 70);
         wallx380.shapeColor = "Red";
         var wallx381 = createSprite(105, 540, 10, 70);
         wallx381.shapeColor = "Red";
         var wallx382 = createSprite(100, 480, 70, 10);
         wallx382.shapeColor = "Red";
         var wallx383 = createSprite(75, 500, 70, 10);
         wallx383.shapeColor = "Red";
         var wallx384 = createSprite(110, 320, 10, 50);
         wallx384.shapeColor = "Red";
         var wallx385 = createSprite(110, 390, 10, 50);
         wallx385.shapeColor = "Red";
         var wallx386 = createSprite(90, 380, 10, 40);
         wallx386.shapeColor = "Red";
         var wallx387 = createSprite(95, 420, 40, 10);
         wallx387.shapeColor = "Red";
         var wallx388 = createSprite(65, 395, 50, 10);
         wallx388.shapeColor = "Red";
         var wallx389 = createSprite(70, 445, 10, 60);
         wallx389.shapeColor = "Red";
         var wallx390 = createSprite(45, 430, 10, 80);
         wallx390.shapeColor = "Red";
         var wallx391 = createSprite(35, 475, 30, 10);
         wallx391.shapeColor = "Red";
         var wallx392 = createSprite(45, 535, 10, 60);
         wallx392.shapeColor = "Red";
         var wallx393 = createSprite(25, 520, 10, 80);
         wallx393.shapeColor = "Red";
         var wallx394 = createSprite(35, 560, 30, 10);
         wallx394.shapeColor = "Red";
         var wallx395 = createSprite(90, 320, 10, 100);
         wallx395.shapeColor = "Red";
         var wallx396 = createSprite(110, 285, 10, 30);
         wallx396.shapeColor = "Red";
         var wallx397 = createSprite(510, 90, 30, 10);
         wallx397.shapeColor = "Red";
         var wallx398 = createSprite(450, 90, 30, 10);
         wallx398.shapeColor = "Red";
         var wallx399 = createSprite(460, 70, 50, 10);
         wallx399.shapeColor = "Red";
         var wallx400 = createSprite(485, 45, 10, 60);
         wallx400.shapeColor = "Red";
         var wallx401 = createSprite(505, 55, 10, 40);
         wallx401.shapeColor = "Red";
         var wallx402 = createSprite(550, 90, 50, 10);
         wallx402.shapeColor = "Red";
         var wallx403 = createSprite(540, 70, 70, 10);
         wallx403.shapeColor = "Red";
         var wallx404 = createSprite(520, 20, 70, 10);
         wallx404.shapeColor = "Red";
         var wallx405 = createSprite(520, 40, 30, 10);
         wallx405.shapeColor = "Red";
         var wallx406 = createSprite(535, 50, 10, 30);
         wallx406.shapeColor = "Red";
         var wallx407 = createSprite(555, 40, 10, 50);
         wallx407.shapeColor = "Red";
         var wallx408 = createSprite(590, 90, 30, 10);
         wallx408.shapeColor = "Red";
         var wallx409 = createSprite(610, 80, 10, 30);
         wallx409.shapeColor = "Red";
         var wallx410 = createSprite(590, 70, 30, 10);
         wallx410.shapeColor = "Red";
         var wallx411 = createSprite(195, 230, 10, 50);
         wallx411.shapeColor = "Red";
         var wallx412 = createSprite(175, 230, 10, 50);
         wallx412.shapeColor = "Red";
         var wallx413 = createSprite(405, 90, 60, 10);
         wallx413.shapeColor = "Red";
         var wallx414 = createSprite(370, 110, 10, 50);
         wallx414.shapeColor = "Red";
         var wallx415 = createSprite(350, 105, 10, 40);
         wallx415.shapeColor = "Red";
         var wallx416 = createSprite(315, 140, 120, 10);
         wallx416.shapeColor = "Red";
         var wallx417 = createSprite(300, 120, 90, 10);
         wallx417.shapeColor = "Red";
         var wallx418 = createSprite(240, 200, 100, 10);
         wallx418.shapeColor = "Red";
         var wallx419 = createSprite(240, 180, 100, 10);
         wallx419.shapeColor = "Red";
         var wallx420 = createSprite(290, 190, 10, 30);
         wallx420.shapeColor = "Red";
         var wallx421 = createSprite(175, 160, 10, 90);
         wallx421.shapeColor = "Red";
         var wallx422 = createSprite(195, 160, 10, 30);
         wallx422.shapeColor = "Red";
         var wallx423 = createSprite(225, 140, 70, 10);
         wallx423.shapeColor = "Red";
         var wallx424 = createSprite(215, 120, 80, 10);
         wallx424.shapeColor = "Red";
         var wallx425 = createSprite(90, 220, 10, 100);
         wallx425.shapeColor = "Red";
         var wallx426 = createSprite(110, 220, 10, 100);
         wallx426.shapeColor = "Red";
         var wallx427 = createSprite(70, 145, 50, 10);
         wallx427.shapeColor = "Red";
         var wallx428 = createSprite(80, 165, 30, 10);
         wallx428.shapeColor = "Red";
         var wallx429 = createSprite(60, 220, 10, 120);
         wallx429.shapeColor = "Red";
         var wallx430 = createSprite(40, 210, 10, 140);
         wallx430.shapeColor = "Red";
         var wallx431 = createSprite(50, 280, 30, 10);
         wallx431.shapeColor = "Red";
         var wallx432 = createSprite(380, 70, 120, 10);
         wallx432.shapeColor = "Red";
         var wallx433 = createSprite(100, 130, 10, 40);
         wallx433.shapeColor = "Red";
         var wallx434 = createSprite(80, 110, 50, 10);
         wallx434.shapeColor = "Red";
         var wallx435 = createSprite(90, 90, 70, 10);
         wallx435.shapeColor = "Red";
         var wallx436 = createSprite(120, 130, 10, 80);
         wallx436.shapeColor = "Red";
         var wallx437 = createSprite(120, 175, 10, 10);
         wallx437.shapeColor = "Red";
         var wallx438 = createSprite(38, 110, 40, 10);
         wallx438.shapeColor = "Red";
         var wallx439 = createSprite(23, 85, 10, 50);
         wallx439.shapeColor = "Red";
         var wallx440 = createSprite(55, 85, 10, 20);
         wallx440.shapeColor = "Red";
         var wallx441 = createSprite(295, 90, 100, 10);
         wallx441.shapeColor = "Red";
         var wallx442 = createSprite(310, 70, 80, 10);
         wallx442.shapeColor = "Red";
         var wallx443 = createSprite(275, 50, 10, 30);
         wallx443.shapeColor = "Red";
         var wallx444 = createSprite(250, 70, 10, 30);
         wallx444.shapeColor = "Red";
         var wallx445 = createSprite(150, 60, 200, 10);
         wallx445.shapeColor = "Red";
         var wallx446 = createSprite(55, 70, 10, 10);
         wallx446.shapeColor = "Red";
         var wallx447 = createSprite(145, 40, 250, 10);
         wallx447.shapeColor = "Red";
         var wallx448 = createSprite(25, 55, 10, 20);
         wallx448.shapeColor = "Red";
         wallGroup.add(wall);
}