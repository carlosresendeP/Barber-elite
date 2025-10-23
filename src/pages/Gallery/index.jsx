import { Section, SectionTitle, SectionSubtitle } from '../../components/Common';
import { useState } from 'react';
import {
  GalleryGrid,
  GalleryItem,
  GalleryOverlay,
  FilterButtons,
  FilterButton
} from './styled';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800',
    title: 'Corte Clássico',
    category: 'corte',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800',
    title: 'Barba Modelada',
    category: 'barba',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    title: 'Ambiente Interno',
    category: 'ambiente',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
    title: 'Estilo Moderno',
    category: 'corte',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800',
    title: 'Barba Completa',
    category: 'barba',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800',
    title: 'Nossa Equipe',
    category: 'ambiente',
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('todos');

  const filteredImages = filter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <Section id="galeria">
      <SectionTitle>Galeria</SectionTitle>
      <SectionSubtitle>
        Confira alguns dos nossos trabalhos e nosso ambiente
      </SectionSubtitle>

      <FilterButtons>
        <FilterButton 
          $active={filter === 'todos'} 
          onClick={() => setFilter('todos')}
        >
          Todos
        </FilterButton>
        <FilterButton 
          $active={filter === 'corte'} 
          onClick={() => setFilter('corte')}
        >
          Cortes
        </FilterButton>
        <FilterButton 
          $active={filter === 'barba'} 
          onClick={() => setFilter('barba')}
        >
          Barbas
        </FilterButton>
        <FilterButton 
          $active={filter === 'ambiente'} 
          onClick={() => setFilter('ambiente')}
        >
          Ambiente
        </FilterButton>
      </FilterButtons>

      <GalleryGrid>
        {filteredImages.map((image) => (
          <GalleryItem key={image.id}>
            <img src={image.url} alt={image.title} />
            <GalleryOverlay>
              <h3>{image.title}</h3>
              <p>BarberElite</p>
            </GalleryOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </Section>
  );
};

export default Gallery;
