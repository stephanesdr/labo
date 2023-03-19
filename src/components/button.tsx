import { Tokens } from '../../src/styles/theme'
import { Button as ChakraButton } from '@chakra-ui/react'
import { CSSProperties } from 'react'


const Button = ({
    label,
    style,
}: {
    label: string
    style?: CSSProperties
}) =>  {
    return (
        <ChakraButton
            borderRadius={'5px'}
            bg={Tokens.blue.base}
            _hover={{
                bg:`${Tokens.blue.shades[200]}`,
            }}
            color={'white'}
            height={'24px'}
            fontWeight={'medium'}
            fontSize={'2xl'}
            style={style}     
        >
            {label}
        </ChakraButton>
    )
}

export default Button;