import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { FaSearch } from 'react-icons/fa';

import { Sizes, Colors } from '../../config';

const AnimatedContainer = posed.button({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const Container = styled(AnimatedContainer)`
  position: absolute;
  bottom: ${Sizes.SPACING * 2}px;
  left: calc(50% - 150px);
  width: 300px;
  height: 50px;
  background-color: ${Colors.BACKGROUND};
  border: none;
  padding: 7px;
  pointer-events: auto;
`;

const Content = styled.div`
  background-color: ${Colors.BACKGROUND_SECONDARY};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
`;

const Text = styled.span`
  color: black;
  font-size: 14px;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 25px;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
`;

interface SearchButtonProps {
  toggleDrawer: (value: boolean) => void;
}

const SearchButton: React.FunctionComponent<SearchButtonProps> = ({
  toggleDrawer,
}) => (
  <Container onClick={() => toggleDrawer(true)}>
    <Content>
      <Text>Search for stabbing, theft, etc...</Text>
      <IconContainer>
        <FaSearch />
      </IconContainer>
    </Content>
  </Container>
);

export default SearchButton;
