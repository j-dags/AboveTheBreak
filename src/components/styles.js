import { animated } from 'react-spring';
import styled from 'styled-components';

// const Global = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

//   html,
//   body,
//   #root {
//     margin: 0;
//     padding: 0;
//     height: 100%;
//     width: 100%;
//     overflow: hidden;
//     user-select: none;
//     background: lightblue;
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const Container = styled(animated.div)`
	position: relative;
	display: flex;
	align-content: center;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
	will-change: height;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Item = styled(animated.div)`
	border-radius: 5px;
	will-change: transform, opacity;
`;

export { Container, Item };
