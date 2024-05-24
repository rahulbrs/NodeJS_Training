import express, {Request, Response} from 'express'
import { checkLeapYear, concat, secretHandshake, splitString } from './logic';

const app = express();
const port = 8000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

// app.get('/:datatype',(req: Request, res: Response)=>{
//     var variable : any = req.params.datatype
//     res.json({
//         message: variable,
//         source: typeof(variable)
//     })
// })

app.get('/split/:input',(req: Request, res: Response)=>{
    var input = req.params.input;
    var revisedString = splitString(input);
    res.json({
        revisedString: revisedString
    })
})

app.get('/concatenate/:param1/:param2',(req: Request, res: Response)=>{
    var {param1, param2} = req.params;
    // var revisedString = param1 + param2;
    var revisedString = concat(param1,param2);
    res.json({
        revisedString: revisedString
    })
})

app.get('/concatenate',(req: Request, res: Response)=>{
    var {param1, param2} = req.query;
    var revisedString;
    if(typeof param1 === 'string' && typeof param2 === 'string'){
        // revisedString = param1 + param2;
        revisedString = concat(param1,param2);
    }
    res.json({
        revisedString: revisedString
    })
})

app.get('/check-year/:year',(req: Request, res: Response)=>{
    var year = req.params.year;
    res.json({
        year: checkLeapYear(parseInt(year))
    })
})

app.get('/secret-handshake/:num', (req: Request, res: Response)=>{
    var num = parseInt(req.params.num)
    // console.log(secretHandshake(num));
    res.json({
        actions:  secretHandshake(num)
    })
})