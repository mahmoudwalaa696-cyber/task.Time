let tow = document.getElementById("one");

function Time() {
//  Time متغيرات لحساب ال
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

//    Seconds او Minutes او Hours ده شرط انه يضيف 0 قدام الرقم الاقل من 10 سواء فى ال 
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

//  Date متغيرات لحساب ال
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  tow.innerHTML = `
<div class="total">
<h1 class="title">The Time Is Now</h1>
<div class="part1">
${hours}:${minutes}:${seconds}
</div>
<h1 class="date">The Date ⏲</h1>
<div class="part2">
${date}:${month}:${year}
</div> 
</div> 
`;
}
Time();
// بيخلي الساعة تتحدث كل ثانية لوحدها
setInterval(Time, 1000);
