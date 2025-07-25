

// Set retro background
document.body.background = "https://i.imgur.com/cJHbUt9.jpeg";

// Optional: Apply window-style layout if DOM structure supports it
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementsByClassName("game_header")[0];
  const gameWindow = document.getElementById("game_window");
  const container = document.getElementsByClassName("container")[0];

  if (header) header.classList.add("title-bar");
  if (gameWindow) gameWindow.classList.add("window");
  if (container) container.classList.add("window-body");

  const headerImg = document.getElementById("header");
  if (headerImg) headerImg.src = "https://i.imgur.com/oo50Ihf.gif";
});
  
  // Apply theme variables
  


            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#ca8d8e";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#bfb5bf";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#ece5d8";

            document.getElementById("header").src = "https://i.imgur.com/Di9MnHD.png";
                // Select the node that will be observed for mutations
    const windowsAdvisorTargetNode = document.getElementById("game_window");
    
    // Options for the observer (which mutations to observe)
    const windowsAdvisorConfig = { attributes: true, childList: true, subtree: true };
    
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        visitWindow = document.getElementsByClassName("overlay_window")[0];
    
        if(visitWindow == null || visitWindow.classList.contains("done")) {
            return;
        }
        visitWindow.classList.add("done");
        visitWindow.classList.add("window");
        let titleBar = visitWindow.querySelector("h3");
        titleBar.classList.add("title-bar");
        titleBar.classList.add("title-bar-text")
        titleBar.style.paddingLeft = "3px";
    };
    
    // Create an observer instance linked to the callback function
    const windowsAdvisorObserver = new MutationObserver(callback);
    
    // Start observing the target node for configured mutations
    windowsAdvisorObserver.observe(windowsAdvisorTargetNode, windowsAdvisorConfig);
    
    document.head.innerHTML += `<link
      rel="stylesheet"
      href="https://jetsimon.com/public/crt.css"
    >`
    
    document.body.classList.add("crt");
    
    document.head.innerHTML += `<link
      rel="stylesheet"
      href="https://unpkg.com/98.css"
    >`
    
    document.head.innerHTML += `<style>
    h3 {
        font-size:1.17em!important;
    }
    
    label {
        font-size:1em!important;
    }
    </style>`
    
    document.head.innerHTML += `<link
      rel="stylesheet"
      href="https://unpkg.com/98.css"
    >`
    
    document.head.innerHTML += `<style>
    h3 {
        font-size:1.17em!important;
    }
    
    label {
        font-size:1em!important;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif!important;
    }
    </style>`

campaignTrail_temp.modBoxTheme = {
  "header_color": "#000080",
  "header_text_color": "#ffffff",
  "description_text_color": "#000000",
  "description_background_color": "#c2c2c2",
  "main_color": "#c2c2c2",
  "secondary_color": "#838383",
  "ui_text_color": "#FFFFFF"
}

document.head.innerHTML += `<style>
h3 {
  font-size:1.17em!important;
}

label {
  font-size:1em!important;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif!important;
}
body {display:flex!important;}

#game_window{max-width:1000px;}
</style>`
let contentBox = document.getElementsByClassName("content_box")[0];
let contentSingle = document.getElementsByClassName("content_single")[0];
let containerRef = document.getElementsByClassName("container")[0];


            e.election_json = [{"model":"campaign_trail.election","pk":15,"fields":{"year":1988,"summary":"<div style='overflow-y:scroll;height:200px;'>In 1988, George Bush won an election on the promise of being a true leader, a strong man in the image of his predecessor, Ronald Reagan. By 1991, he looks more like a man at the end of his rope. The coalition he inherited from the Gipper is coming apart at the seams, fracturing between moderates and fiery extremists, and the country isn't far behind. A year ago, he was coasting, but now the ground is cracking beneath his feet. The '90 midterms were just the start, the first warning sign of a faltering presidency which continues to slip from his grasp.<br><br>For all his talk of a kinder, gentler nation, Bush's eyes have always been turned abroad, not towards the homefront and all of its discontents. Bad enough that the Cold War, the war he'd trained to fight all his life, is now all but over, robbing him of purpose. His domestic agenda is weak, and everyone knows it - it's not just his rivals calling him a wimp anymore. Bush's dispassionate and vacillating approach to the post-80s recession and rising debt has left many Americans wondering if their Yale-educated, rich oilman of a President even understands the country he's supposed to be leading.A thundering victory is no longer the plan. The goal now is to survive, to ward off a far-right revolt within the Republican Party, as he prays for a rebound in his approval ratings - even in the face of a stagnating economy, a resurgent Democratic Party, and God knows what else. Bush, who got his way in Yale, in the Texas oil business, and in the CIA, is, perhaps for the first time in his life, facing down a genuine catastrophe with no way out but through it. The biggest question of all is whether George Bush, so-called opponent of Washington insiders, can hold together the crumbling facade of his leadership in an America that's losing faith in the system he represents.</div>","image_url":"https://i.imgur.com/CUg2wdR.png","winning_electoral_vote_number":270,"advisor_url":"https://i.imgur.com/PUasz52.png","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":15,"year":1988,"is_premium":0,"display_year":"ℝ𝕖𝕒𝕕 𝕄𝕪 𝕝𝕚𝕡𝕤"}];e.credits = "POW";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":30,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":152,"fields":{"first_name":"George H.W","last_name":"Bush","election":15,"party":"Republican Party","state":"Texas","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><b><i>Conservatism. Inconsistency. Legacy.</i></b> <br><br> These three words capture the essence of the George Herbert Walker Bush presidency. A Texas oilman, military veteran, CIA director, and ambassador to the U.N., George Bush has seen it all. However, whenever he has been seen, he has been seen as a man controlled by a higher power -- certainly not God -- whose inconsistencies and broken promises, such as raised taxes, have been his greatest weakness. For a Massachusetts-born Yale University graduate whose life has been defined by the establishment, it is striking that Bush craves to be lauded as a brilliant maverick. Yet his political instincts, addicted to prudence and catering to the center, just won't let him. <br><br> It has been over two years since Herb Bush was elected President of the United States, riding the coattails of his old boss, the living god of conservatism, Ronald Reagan. The scion of the venerable Bush dynasty has yet to escape the Gipper's shadow, or prove himself a worthy inheritor of the Reagan Revolution. Now, he must determine what is to be his presidency's legacy--to become the new Reagan and advance the conservative movement, or carve out his own path as a strong, pragmatic statesman above the moderate-extremist axis.<br><br></div></div></div>","color_hex":"#9c1616","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/njbh4km.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},{"model":"campaign_trail.candidate","pk":411,"fields":{"first_name":"Dan","last_name":"Quayle","election":15,"party":"Republican Party","state":"Indiana","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><b><i>Incompetency. Consistency. Malapropisms.</i></b> <br><br>These are the three words that better encapsulate the opposite of George H.W Bush, James Danforth Quayle. Unlike his superior, Quayle has never been a war hero; he dodged the Vietnam draft. Quayle was never an educated scholar at a prestigious college; he graduated from DePauw University in Indiana. Unlike his boss, Quayle didn’t acquire his office through patient maneuvering; he won his Senate seat through crookedness and corruption.<br><br>Quayle’s constant misstatements - such as \"Republicans understand the importance of bondage between a mother and child\" – have brought him equally constant ridicule. Many wonder why a man as shrewd as Bush would make Quayle Vice President. Perhaps it was Reagan's comments on his enthusiasm and energy. Perhaps, when voters look at Bush, they see a politician; when they look at Quayle, they see a man, flawed just like them. Regardless, buyer's remorse is slowly setting in for the Bush Administration. <br><br>One wonders if Quayle will be able to survive, or, for the first time since FDR, a Vice President will not be renominated.</div></div></div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/YLTBmYj.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"<div style='overflow-y:scroll;height:200px;'><b><i>Incompetency. Consistency. Malapropisms.</i></b> <br><br>These are the three words that better encapsulate the opposite of George H.W Bush, James Danforth Quayle. Unlike his superior, Quayle has never been a war hero; he dodged the Vietnam draft. Quayle was never an educated scholar at a prestigious college; he graduated from DePauw University in Indiana. Unlike his boss, Quayle didn’t acquire his office through patient manuevering; he won his Senate seat through crookedness and corruption.<br><br>Quayle’s constant misstatements - such as \"Republicans understand the importance of bondage between a mother and child\" – have brought him equally constant ridicule. Many wonder why a man as shrewd as Bush would make Quayle Vice President. Perhaps it was Reagan's comments on his enthusiasm and energy. Perhaps, when voters look at Bush, they see a politician; when they look at Quayle, they see a man, flawed just like them. Regardless, buyer's remorse is slowly setting in for the Bush Administration. <br><br>One wonders if Quayle will be able to survive, or, for the first time since FDR, a Vice President will not be renominated.</div></div></div>","candidate_score":1,"running_mate":true,"scrollable":true,"partner":"1"}},{"model":"campaign_trail.candidate","pk":153,"fields":{"first_name":"The","last_name":"Democrats","election":15,"party":"Democratic Party","state":"Arkansas","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1004,"fields":{"first_name":"Vice","last_name":"Dem","election":15,"party":"Democratic Party","state":"Tennessee","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"2"}},{"model":"campaign_trail.candidate","pk":1005,"fields":{"first_name":"Reform","last_name":"Guy","election":15,"party":"Reform Party","state":"Texas","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#840cbb","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1006,"fields":{"first_name":"Vice","last_name":"Ref","election":15,"party":"Reform Party","state":"Texas","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"4"}},{"model":"campaign_trail.candidate","pk":1007,"fields":{"first_name":"aFourth","last_name":"Party","election":15,"party":"Libertarian","state":"California","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#c7e821","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1008,"fields":{"first_name":"Vp","last_name":"of aFourth","election":15,"party":"Green Party","state":"Maine","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"6"}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":152,"running_mate":411}},{"model":"campaign_trail.running_mate","pk":2002,"fields":{"candidate":153,"running_mate":1004}},{"model":"campaign_trail.running_mate","pk":2003,"fields":{"candidate":1005,"running_mate":1006}},{"model":"campaign_trail.running_mate","pk":2004,"fields":{"candidate":1007,"running_mate":1008}}];


  RecReading=true
  
 // Select the node that will be observed for mutations

 
 class Song {
   constructor(title, artist, coverLink, audioLink) {
     this.title = title;
     this.artist = artist;
     this.coverLink = coverLink;
     this.audioLink = audioLink;
   }
   getTitle() {
     return this.title;
   }
 
   getArtist() {
     return this.artist;
   }
 
   getCoverLink() {
     return this.coverLink;
   }
 
   getAudioLink() {
     return this.audioLink;
   }
 }
 
 class Playlist {
   constructor() {
     this.songs = [];
     this.currentSongIndex = 0;
   }
 
   addSong(song) {
     this.songs.push(song);
   }
 
   getCurrentSong() {
     return this.songs[this.currentSongIndex];
   }
 
   playNext() {
     this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
   }
 
   playPrevious() {
     this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
   }
 }
 window.Playlist=Playlist
 window.Song=Song
 
 function changePlaylist(newPlaylist) {
   playlist = newPlaylist;
   playlist.currentSongIndex = 0;
   updateUI(playlist);
   const audio = document.getElementById("audio");
   audio.src = playlist.getCurrentSong().audioLink;
   audio.play();
 }
 window.changePlaylist=changePlaylist
 
 function updateUI(playlist) {
     const currentSong = playlist.getCurrentSong();
     var player = document.getElementById("player");
     player.querySelector("#cover").src = currentSong.getCoverLink();
     player.querySelector("#title").textContent = currentSong.getTitle();
     player.querySelector("#artist").textContent = currentSong.getArtist();
 }
 
 window.updateUI=updateUI
 
 
 function setupMusicPlayer() {
   playlist = new Playlist();
 
 
   const song1 = new Song(
     "Terrible Lie",
     "Nine Inch Nails",
     "https://i.scdn.co/image/ab67616d0000b2739764c0993e45db213f0e359f",
     "https://audio.jukehost.co.uk/vRgnwRkJeUcZdNExhnh9YYVd51aeBwPo"
   );
   
   const song2 = new Song(
     "What's Up",
     "4 Non Blondes",
     "https://upload.wikimedia.org/wikipedia/pt/9/9f/4_Non_Blondes_-_Whats_up.jpg",
     "https://audio.jukehost.co.uk/wRvXliFPTKO2YE08Dr0JHqNFnS6JMnqh"
   );
 
   const song3 = new Song(
     "Games Without Frontiers",
     "Peter Gabriel",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVr4QtQus4KP2KKfQvdRm6XFlS7crt-FF23xcC4c8iXn4BLI7HgO_VIIT0PuKowysAwA&usqp=CAU",
     "https://audio.jukehost.co.uk/Xi2kyxOxUPkXMSu683ni3aByO1rXzr7y"
   );
 
   const song4 = new Song(
     "Hard Times",
     "Fresh Bush & The Invisible Man",
     "https://i1.sndcdn.com/artworks-000089435516-x6lg01-t500x500.jpg",
     "https://audio.jukehost.co.uk/s3H6jpJlNddGkEDwU0j8hvFDkHekJx3W"
   );
 
   const song5 = new Song(
     "Walls Come Tumbling...",
     "Style Council",
     "https://m.media-amazon.com/images/I/51MslusKNPL._AC_SY450_.jpg",
     "https://audio.jukehost.co.uk/ugIPBSG5DLbAlwQ8RAznsPstmHcwOE6j"
   );
 
   const song6 = new Song(
     "Under The Bridge",
     "Red Hot Chili Peppers",
     "https://images.genius.com/2680faf3d8fe8caf0458e56c6160900d.598x600x1.jpg",
     "https://audio.jukehost.co.uk/Tfk5hk9hkHHG0h3uZfc8S5wE1lba7OKm"
   );
   const song7 = new Song(
     "Black Or White",
     "Michael Jackson",
     "https://i.ibb.co/PvDVTpJr/blackorwhite.png",
     "https://audio.jukehost.co.uk/cggwNTSI6z8bQBAGFKhG3JdGecuhXffd"
   );
   const song8 = new Song(
     "Self Control",
     "Laura Branigan",
     "https://i.ibb.co/2Y6pWRpF/self-control.png",
     "https://audio.jukehost.co.uk/8xiK2JSw1kWkuw5VOiTSPPJPzXXR5GxX"
   );
 
   playlist.addSong(song1);
   playlist.addSong(song2);
   playlist.addSong(song3);
   playlist.addSong(song4);
   playlist.addSong(song5);
   playlist.addSong(song6);
   playlist.addSong(song7);
   playlist.addSong(song8);
 
   const playerContainer = document.createElement("div");
   playerContainer.id = "player";
 
  const displayBox = document.createElement("div");
 displayBox.id = "display-box";
 
 const coverElement = document.createElement("img");
 coverElement.id = "cover";
 displayBox.appendChild(coverElement);
 
 const infoContainer = document.createElement("div");
 infoContainer.id = "info-container";
 infoContainer.style.backgroundImage = "url('')";
 infoContainer.style.backgroundSize = "cover"; // Optional: adjust based on your needs
 infoContainer.style.color = "green"; // Set text color to white
 
 const songInfo = document.createElement("div");
 songInfo.id = "song-info";
 
 const titleElement = document.createElement("h3");
 titleElement.id = "title";
 titleElement.style.fontWeight = 'normal'; // Make it normal as per previous request
 songInfo.appendChild(titleElement);
 
 const artistElement = document.createElement("p");
 artistElement.id = "artist";
 songInfo.appendChild(artistElement);
 
 infoContainer.appendChild(songInfo);
 displayBox.appendChild(infoContainer);
 
 playerContainer.appendChild(displayBox);
 
 const controlsContainer = document.createElement("div");
 controlsContainer.id = "controls-container";
 
 const controls = document.createElement("div");
 controls.id = "controls";
 
 const prevButton = document.createElement("img");
 prevButton.id = "prevButton";
 prevButton.src = "https://i.imgur.com/xTpJuO1.png";
 prevButton.alt = "Previous";
 controls.appendChild(prevButton);
 
 const playPauseButton = document.createElement("img");
 playPauseButton.id = "playPauseButton";
 playPauseButton.src = "https://i.ibb.co/LD8CbNFx/playing.png"; // Set the default play image
 playPauseButton.alt = "Play/Pause";
 controls.appendChild(playPauseButton);
 
 const nextButton = document.createElement("img");
 nextButton.id = "nextButton";
 nextButton.src = "https://i.imgur.com/dU7K3BY.png";
 nextButton.alt = "Next";
 controls.appendChild(nextButton);
 
 controlsContainer.appendChild(controls);
 
 playPauseButton.addEventListener("click", function () {
   const audio = document.getElementById("audio");
   if (audio.paused) {
     audio.play();
     playPauseButton.src = "https://i.ibb.co/LD8CbNFx/playing.png"; // Set the pause image
   } else {
     audio.pause();
     playPauseButton.src = "https://i.ibb.co/FL3bgDTb/paused.png"; // Set the play image
   }
 });
 
 nextButton.addEventListener("click", function () {
   playlist.playNext();
   updateUI(playlist);
   const audio = document.getElementById("audio");
   audio.src = playlist.getCurrentSong().audioLink;
   audio.play();
 });
 
 prevButton.addEventListener("click", function () {
   playlist.playPrevious();
   updateUI(playlist);
   const audio = document.getElementById("audio");
   audio.src = playlist.getCurrentSong().audioLink;
   audio.play();
 });
 
   const progressBarContainer = document.createElement("div");
   progressBarContainer.id = "progress-bar-container";
 
   const progressBar = document.createElement("progress");
   progressBar.type = "range";
   progressBar.id = "progress-bar";
   progressBar.value = "0";
   progressBar.max = "100";
 
 
   progressBarContainer.appendChild(progressBar);
   controlsContainer.appendChild(progressBarContainer);
   playerContainer.appendChild(controlsContainer);
 
  const volumeContainer = document.createElement("div");
   volumeContainer.id = "volume-container";
 
 const volumeLabel = document.createElement("img");
 volumeLabel.src = "";
 volumeLabel.alt = "";
 volumeContainer.appendChild(volumeLabel);
 
   const volumeSliderContainer = document.createElement("div");
   volumeSliderContainer.classList.add("is-vertical");
   volumeSliderContainer.style.marginLeft = "-130%";
   volumeSliderContainer.style.height = "126px";
 
   const volumeSlider = document.createElement("input");
   volumeSlider.type = "range";
   volumeSlider.id = "volumeSlider";
   volumeSlider.min = 0;
   volumeSlider.max = 9;
   volumeSlider.step = 1;
   volumeSlider.value = 1; // Initial volume
 
   volumeSliderContainer.appendChild(volumeSlider);
 
   const volumeDisplay = document.createElement("span");
   volumeDisplay.id = "volume-display";
   volumeDisplay.style.fontWeight = 'bold'; 
   volumeDisplay.style.display = 'none';
   volumeDisplay.textContent = "1";
 
   volumeContainer.appendChild(volumeSliderContainer);
   volumeContainer.appendChild(volumeDisplay);
 
   playerContainer.appendChild(volumeContainer);
 
   gameWindow_player.insertAdjacentElement("afterend", playerContainer);
 
 
   function updateProgressBar() {
     const audio = document.getElementById("audio");
     const progress = (audio.currentTime / audio.duration) * 100;
     try{progressBar.value = progress}
   catch{}
   }
 
  
   progressBar.addEventListener("input", function () {
     const audio = document.getElementById("audio");
     const seekTime = (progressBar.value / 100) * audio.duration;
     audio.currentTime = seekTime;
   });
 
   const audio = document.createElement("audio");
   audio.id = "audio";
   audio.src = playlist.getCurrentSong().audioLink;
   audio.volume = 1/9;
 
   audio.addEventListener("timeupdate", updateProgressBar);
   audio.addEventListener("ended", function () {
     // Play the next song when the current song ends
     playlist.playNext();
     updateUI(playlist);
     audio.src = playlist.getCurrentSong().audioLink;
     audio.play();
   });
 
     let currentVolume = 1; // Initial volume
 
   volumeSlider.addEventListener("input", function () {
     currentVolume = parseInt(volumeSlider.value, 10);
     updateVolumeDisplay();
     updateAudioVolume();
   });
 
   function updateVolumeDisplay() {
     volumeDisplay.textContent = currentVolume;
   }
 
    function updateAudioVolume() {
     const audio = document.getElementById("audio");
     audio.volume = currentVolume / 9; // Set volume between 0 and 1
   }
 
   document.body.appendChild(audio);
   audio.play();
 
   // Update the UI when the page loads
   updateUI(playlist);
 }
 
 const style = document.createElement("style");
 style.textContent = `
 #player {
     border: 3px solidrgb(132, 133, 141); /* Add your desired border style */
     display: flex;
     flex-direction: row;
   height:183px;
     background-Image: url("https://i.ibb.co/mCMN7bW9/backg5-1.png");
   }
 
   #display-box {
     display: flex;
     align-items: center;
     width: 50%;
   }
 
   #cover {
     width: 166px;
   height:166px;
   margin:12px;
   }
 
   #info-container {
     display: flex;
     flex-direction: row;
     height:178px;
   width:180px;
   margin-top: 30px;
   }
 
   #controls-container {
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 10px;
     width:50%;
   padding-top:30px;
 
   }
   .is-vertical #volumeSlider {
   width: 120px;
   padding-top: 190px;
 }
 
   #controls {
     display: flex;
     flex-direction: row;
     justify-content: center;
     width: 80%;
   }
 
   #progress-bar-container {
     width: 100%;
   }
 
   #progress-bar {
     width: 100%;
     margin: auto;
     display: flex;
     margin-Top: 20px;
   }
   
 `;
 
 document.head.appendChild(style);
 
 const gameWindow_player = document.getElementById("game_window");
 //use this function directly or put it in an event listener to start the music on the press of a certain button
 setupMusicPlayer();




