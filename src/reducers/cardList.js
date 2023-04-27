

let intialState = {
    list: [
    
    {
        id: 1,
        image: "Castle-intheSky.jpg",
        title: "Castle in the Sky (1986)",
        descripton: "Two children search for a legendary floating castle while being pursued by pirates.",
        imageText: "Image1986.jpg",
        text: "Castle in the Sky was directed by Hayao Miyazaki and produced by Studio Ghibli. It was the first film to be released by the studio, and has since become a beloved classic of the anime genre. The film's beautiful animation, memorable characters, and exciting story make it a must-see for fans of animation and adventure.",
        date: "August 2, 1986",
        actors: {
            name1: "Mayumi Tanaka",
            name2: "Keiko Yokozawa",
            name3: "Kotoe Hatsui"
        }
    },
    {
        id: 2,
        image: "MyNeighborTotoro.jpg",
        title: "My Neighbor Totoro (1988)",
        descripton: "Two young sisters move to the countryside and befriend a forest spirit named Totoro.",
        imageText: "Image1988.webp",
        text: "My Neighbor Totoro was directed by Hayao Miyazaki and produced by Studio Ghibli. The film is a heartwarming tale of family, friendship, and the magic of nature. The character of Totoro has become an iconic symbol of Japanese animation and is beloved by fans around the world.",
        date: "April 16, 1988",
        actors: {
            name1: "Noriko Hidaka",
            name2: "Chika Sakamoto",
            name3: "Shigesato Itoi"
        }
    },
    {
        id: 3,
        image: "kikis-delivery-service-1108x0-c-default.jpg",
        title: "Kiki's Delivery Service (1989)",
        descripton: "A young witch named Kiki moves to a new town and starts a delivery service with her talking cat.",
        imageText: "Image1989.jpg",
        text: "Kiki's Delivery Service was directed by Hayao Miyazaki and produced by Studio Ghibli. The film is a charming coming-of-age story that celebrates the joys of independence and self-discovery. Its colorful characters, beautiful animation, and enchanting story have made it a favorite of audiences around the world.",
        date: "July 29, 1989",
        actors: {
            name1: "Minami Takayama",
            name2: "Rei Sakuma",
            name3: "Kappei Yamaguchi"
        }
    },
    {
        id: 4,
        image: "princessmononoke_1280x720.png",
        title: "Princess Mononoke (1997)",
        descripton: "Set in medieval Japan, a young warrior named Ashitaka tries to stop a war between humans and forest gods.",
        imageText: "Image1997.jpg",
        text: "Princess Mononoke was directed by Hayao Miyazaki and produced by Studio Ghibli. The film is a dark and complex tale that explores the relationships between humans and nature, and the destructive consequences of greed and industrialization. Its striking visuals, powerful themes, and memorable characters have made it a landmark of Japanese animation.",
        date: "July 12, 1997",
        actors: {
            name1: "Yōji Matsuda",
            name2: "Yuriko Ishida",
            name3: "Yūko Tanaka"
        }
    },
    {
        id: 5,
        image: "a_silent_voice_jp_poster_F.jpg",
        title: "Spirited Away (2001)",
        descripton: "A former bully tries to make amends with a deaf girl he used to torment.",
        imageText: "Image2001.jpg",
        text: "Spirited Away was directed by Hayao Miyazaki and produced by Studio Ghibli. The film is a surreal and imaginative masterpiece that has become one of the most beloved and successful animated films of all time. Its breathtaking animation, imaginative storytelling, and memorable characters have captured the hearts of audiences around the world.",
        date: "July 20, 2001",
        actors: {
            name1: "Rumi Hiiragi",
            name2: "Miyu Irino",
            name3: "Mari Natsuki"
        }
    },
    {
        id: 6,
        image: "howl-s-moving-castle--hi_res-90ac09c2.jpg",
        title: "Howl's Moving Castle (2004)",
        descripton: "A young woman seeks the help of a wizard to break a curse.",
        imageText: "Image2004.jpg",
        text: "Howl's Moving Castle was directed by Hayao Miyazaki and produced by Studio Ghibli. The film is a visually stunning and emotionally complex story that explores themes of love, war, and identity. Its fantastical world, memorable characters, and sweeping romance have made it a favorite of audiences around the world.",
        date: "November 20, 2004",
        actors: {
            name1: "Chieko Baisho",
            name2: "Takuya Kimura",
            name3: "Akihiro Miwa"
        }
    },
    {
        id: 7,
        image: "MTheSecretWorldofArrietty.webp",
        title: "The Secret World of Arrietty (2010)",
        descripton: "A tiny borrower named Arrietty befriends a human boy.",
        imageText: "Image2010.jpg",
        text: "The Secret World of Arrietty was directed by Hiromasa Yonebayashi and produced by Studio Ghibli. The film is a charming and visually stunning adaptation of the classic novel 'The Borrowers.' Its whimsical storytelling, beautiful animation, and heartwarming characters make it a delightful family film.",
        date: "July 17, 2010",
        actors: {
            name1: "Mirai Shida",
            name2: "Ryunosuke Kamiki",
            name3: "Tomokazu Miura"
        }

    },
    {
        id: 8,
        image: "a_silent_voice_jp_poster_F.jpg",
        title: "A Silent Voice (2016)",
        descripton: " former bully tries to make amends with a deaf girl he used to torment in elementary school.",
        imageText: "Image2016.jpg",
        text: "A Silent Voice was directed by Naoko Yamada and produced by Kyoto Animation. The film is a poignant and emotionally intense exploration of redemption, forgiveness, and the power of human connection. Its stunning animation, powerful storytelling, and nuanced characters have earned it critical acclaim and a dedicated fan base.",
        date: "September 17, 2016",
        actors: {
            name1: "Miyu Irino",
            name2: "Saori Hayami",
            name3: "Aoi Yuki"
        }
    },
]}
const cardList = (state = intialState, action) => {
    switch(action.type){
        case "deleteCard" :
        return {...state ,list:[...state.list.filter(item => item.id !== action.payload) ]};
        default : 
        return state;
    }

}

export default cardList