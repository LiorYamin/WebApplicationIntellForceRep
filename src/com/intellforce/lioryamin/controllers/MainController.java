package com.intellforce.lioryamin.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.intellforce.lioryamin.MyStaticDB;
import com.intellforce.lioryamin.Question;
import com.intellforce.lioryamin.ResponseObject;
import com.intellforce.lioryamin.UserRequest;

@RestController
@RequestMapping(value="/lioryamin")
public class MainController {

    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "index";
    }
    
    @RequestMapping(value="/register", method= RequestMethod.POST)
    public ResponseObject register(@RequestBody UserRequest userRequest){
    	System.out.println(userRequest);
    	return new ResponseObject("success");
    }
    
    @RequestMapping(value="/survey", method = RequestMethod.GET)
    public Question[] survey(){
    	return MyStaticDB.questions;
    }
     
}
