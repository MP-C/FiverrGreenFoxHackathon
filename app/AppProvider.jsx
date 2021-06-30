import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28badfzae',
            index: 0,
            name: "@zabi008",
            photo: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6f261ec2ed633e9e326a84b94261f4a8-1590303234122/4862e2d7-4895-43f2-a227-1e620197ae5d.png",
            uri: require("./assets/vid2.mp4"),
            title: "Full Stack Developer, Node.js, React",
            likes: 210,
            comments: 12,
            star: 4.7
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            index: 1,
            name: "@KHISTA",
            photo: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/bf6228d655ae51a60577b702672d0ce3-1618815307923/3059e5c0-4ed4-4cdf-9886-92d5d6f9e7c9.jpg",
            uri: require("./assets/vid3.mp4"),
            title: "IOS developer, swift, xcode",
            likes: 3012,
            comments: 31,
            star: 4.1
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfsqb',
            index: 2,
            name: "@zabborriaz",
            photo: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8e3616b7f419873075b1fa1c7823b0e5-1540306748750/1caf15f6-b982-41fc-9d2b-f972581235dc.JPG",
            uri: require("./assets/vid1.mp4"),
            title: "Web Programming, Custom Website",
            likes: 10,
            comments: 0,
            star: 4.9
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfqsefsqeb',
            index: 3,
            name: "@simpleweb12",
            photo: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83598ce6f26f090a63d27d916a41c945-851874161620157771253/JPEG_20210505_011928_745969646.jpg",
            uri: require("./assets/vid2.mp4"),
            title: "Web Programming, Custom Website",
            likes: 9730,
            comments: 101,
            star: 4.5
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfqsefs',
            index: 4,
            name: "@aamirserhar",
            photo: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/593339e3f007c2b3ee15c0141f37889e-1602610596960/c5434bee-2a29-4ff9-8ae9-8fed89ea4924.png",
            uri: require("./assets/vid4.mp4"),
            title: "Android App Programming",
            likes: 4130,
            comments: 41,
            star: 4.9
        }
    ]);

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}
