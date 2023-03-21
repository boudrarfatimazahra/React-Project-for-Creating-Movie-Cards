import './App.css';
import ListBar from './Navbar';
import CardFilms from './cardFilms';


function App() {
  let cardList = [
    {
        image : "Castle-intheSky.jpg",
        title : "Castle in the Sky (1986)",
        descripton : "Two children search for a legendary floating castle while being pursued by pirates.",
    },
    {
        image : "MyNeighborTotoro.jpg",
        title : "My Neighbor Totoro (1988)",
        descripton : "Two young sisters move to the countryside and befriend a forest spirit named Totoro.",
    },
    {
        image : "kikis-delivery-service-1108x0-c-default.jpg",
        title : "Kiki's Delivery Service (1989)",
        descripton : "A young witch named Kiki moves to a new town and starts a delivery service with her talking cat.",
    },
    {
        image : "princessmononoke_1280x720.png",
        title : "Princess Mononoke (1997)",
        descripton : "Set in medieval Japan, a young warrior named Ashitaka tries to stop a war between humans and forest gods.",
    },
    {
        image : "a_silent_voice_jp_poster_F.jpg",
        title : "Spirited Away (2001)",
        descripton : "A former bully tries to make amends with a deaf girl he used to torment.",
    },
    {
        image : "howl-s-moving-castle--hi_res-90ac09c2.jpg",
        title : "Howl's Moving Castle (2004)",
        descripton : "A young woman seeks the help of a wizard to break a curse.",
    },
    {
        image : "MTheSecretWorldofArrietty.webp",
        title : "The Secret World of Arrietty (2010)",
        descripton : "A tiny borrower named Arrietty befriends a human boy.",
    },
    {
        image : "a_silent_voice_jp_poster_F.jpg",
        title : "A Silent Voice (2016)",
        descripton : " former bully tries to make amends with a deaf girl he used to torment in elementary school.",
    },
    

] 
  
  return (
    <div className="App">
      <ListBar/>
      <CardFilms list={cardList}/>
     
    
    </div>
  );
}

export default App;
