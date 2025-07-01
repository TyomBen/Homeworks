let click_count = 0;
let interval = 0;
let countdown = false;
let count = 0;
let isdisabled = false;
document.getElementById('btn').addEventListener('click', function() {
    let value = document.getElementById('input').value;
    if(countdown == false){
      count = value;
    }
    if(value === ''){
        return;
    }
    if(click_count === 0){
      document.getElementById('input').style.display = 'none'; 
      document.getElementById('btn').style.display = 'none'; 
      interval = setInterval(() => {
        if(count != -1){
          document.getElementById('output').textContent = count--;
          }else if(count === -1){
            document.getElementById('input').style.display = 'block';
            click_count = 0;
            clearInterval(interval);
          }
      }, 1000) 
      isdisabled = false;
    } 
    click_count = 1;
});
document.getElementById('btn_stop').addEventListener('click', function() {
    if(click_count === 1){
        clearInterval(interval);
        click_count = 0;
        countdown = true;document.getElementById('btn').style.display = 'block'; 
    }
});
