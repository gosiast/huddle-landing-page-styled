import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header}; //we can pass props
	padding: 40px 0;
`;
