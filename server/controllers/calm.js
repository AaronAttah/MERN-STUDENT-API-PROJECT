export const getCalm = (req, res) => {
    res.send('calm is working...alright')
}


export const sendCalm = (req,res) => {
    const body = req.body
    res.status(200).send(body)
}