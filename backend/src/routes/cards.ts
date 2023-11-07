import express from 'express'


const router = express.Router()

router.get('/', validateToken, (req, res)=> {
    res.send(['1', '2', '3'])
})

router.post('/', (req, res)=> {
    res.send({'hello': 'world'})
})

function validateToken(req: any, res: any, next: any){
    let bearer = req.headers['authorization'];
    if(typeof bearer !== 'undefined'){
        bearer = bearer.split(' ')[1]
        req.token = bearer;
        next()
    } else{
        res.status(401);
        res.send({'unauthorized': 'asdasd'})
    }
}

export default router