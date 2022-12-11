$(document).ready(function(){
    //save button listener
    $('.saveBtn').on('click', function (){
//get values
        var value = $(this).siblings('.description').val();
        var time= $(this).parent().attr('id');
//local storage
        localStorage.setItem(time, value);
    });
    function hourUpdater() {
        var currentHour = dayjs().hour();
        //loop time
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            //see if we have passed this time
            if (blockHour < currentHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });    
    }

    hourUpdater();
    //check if current time should be updated
    setInterval(hourUpdater, 15000);
    //if saved data in local, load it
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));
    $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  
  

    //display current day
    $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));
});



