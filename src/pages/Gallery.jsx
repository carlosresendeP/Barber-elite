import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../components/StyledComponents';
import { useState } from 'react';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.15);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 1;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.lighter};
    font-size: 0.9rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${({ $active, theme }) => 
    $active ? theme.colors.secondary : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

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
