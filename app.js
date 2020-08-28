const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('Public'))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const ejs = require('ejs');
app.set("view engine","ejs");

const _ = require("lodash");

var services = {
  paymentGateway:{
    title:"Payment Gateway",
    parameters:["Parameter 1","Parameter 2","Parameter 3","Parameter 4","Parameter 5","Parameter 6","Parameter 7","Parameter 8","Parameter 9","Parameter 10","Parameter 11","Parameter 12"],
    companies: [
      {
        company:"Razorpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Open",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Justpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Razorpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Open",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Justpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Razorpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      },
      {
        company:"Razorpay",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes",
        parameter4:"2%",
        parameter5:"Domestic",
        parameter6:"Yes",
        parameter7:"2%",
        parameter8:"Domestic",
        parameter9:"Yes",
        parameter10:"2%",
        parameter11:"Domestic",
        parameter12:"Yes"
      }
    ]
  },
  noCodePlatform:{
    title:"No Code Platform",
    parameters:["Parameter 1","Parameter 2","Parameter 3"],
    companies: [
      {
        company:"Wordpress",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes"
      },
      {
        company:"Vix",
        parameter1:"2.2%",
        parameter2:"Domestic",
        parameter3:"No"
      },
      {
        company:"Unstack",
        parameter1:"2%",
        parameter2:"International",
        parameter3:"Yes"
      }
    ]
  },
  smsProviders:{
    title:"SMS Providers",
    parameters:["Parameter 1","Parameter 2","Parameter 3"],
    companies: [
      {
        company:"Wordpress",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes"
      },
      {
        company:"Vix",
        parameter1:"2.2%",
        parameter2:"Domestic",
        parameter3:"No"
      },
      {
        company:"Unstack",
        parameter1:"2%",
        parameter2:"International",
        parameter3:"Yes"
      }
    ]
  },
  chatBot:{
    title:"Chatbots",
    parameters:["Parameter 1","Parameter 2","Parameter 3"],
    companies: [
      {
        company:"Wordpress",
        parameter1:"2%",
        parameter2:"Domestic",
        parameter3:"Yes"
      },
      {
        company:"Vix",
        parameter1:"2.2%",
        parameter2:"Domestic",
        parameter3:"No"
      },
      {
        company:"Unstack",
        parameter1:"2%",
        parameter2:"International",
        parameter3:"Yes"
      }
    ]
  }
};

app.get("/",function(req,res){
  var keys = Object.keys(services);
  res.render("home",{services:services, keys:keys});
});

app.get("/comparisons/:service",function(req,res){
  parameter = req.params.service;
  var service = _.camelCase(parameter);
  res.render("comparisons",{service:services[service]});
});

app.post("/comparisons",function(req,res){
  res.redirect("/comparisons/paymentGateway");
})

app.listen(process.env.PORT  || port,function(){
  console.log("Server is up and running. Happy Coding!");
})
