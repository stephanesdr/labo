import { Tokens } from '../../src/styles/theme'
import { Heading as ChakraHeading } from '@chakra-ui/react' 
import { CSSProperties } from 'react'

const Heading = ({
    text,
    size,
    style,
}: {
    text: string
    size: 'sm' | 'md' | 'lg'
    style?: CSSProperties
}) => {

    let el:any = 'h1'
    let fontSize = '46px'
    if (size === 'md') {
        el = 'h2'
        fontSize = '36px'
    } else if ( size === 'sm') {
        el = 'h3'
        fontSize = '28px'
    }

    return (
        <ChakraHeading 
            as={el}
            bg={Tokens.green.base}
            bgClip="text"
            style={style}
            variant={el}
            fontSize={fontSize}
        >
            {text}
        </ChakraHeading>
    )
}

export default Heading;