"use strict";


const output = {

home : (req, res)=>{
    res.render("home/index");
},

login : (req, res)=>{
    res.render("home/login");
},
};
const users = {
    id : ["kkk", "lll", "hhh"],
    psword: ["1234","123","456"],
};

const process ={
    login : (req, res)=>{
        const id = req.body.id,
        psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: true,
            msg: "로그인실패"
        })
    }
}

module.exports ={
    output,
    process
};