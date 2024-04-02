const time = () => {
   sec++
   if(sec>59) {
    min++
    sec==0
   }
   if(min>59) {
    hour++
    sec==0
   }
   

}