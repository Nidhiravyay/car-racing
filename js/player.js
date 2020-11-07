class Player{
    constructor(){
        
    }
getCount(){
  database.ref('playerCount').on("value", function(data){
  playerCount= data.val();
  });

}
updateCount(count){
    database.ref('/').set({
        playerCount:count,
    })
}



}