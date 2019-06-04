import React from 'react'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import colors from '../constants/colors'
const FaqContainer = styled.div`
    font-size: 1.6rem;

    h2 {
        margin-top: 15px;
        font-weight: 600;
    }
    code {
        background-color: ${colors.grey};
    }
`
const FaqList = styled.ul`
    display: block;
    list-style: disc outside none;
    margin: 1em 0;
    padding: 0 0 0 40px;
    ol { 
        list-style-type: decimal;
    }
    li {
        display: list-item;
    }
`;
const markdown = `
    ##
    ##
    # Host Database
    ##
    127.0.0.1	localhost
    255.255.255.255	broadcasthost
    ::1 localhost
    fe80::1%lo0	localhost
`
function Faq(props) {
    return (
        <FaqContainer>
            <h1>Frequently Asked Questions</h1>
            <h2>My timer is over but websites are still blocked. What do I do?</h2>
            <FaqList>
                <ol>
                    <li>Open TextEdit and create a new document.</li>
                    <li>At the top, select "Format" and then "Make plain text" or press Command+Shift+T</li>
                    <li>Paste the following text into the text document.</li>
                    <ReactMarkdown source={markdown} />
                    <li>Save the file with the name "hosts". <strong>IT IS IMPORTANT YOU DO NOT USE AN EXTENSION.</strong></li>
                    <li>Open Finder</li>
                    <li>At the top click "Go" and select "Go to Folder" or press Command+Shift+G</li>
                    <li>Go to the folder with the path "private/etc"</li>
                    <li>Drag and drop the hosts file you created earlier into this folder. You should may be asked to type in your password. If it asks if you would like to replace the current hosts file, select yes.</li>
                </ol>
            </FaqList>
            <p style={{position: 'absolute', bottom: 0}}>If you have further questions or bugs to report, plase <a href="mailto:trevordebard@gmail.com">contact me here</a></p>
        </FaqContainer>
    )
}

export default Faq

