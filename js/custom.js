function clock() {
   var mytime = new Date(),
        myhrs = mytime.getHours(),
        mymin = mytime.getMinutes(),
        mysec = mytime.getSeconds(),
        myamp = 'PM',
        myday = ["Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"],
        mymonth = ["January,","February,","March,","April,","May,","June,","July,","August,","September,","October,","November,","December,"],
        myyear = mytime.getFullYear();

          // AM - PM
          if ( myhrs < 12) {
            myamp = 'AM';
        }
        // 12 Hour
        if ( myhrs > 12) {
            myhrs = myhrs -12;
        }

        // 0 = 12
        if ( myhrs == 0) {
            myhrs = 12;
        }
       // myhrs 01 format
       if ( myhrs < 10 ){
        myhrs = '0' + myhrs;
    }
        // mymin 01 format
        if ( mymin < 10){
            mymin = '0' + mymin;
        }
        // mysec 01 format
        if ( mysec < 10){
            mysec = '0' + mysec;
        }
   document.getElementById('hour').innerHTML = myhrs;
   document.getElementById('minute').innerHTML = mymin;
   document.getElementById('second').innerHTML = mysec;
   document.getElementById('meridiem').innerHTML = myamp;
   document.getElementById('day').innerHTML = myday[mytime.getDay()];
   document.getElementById('month').innerHTML = mymonth[mytime.getMonth()];
   document.getElementById('year').innerHTML = myyear;
}
setInterval(clock, 100);

