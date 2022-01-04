import { Slider } from './Components';

import './App.scss';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';

const imgArray = [ img1, img2, img3, img4, img5 ];
// const imgArray = [];

function App() {
    return (
        <div className="App">
            <Slider images={ imgArray } />
        </div>
    );
}

export default App;
