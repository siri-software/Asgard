
//gold
function toggleSubList(id) {
    const allSubLists = document.querySelectorAll('.sub-list');
    const clickedSubList = document.getElementById(id);
    const serviceIcon = clickedSubList.previousElementSibling.querySelector('i');
  
    // Close all other sub-lists
    allSubLists.forEach((list) => {
      if (list.id !== id) {
        list.classList.remove('active');
        list.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
      }
    });
  
    // Toggle the clicked sub-list
    clickedSubList.classList.toggle('active');
    if (clickedSubList.classList.contains('active')) {
      serviceIcon.style.transform = 'rotate(180deg)';
    } else {
      serviceIcon.style.transform = 'rotate(0deg)';
    }
  }
  
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})