import { Container, Box, Text, Spacer } from "@chakra-ui/react"
import { Tokens } from '../../styles/theme'
import Button from "@/components/button"
import Heading from "@/components/heading"

export default function Lab() {
    return (
        <>
            <Container>
                <Text fontSize="5xl" color={Tokens.blue.base}>Hello</Text>
                <Text fontSize="5xl" color={Tokens.blue.shades[50]}>Hello</Text>
                <Text fontSize="5xl" color={Tokens.blue.shades[100]}>Hello</Text>
                <Text fontSize="5xl" color={Tokens.blue.shades[200]}>Hello</Text>
                <Spacer height={100}/>
                <Button label="My Button" style={{border: '1px solid red'}} />
                <Heading 
                    text={'this is a heading'}
                    size='lg'
                    style={{marginBlock: '14px', color:`${Tokens.blue.shades[50]}`}}
                />
            </Container>
        </>
    )
}