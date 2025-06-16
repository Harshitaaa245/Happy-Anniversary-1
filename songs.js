const songs = [
  { title: "I Will Follow You Into the Dark", artist: "Death Cab for Cutie", image: "images/songs1.jpg", audio: "audio/song1.mp3" },
  { title: "Francesca", artist: "Hozier", image: "images/songs2.jpg", audio: "audio/song2.mp3" },
  { title: "I Can't Stop Loving You", artist: "Ray Charles", image: "images/songs3.jpg", audio: "audio/song3.mp3" },
  { title: "I Love You, Honeybear", artist: "Father John Misty", image: "images/songs4.jpg", audio: "audio/song4.mp3" },
  { title: "Work Song", artist: "Hozier", image: "images/songs5.jpg", audio: "audio/song5.mp3" },
  { title: "Please Don’t Let Me Go", artist: "Olly Murs", image: "images/songs6.png", audio: "audio/song6.mp3" },
  { title: "Can't Help Falling in Love", artist: "Elvis Presley", image: "images/songs7.jpg", audio: "audio/song7.mp3" },
  { title: "My Love Will Never Die", artist: "Hozier", image: "images/songs8.jpg", audio: "audio/song8.mp3" },
  { title: "Everlong", artist: "Foo Fighters", image: "images/songs9.jpg", audio: "audio/song9.mp3" },
  { title: "Lover, You Should've Come Over", artist: "Jeff Buckley", image: "images/songs10.jpg", audio: "audio/song10.mp3" },
  { title: "When the Day Met the Night", artist: "Panic! at the Disco", image: "images/songs11.jpg", audio: "audio/song11.mp3" }
];

let currentIndex = 0;

const track = document.getElementById("carouselTrack");
const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

function updateNowPlaying(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  audioPlayer.src = song.audio;
  audioPlayer.play();
}

function renderCarousel() {
  track.innerHTML = "";
  songs.forEach((song, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `<img src="${song.image}" alt="${song.title}" />`;
    if (index === currentIndex) {
      slide.style.transform = "scale(1.1)";
    }
    track.appendChild(slide);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  renderCarousel();
  updateNowPlaying(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  renderCarousel();
  updateNowPlaying(currentIndex);
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("songsPopup").style.display = "none";
  document.getElementById("carousel").classList.remove("hidden");
  renderCarousel();
  updateNowPlaying(currentIndex);
});
