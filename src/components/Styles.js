import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
position: relative;
cursor: pointer;
will-change: height;
}
`

const Item = styled(animated.div)`
	border-radius: 5px;
	will-change: transform, opacity;
`

export { Container, Item }
