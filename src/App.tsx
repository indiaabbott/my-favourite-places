import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './Components/Title'
import Content from './Components/Content'
import Footer from './Components/Footer'




function App() {
    return (
        <div className="App">
            <Title />
            <Content
                title="A bilingual city"
                placeName="Montreal"
                countryName="Canada"
                mainImage="https://www.nationalgeographic.com/content/dam/travel/2017-digital/canada/montreal-article/moins-sombre.adapt.1900.1.jpg"
                googleMaps="https://www.google.com/maps/place/Montreal,+QC,+Canada/@45.5576996,-74.0104841,10z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"
                explanation="A very quirky city near the Hudson Bay with easy access to Boston and New York"
            />
            <Content
                title="An underrated small town"
                placeName="Belper"
                countryName="England"
                mainImage="https://www.picturesofengland.com/img/X/1163840.jpg"
                googleMaps="https://www.google.com/maps?q=belper+england&bih=796&biw=1431&rlz=1C5CHFA_enGB937GB938&hl=en&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjo7P-Jnd_uAhVUQ0EAHYc8B94Q_AUIDygB"
                explanation="A small town north of Derby in the heart of a UNESCO World Heritage Site"
            />
            <Content
                title="A different location for a New Years celebration"
                placeName="Budapest"
                countryName="Hungary"
                mainImage="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa42066f2-15c8-11e9-8239-c0a124428b01.jpg?crop=5832%2C3280%2C0%2C304&resize=1180"
                googleMaps="https://www.google.com/maps?q=budapest&rlz=1C5CHFA_enGB937GB938&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiNsfH_n9_uAhVlQUEAHVtfC7UQ_AUoAXoECBcQAw"
                explanation="I went here during NYE and it was awesome (but not v vegetarian friendly)"
            />
            <Content
                title="The perfect place to get your fortune read"
                placeName="Salem"
                countryName="USA"
                mainImage="https://i.pinimg.com/736x/22/54/8d/22548d63f14ea8349cf6f9d53767ab64.jpg"
                googleMaps="https://www.google.com/maps?q=salem+ma&bih=796&biw=1440&rlz=1C5CHFA_enGB937GB938&hl=en&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjs_4beot_uAhVTTsAKHWeIAW0Q_AUIDygB"
                explanation="A charismatically creepy little town not far from Boston. Go on their anti-Valentine's day tour for LOLs"
            />
            <Footer />
        </div>
    );

}

export default App;
