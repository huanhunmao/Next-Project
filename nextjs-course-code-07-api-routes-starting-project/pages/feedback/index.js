import { useState } from "react"
import { buildFeedbackPath,extractFeedback } from "../api/feedback"

function FeedbackPage(props){
    const [eachEmail,setEachEmail] = useState(null)

    function seeEachEmail(id){
        fetch(`/api/feedback/${id}`).then(res => res.json())
        .then(data => setEachEmail(data.feedback))
        .catch(err => console.error(err))
    }

    return <ul>
        {
            <>
            {
                eachEmail && eachEmail.email
            }
           { props.feedbackItems.map(item =>
                <>
                <li key={item.id}>{item.text}</li>
                <button onClick={seeEachEmail.bind(null, item.id)}>Seed email</button>
                </>
            )}
            </>
        }
    </ul>
}

export async function getStaticProps(){
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)

    return {
        props:{
            feedbackItems:data
        }
    }
}

export default FeedbackPage