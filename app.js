
//****creating server usign the express code */
const express = require('express');
//***requring chalk module */
const chalk = require('chalk');

//****require path */
const path = require('path');

var app = new express();// creating a consructor for the obect for express newwly created
// app.get('/',function(req,res){

//     // res.send("this is my first app application in web");
//     res.sendFile(__dirname+"/src/views/index.html");
// })       //plain root request

const bookRouter = express.Router();

app.use(express.static(path.join(__dirname,"/public")));// to receive css file from the public folder

///******creating routers using express */
app.use('/books',bookRouter);
// // app.get('/', function(req,res){
// //     res.sendFile(path.join(__dirname,"/src/views/index.html"))
// })// app.post('/',function(req,res){

// //     res.send("this is my first app applicaton");
// // }) 

//changing view engine html to Ejs format ,in Rendering format into app set,and app get
app.set('views','./src/views');
app.set('view engine','ejs');


//****for books page****/
var nav =[
    {link:'/', title:'HOME'},
    {link:'/login', title:'Login'},
    {link:'/signup', title:'Sign-Up'},
    {link:'/aboutus', title:'About Us'},
    {link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'}]
//*******listing books********* */

var books = [
    {
        title:"book1",
        genere:"classic",
        author:"akhil",
        image:"img_author1.png",
    },
    {
        title:"book2",
        genere:"action",
        author:"arjun",
        image:"img_author1.png",
    },
    {
        title:"book3",
        genere:"science ficition",
        author:"shilson",
        image:"img_author1.png",
    },
    {
        title:"book4",
        genere:"industrial",
        author:"unnimukundhan",
        image:"img_author1.png",
    },
    {
        title:"book5",
        genere:"sdfsdf",
        author:"sadfsdf",
        image:"img_author1.png",
    },
]
bookRouter.route('/')
.get(function(req,res){
    res.render('books',
        {nav:nav,title:"Books",books
        }
    )
});

//***for index page */
app.get('/', function(req,res){
    res.render('index',
    ///*****changing navigational bar from HTML to Ejs */
    {nav:
    [{link:'/', title:'HOME'},
    {link:'/login', title:'Login'},
    {link:'/signup', title:'Sign-Up'},
    {link:'/aboutus', title:'About Us'},
    {link:'/books', title:'Books'},
    {link:'/authors', title:'Authors'}],title:"Library"
    });                        //render is using instead of sendFile in the above code and passing the data through a Jsonn obeject
});


app.listen(3000, function(){
    console.log('listening the port number 3000'+chalk.green('3000'));
});                             //setting the port&callback function for running server and showing some message

//****installing new package chalk usgin sudo install command in terminal */
