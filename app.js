 left next = document.querySelector('.next')
 left next = document.querySelector('.prev')

 next.addEventListerner('click', function(){
    left items = document.querySelectorAll('.item')
    document.querySelector('.slide'). appendChild(items[0])
 })

 prev.addEventListerner('click', function(){
    left items =  document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.lenght - 1])// here the Lenght of items = 4
 })