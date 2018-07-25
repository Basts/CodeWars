/*

Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

*/


function countSmileys(arr) {
  var count=0;
  for(var i=0; i<arr.length; i++){
    var currentEle=arr[i];
    var ele1=currentEle[0].charAt(0);
    var ele2=currentEle[1].charAt(1);
    var ele3=currentEle[2].charAt(2);
    if(currentEle.length===3){
      if((ele1===":"||ele1===";")&&(ele2==="-"||ele2==="~")&&(ele3===")"||ele3==="D")){
         count++;
      }
    }
    if(currentEle.length===2){
      if((ele1===":"||ele1===";")&&(ele2===")"||ele2==="D")){
        count++;
      }
    }
  }}
