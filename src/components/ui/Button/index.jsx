import styled, { css } from 'styled-components';

const baseButton = css`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  font-family: inherit;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled.button`
  ${baseButton}
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.dark};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -8px ${({ theme }) => theme.colors.primary.main};
  }

`;

export const SecondaryButton = styled.button`
  ${baseButton}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.dark};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -8px ${({ theme }) => theme.colors.primary.main};
  }

  ${props => props.size === 'large' && css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `}

  ${props => props.size === 'small' && css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `}
`;

export const OutlineButton = styled.button`
  ${baseButton}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;