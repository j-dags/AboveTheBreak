import { animated } from 'react-spring'
import styled from 'styled-components'

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
cursor: pointer;
will-change: height;
display: grid;
grid-template-columns: repeat(auto-fit, 325px);
grid-gap: 3em;
padding: 0em 2em;
place-content: center
}
`

const Item = styled(animated.div)`
	border-radius: 5px;
	will-change: transform, opacity;
`

export { Container, Item }
