import Featuredinfo from "../mainInfo/Featuredinfo"
import Popup from 'reactjs-popup';
import ReactAudioPlayer from 'react-audio-player';
import 'reactjs-popup/dist/index.css';
import "./venityfm.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function venityfm() {
    

    
    return (
        <div className="venityfm">
            <Featuredinfo />
            <div className="homewidgets">
            <Carousel className="bannerWheel" autoPlay="true" infiniteLoop="true" interval="6000" showThumbs="false">
                
                <div>
                    <img src="https://cdn.discordapp.com/attachments/874688609310101524/874917636230774804/juodc.png" />
                </div>
                <div>
                    <img src="https://cdn.radiopanel.co/ba7a7cb1-0a0d-49be-bb95-186f3346fea5/8979d7fc-de79-4a07-a057-e00ca82f4133.png" />
                </div>
                <div>
                    <img src="https://cdn.radiopanel.co/ba7a7cb1-0a0d-49be-bb95-186f3346fea5/5457e7cf-5374-4827-8a56-267958be39ab.png" />
                </div>
            </Carousel>

            </div>

        </div>
    )
}
