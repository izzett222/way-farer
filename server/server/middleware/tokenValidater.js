const tokenValidator = (req, res, next) => {
    const user = await users.find(c=>c.id ===req.user.id)
    try{
        if(!user){
            return res.status(409).json({
                status:'404',
                error:'No Token Provided'
            });
        }

        next();
    }
};


export {
    tokenValidator,
}