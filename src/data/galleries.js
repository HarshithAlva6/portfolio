// Centralized image galleries shared by Projects, the certificates carousel,
// and the "view all" modal (previously these imports were duplicated in 3 files).
import dyn from '../assets/images/coursera/dyn.jpg';
import jen from '../assets/images/coursera/jen.jpg';
import mdb from '../assets/images/coursera/mdb.jpg';
import njs from '../assets/images/coursera/njs.jpg';
import sbh2 from '../assets/images/coursera/sbh2.jpg';
import sel from '../assets/images/coursera/sel.jpg';
import wpk from '../assets/images/coursera/wbk.jpg';
import sd from '../assets/images/SDA.png';

import dev from '../assets/images/Dev.jpg';
import coursera from '../assets/images/Coursera.jpg';
import js from '../assets/images/JavaScript.jpg';
import tf from '../assets/images/TensorFlow.jpg';
import spring from '../assets/images/Spring.jpg';
import data from '../assets/images/Data Science.jpg';
import python from '../assets/images/Python.png';
import swift from '../assets/images/swift.png';

// Project screenshots / nano-degree slides
export const projectGallery = [dyn, jen, mdb, njs, sbh2, sel, wpk, sd];

// Full certificate set (used by Projects "certificates" + "view all")
export const certificateGallery = [dev, coursera, js, tf, spring, data, python, swift];

// Subset shown in the rotating certificate carousel and the modal default
export const certificateCarousel = [dev, coursera, js, tf, spring, data];
