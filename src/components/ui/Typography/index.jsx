import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => {
    const { level } = props;
    switch(level) {
      case 1: return '3rem';
      case 2: return '2.25rem';
      case 3: return '1.875rem';
      case 4: return '1.5rem';
      case 5: return '1.25rem';
      case 6: return '1.125rem';
      default: return '2.25rem';
    }
  }};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${props => props.mb || '1.5rem'};
  color: ${props => props.color || props.theme.colors.text.primary};
  text-align: ${props => props.align || 'left'};

  ${props => props.gradient && `
    background: ${props.theme.colors.gradients.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}

  ${({ theme }) => theme.media.tablet} {
    font-size: ${props => {
      const { level } = props;
      switch(level) {
        case 1: return '1.875rem';
        case 2: return '1.5rem';
        case 3: return '1.25rem';
        case 4: return '1.125rem';
        case 5: return '1rem';
        case 6: return '0.875rem';
        default: return '1.5rem';
      }
    }};
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: ${props => props.mb || '1rem'};
  text-align: ${props => props.align || 'left'};

  ${({ theme }) => theme.media.tablet} {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.color || props.theme.colors.text.secondary};
  line-height: 1.7;
  margin-bottom: ${props => props.mb || '1rem'};
  text-align: ${props => props.align || 'left'};

  ${({ theme }) => theme.media.tablet} {
    text-align: ${props => props.mobileAlign || 'left'};
  }
`;