import { buildFeedbackPath, extractFeedback } from "."


function handler(req, res){
    const feedbackId = req.query.feedbackId 
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    const selectedData = data.find(data => data.id === feedbackId)

    res.status(200).json({
        feedback: selectedData
    })
}

export default handler