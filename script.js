const people = [
    {
        id: 0,
        name: 'Chad Uncleson',
        job: 'DATA SCIENTIST',
        img: 'img/person1.jpeg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit quam labore mollitia, commodi aliquid possimus rem, a fuga recusandae repellendus delectus soluta expedita dolorum. Aspernatur expedita officiis dignissimos laboriosam?',
    },
    {
        id: 1,
        name: 'Waffen Ampatua',
        job: 'WEB DEVELOPER',
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/309771582_1168866633724746_721616038077529040_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHDrA3IqtyU3NRUSlt-TvtBQIBJLRx7prpAgEktHHumuiCkxND6UigXufl2p8q2OgGbFn5zlYmah5LFcbVKMBgo&_nc_ohc=VOsKe8pmqmAAX9ePscN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQt4qDBj3dxBv3e5DIdk4NMUKMEOmP6xCZsudT5TlE-fg&oe=639061C4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit quam labore mollitia, commodi aliquid possimus rem, a fuga recusandae repellendus delectus soluta expedita dolorum. Aspernatur expedita officiis dignissimos laboriosam?'
    },
    {
        id: 2,
        name: 'Arnold Schwarzenegger',
        job: 'ACTOR',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit quam labore mollitia, commodi aliquid possimus rem, a fuga recusandae repellendus delectus soluta expedita dolorum. Aspernatur expedita officiis dignissimos laboriosam?'
    }
];
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');
const id = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const picture = document.getElementById('person-img');
let currentUser = 0;

const reviewFunction = () => {
    id.textContent = people[currentUser].name;
    job.textContent = people[currentUser].job;
    info.textContent = people[currentUser].text;
    picture.src = people[currentUser].img;
}

next.addEventListener(`click`, function(){
    currentUser++;
    if(currentUser>people.length-1){
        currentUser = 0;
        return reviewFunction();
    }
    return reviewFunction();
})

previous.addEventListener(`click`, function(){
    currentUser--;  
    if(currentUser<0){
        currentUser = people.length-1;
        return reviewFunction();
    }
    console.log(currentUser);
    return reviewFunction();
})



