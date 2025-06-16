const songs = [
  {
    title: "I Will Follow You Into the Dark",
    artist: "Death Cab for Cutie",
    image: "images/songs1.jpg",
    audio: "audio/song1.mp3"
  },
  {
    title: "Francesca",
    artist: "Hozier",
    image: "images/songs2.jpg",
    audio: "audio/song2.mp3"
  },
  {
    title: "I Can't Stop Loving You",
    artist: "Ray Charles",
    image: "images/songs3.jpg",
    audio: "audio/song3.mp3"
  },
  {
    title: "I Love You, Honeybear",
    artist: "Father John Misty",
    image: "images/songs4.jpg",
    audio: "audio/song4.mp3"
  },
  {
    title: "Work Song",
    artist: "Hozier",
    image: "images/songs5.jpg",
    audio: "audio/song5.mp3"
  },
  {
    title: "Please Don’t Let Me Go",
    artist: "Olly Murs",
    image: "images/songs6.png",
    audio: "audio/song6.mp3"
  },
  {
    title: "Can’t Help Falling in Love",
    artist: "Elvis Presley",
    image: "images/songs7.jpg",
    audio: "audio/song7.mp3"
  },
  {
    title: "My Love Will Never Die",
    artist: "Hozier",
    image: "images/songs8.jpg",
    audio: "audio/song8.mp3"
  },
  {
    title: "Everlong",
    artist: "Foo Fighters",
    image: "images/songs9.jpg",
    audio: "audio/song9.mp3"
  },
  {
    title: "Lover, You Should’ve Come Over",
    artist: "Jeff Buckley",
    image: "images/songs10.jpg",
    audio: "audio/song10.mp3"
  },
  {
    title: "When the Day Met the Night",
    artist: "Panic! at the Disco",
    image: "images/songs11.jpg",
    audio: "audio/song11.mp3"
  }
];

const track = document.getElementById('carouselTrack');
const audio = document.getElementById('audioPlayer');
const title = document.getElementById('songTitle');
const artist = document.getElementById('songArtist');
let currentIndex = 0;

songs.forEach(song => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `<img src="${song.image}" alt="${song.title}" />`;
  track.appendChild(slide);
});

function updateSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  audio.src = songs[index].audio;
  audio.play();
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  updateSlide(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  updateSlide(currentIndex);
});

document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('songsPopup').style.display = 'none';
  document.getElementById('carousel').classList.remove('hidden');
  updateSlide(currentIndex);
});

