const asyncmiddleware = (handler)=>{
    return async(req,res,next)=>{
        try{
            await  handler(req,res)
         }
         catch(ex){
             next(ex);
         };
    }
}
export default asyncmiddleware;