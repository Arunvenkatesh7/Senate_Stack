import React,{useState} from 'react'
import './gallery.css'

import image1 from '../Images/Gal_Images/1.jpg'
import image2 from '../Images/Gal_Images/2.jpg'
import image3 from '../Images/Gal_Images/3.jpg'
import image4 from '../Images/Gal_Images/4.jpg'
import image5 from '../Images/Gal_Images/5.jpg'
import image6 from '../Images/Gal_Images/6.jpg'
import image7 from '../Images/Gal_Images/7.jpg'
import image8 from '../Images/Gal_Images/8.jpg'
import image9 from '../Images/Gal_Images/9.jpg'
import image10 from '../Images/Gal_Images/10.jpg'


const Gallery = () => {

    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, category: 'groundup', header: 'Building Construction', subheader: '', imagePath: 'image1' },
        { id: 2, category: 'renovation', header: 'Building Renovation', subheader: '', imagePath: 'image2' },
        { id: 3, category: 'groundup', header: 'Construction Modelling', subheader: '', imagePath: 'image3' },
        { id: 4, category: 'exterior', header: 'Interior Designs', subheader: '', imagePath: 'image4' },
        { id: 5, category: 'renovation', header: 'Roof Repairing', subheader: '', imagePath: 'image5' },
        { id: 6, category: 'design', header: 'Architecture Consulting', subheader: '', imagePath: 'image6' },
        { id: 7, category: 'exterior', header: 'Building Maintenance', subheader: '', imagePath: 'image7' },
        { id: 8, category: 'design', header: 'Exterior Design Package', subheader: '', imagePath: 'image8' },

        
    ];

    const handleFilterChange = (category) => {
        setFilter(category);
      };

      const imageMapping = {
          image1,image2,image3,image4,image5,image6,image7,image8,image9,image10
       
      };



      const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);


   
    

  return (
    <>

            <div className="gallery_system">
                    <div className="headers">
                        <div className="header">BUILDING DREAMS: SHOWCASING EXQUISITE DESIGN</div>
                    </div>

              <div className="filters">
                <div class="items-links">
                <button 
            className={`item-link ${filter === 'all' ? 'menu-active' : ''}`} 
            onClick={() => handleFilterChange('all')}
          >All projects</button>
                    <button 
            className={`item-link ${filter === 'exterior' ? 'menu-active' : ''}`} 
            onClick={() => handleFilterChange('exterior')}
          >
            Exterior & Interior
          </button>
          <button 
            className={`item-link ${filter === 'renovation' ? 'menu-active' : ''}`} 
            onClick={() => handleFilterChange('renovation')}
          >
            Renovation
          </button>
          <button 
            className={`item-link ${filter === 'design' ? 'menu-active' : ''}`} 
            onClick={() => handleFilterChange('design')}
          >
            Design Elevation
          </button>
          <button 
            className={`item-link ${filter === 'groundup' ? 'menu-active' : ''}`} 
            onClick={() => handleFilterChange('groundup')}
          >
            GroundUp Constructions
          </button>
                </div>
            </div>
            <div className="displayImagesContainer">
        {filteredProjects.map(project => (
          <div key={project.id} style={{
            backgroundImage: `url(${imageMapping[project.imagePath]})`,
            
          }} className='image_container' >
            <div className="overlay">
              <div className="overlay_header">{project.header}</div>
              <div className="overlay_subheader">{project.subheader}</div>
            </div>
          </div>
        ))}
      </div>
                    



            </div>
    
    
    </>
  )
}

export default Gallery