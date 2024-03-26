

function handler(req, res){
    const email = req.body.email;

    if(req.method === 'POST'){
        if(!email || !email.includes('@')){
            res.status(422).json({message: 'Invalid email address'})
            return 
        }
    
        res.status(201).json({message: 'Signed up! '})
    }else{
        res.status(200).json({message: 'Get somethings'})
    }
}

export default handler