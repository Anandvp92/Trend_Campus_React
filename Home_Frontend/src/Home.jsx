import './Home.css';
import { useState } from 'react';
import images from './images/priscilla-du-preez-g86airJZ4Gs-unsplash.jpg';
import { Link, animateScroll as scroll } from "react-scroll";
import { Footer } from './Footer';
export function Home(){
 
    const [sectionImages, setSectionImages] = useState({
        Home: 'https://media.istockphoto.com/id/1442473224/photo/happy-young-beautiful-woman-having-a-coffee-or-tea-at-home.webp?b=1&s=170667a&w=0&k=20&c=AM0SzdSuN-h9T8GBvGxdeBJsxjhBgBeoOxO_2RSzkMs=',
        StorySection: 'https://images.pexels.com/photos/4194857/pexels-photo-4194857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Flavours: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Upcomming: 'https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        OnDemand: 'https://e1.pxfuel.com/desktop-wallpaper/483/252/desktop-wallpaper-dark-tech-black-technology.jpg',
        Faqs: 'https://img.freepik.com/free-vector/black-background-with-red-glowing-low-poly-mesh_1017-20215.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais',
        Contact: 'https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      });
    return(
        <>

{/* Start Home page */}
<section classNameName='Home'>
<div className="cover" style={{ backgroundImage: `url(${images})` }}>
    
<h1>Home</h1>

</div>
</section>
{/* End Home page */}


<section classNameName='Story-Section'>
<div className="cover" style={{ backgroundImage: `url(${sectionImages.StorySection})` }}>
<h1>Story Section</h1>
</div>
</section>

<section classNameName='Flavours'>
<div className="cover" style={{backgroundImage:`url(${sectionImages.Flavours})`}}>
<h1>Flavours</h1>
</div>
</section>

<section classNameName='Upcomming'>
<div className="cover" style={{backgroundImage:`url(${sectionImages.Upcomming})`}}>
<h1>Upcomming</h1>

</div>
</section>



<section classNameName='On-demand'>
<div className="cover" style={{backgroundImage:`url(${sectionImages.OnDemand})`}}>
<h1>On demand</h1>
</div>
</section>


<section classNameName='Faqs'>
<div className="cover" style={{backgroundImage:`url(${sectionImages.Faqs})`}}>
<h1>FAQS</h1>
</div>
</section>

<section classNameName='Contact'>
<div className="cover" style={{ backgroundImage: `url(${sectionImages.Contact})` }}>
<h1>Contact</h1>
</div>
</section>


<section classNameName='Contact'>
    <div>
<Footer/>
</div>
</section>

        </>
    )
}