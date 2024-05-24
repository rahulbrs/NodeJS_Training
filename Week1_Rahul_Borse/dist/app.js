"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// app.get('/:datatype',(req: Request, res: Response)=>{
//     var variable : any = req.params.datatype
//     res.json({
//         message: variable,
//         source: typeof(variable)
//     })
// })
app.get('/split/:input', (req, res) => {
    var input = req.params.input;
    var revisedString = (0, logic_1.splitString)(input);
    res.json({
        revisedString: revisedString
    });
});
app.get('/concatenate/:param1/:param2', (req, res) => {
    var { param1, param2 } = req.params;
    // var revisedString = param1 + param2;
    var revisedString = (0, logic_1.concat)(param1, param2);
    res.json({
        revisedString: revisedString
    });
});
app.get('/concatenate', (req, res) => {
    var { param1, param2 } = req.query;
    var revisedString;
    if (typeof param1 === 'string' && typeof param2 === 'string') {
        // revisedString = param1 + param2;
        revisedString = (0, logic_1.concat)(param1, param2);
    }
    res.json({
        revisedString: revisedString
    });
});
app.get('/check-year/:year', (req, res) => {
    var year = req.params.year;
    res.json({
        year: (0, logic_1.checkLeapYear)(parseInt(year))
    });
});
app.get('/secret-handshake/:num', (req, res) => {
    var num = parseInt(req.params.num);
    // console.log(secretHandshake(num));
    res.json({
        actions: (0, logic_1.secretHandshake)(num)
    });
});
//# sourceMappingURL=app.js.map