const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const fourthLi = document.getElementById('fourthLi')
const firstSlide = document.getElementById('aboutMe')
const secondSlide = document.getElementById('civilianExperience');
const thirdSlide = document.getElementById('freeTime');
const fourthSlide = document.getElementById('fourthSlide');
const container = document.getElementById('slide-container');


options = {
    threshold: 0.5
};

const liForSlide = [firstSlide, firstLi, secondSlide, secondLi, thirdSlide, thirdLi, fourthSlide, fourthLi]
/*

let slideOneIsIntersecting = 0;

const observer = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            firstLi.style.right = "0vw";
            slideOneIsIntersecting = true;
        }
        else
        {
            firstLi.style.right = "90vw";
            slideOneIsIntersecting = false;
        }
    });
}, options);

const observer2 = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
        if (!entry.isIntersecting && !slideOneIsIntersecting)
        {
            secondLi.style.right = "90vw";
            console.log(slideOneIsIntersecting);
        }
        else
        {
            secondLi.style.right = "0vw";
        }
    });
}, options);

const observer3 = new IntersectionObserver(function(entries, observer)
{
    
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            thirdLi.style.right = "90vw";
        }
        else
        {
            thirdLi.style.right = "0vw";
        }
    });
}, options);

observer.observe(firstSlide);
observer2.observe(secondSlide);
observer3.observe(fourthSlide);

*/

const observer = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            let activeLi = liForSlide[liForSlide.indexOf(entry.target)+1];
            activeLi.classList.add("li-active");
            entry.target.classList.add("slide-active");

        }
        else
        {
            let activeLi = liForSlide[liForSlide.indexOf(entry.target)+1];
            activeLi.classList.remove("li-active");
            entry.target.classList.remove("slide-active");
        }
    });
}, options);

observer.observe(secondSlide);
