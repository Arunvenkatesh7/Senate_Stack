import React,{useState} from 'react'
import './gallery.css'
import cons_image from '../Images/consimage.jpg'
import image1 from '../Images/Image7.jpg'

const Gallery = () => {

    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, category: 'exterior', header: 'header1', subheader: 'subheader1', imagePath: 'cons_image' },
        { id: 2, category: 'renovation', header: 'header1', subheader: 'subheader1', imagePath: 'image1' }
    ];

    const handleFilterChange = (category) => {
        setFilter(category);
      };

      const imageMapping = {
        image1,
        cons_image,
       
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
            Exterior Design
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