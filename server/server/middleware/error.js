import winston from 'winston';

export default function(err,req,res,next){
    winston.error(err.message,err);

    // err
    // warn
    // info
    // verbose
    // debug
    // silly



    res.status(500).json({
        status:500,
        error: "You have an async failure...."
    });
}