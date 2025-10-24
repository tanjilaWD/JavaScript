const money = 300;
const popcornPrice = 40;
if(money >= 300){
    console.log("Going to watch a movie");
 if(popcornPrice <= 50){
    console.log("Buying popcorn");
 }   else{
    console.log("popcorn is Expensive");
 }
}else{
    console.log("Home Alone");
}
//
const isInvited = true;
const myMoney = 1200;
if(isInvited){
    console.log("I am go");

   if(myMoney > 1000){
    console.log("Gift nibo");
   } else{
    console.log("gift nibo na");
   }
}else{
    console.log("Unfriend kore dibo");
}
//
const guestCome = true;
const wantsTea = true;
const wantsBiscuit = false;
if(guestCome){
    console.log("প্রথমে জিজ্ঞেস করব, তারা চা খাবে কি না");
    
   if(wantsTea){
    console.log("তারা চা খেতে চায়।");

    if(wantsBiscuit){
        console.log("চা এর সাথে বিস্কুটও খাবে");
    } else{
        console.log("শুধু চা রেডি");
    }
   } else  {
    console.log('বসে বসে স্টার জলসা দেখুন');
   } 
}else{
    console.log("কোনো মেহমান আসেনি");
}
//
const isActive = true;
const isPremium = false;
if(isActive){
    if(isPremium){
        console.log("Premium fature dakhaw");
    }else{
        console.log("Free version dakhaw");
    }
}else{
    console.log("Acount active noy");
}
//
const isFood = true;
const foodApp = false;
if(isFood){
    console.log("khabar gorom korbi");
}