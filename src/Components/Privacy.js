import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import privacy from '../constants/privacy_policy.md'

function Privacy() {
    const [markdown, setMarkdown] = useState();
    useEffect(() => {
        console.log('in')
        fetch(privacy).then(res => res.text()).then(text => setMarkdown(text));
        console.log('yo')
    }, []);

    console.log(markdown)
    return (
        <div>
            <ReactMarkdown source={markdown} />
        </div>
    )
}

export default Privacy

