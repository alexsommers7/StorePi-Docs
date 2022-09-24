import { Flex, Text } from '@chakra-ui/react'
import { BorderColor } from '../../utils/color-mode-values/colorModeValues.utils'

const Sidebar = () => {
	return (
		<Flex 
			as="aside"
			direction="column"
			fontSize="sm"
			p="32px"
			borderRight="1px solid transparent"
			borderColor={BorderColor}
		>
			<Text>Introduction</Text>
		</Flex >
	)
}

export default Sidebar
