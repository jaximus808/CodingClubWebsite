module.exports = function(req, res, next)
{
    if(req.body.pass === process.env.Discord_Auth_Pass)
    {
        next(); 
    }
    else 
    {
        res.status(400).send({error:true, message:"fail"});
    }
}