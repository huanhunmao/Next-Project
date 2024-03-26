



function handler(req, res){
    const eventId = req.query.eventId;

    if(req.method === 'POST'){
        const {email, name, text} = req.body

        if(!email || !email.includes('@') || 
        !name || name.trim() === '' || 
        !text || !text.trim() === ''){
            res.status(422).json({message: 'Invalid input'})
            return 
        }

        const newComment = {
            email,
            name,
            text,
            eventId,
          };      
    
        res.status(201).json({ message: 'Added comment.', comment: newComment });
    }

    if(req.method === 'GET'){
        const dummyList =  [
            {id:'c1', name: 'ppx', text: 'The first test comment'},
            {id:'c2', name: 'kk', text: 'The second test comment'}
        ]

        res.status(200).json({
            message: dummyList
        })
    }
}

export default handler