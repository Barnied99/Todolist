import { Blockquote, createStyles, Flex } from '@mantine/core';

// const useStyles = createStyles(() => ({
// Footer: {
//     display: 'flex',
//     borderRadius: '9px 9px 9px 9px',
//     flexDirection: 'row',
//     height: '60px',
//     background: '#FFFFFF',
//     marginTop: '10px',
//     border: '0px solid #EAEBED',
//     alignItems: 'center',
// }


// }
// ))


const Footer = () => {
    return (
        <Flex
            direction="row"
            bg="#FFFFFF"
            style={{ borderRadius: '9px 9px 9px 9px', marginBottom: '50px' }

            }
        >
            <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going to get.
            </Blockquote>
        </Flex >

    )

}


export default Footer;
