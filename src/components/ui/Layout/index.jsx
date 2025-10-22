import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 1rem;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: 5rem 0;

  ${({ theme }) => theme.media.tablet} {
    padding: 4rem 0;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 3rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '300px'}, 1fr));
  gap: ${props => props.gap || '2rem'};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || '1rem'};
  flex-direction: ${props => props.direction || 'row'};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: ${props => props.mobileDirection || 'column'};
    text-align: ${props => props.mobileAlign || 'center'};
    gap: 1.5rem;
  }
`;