package com.kanban.users.controller;

import com.kanban.users.exception.UserInputInvalidException;
import com.kanban.users.model.Users;
import com.kanban.users.service.IUserService;
import com.kanban.users.service.SecurityTokenGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Map;
import java.util.List;

@CrossOrigin
@SuppressWarnings("All")
@RestController
@RequestMapping("/api/v1/user/login")
public class UserController {

    @Autowired
    IUserService usersService;

    @Autowired
    String messageInvalid = "Invalid User!";

    @Autowired
    String otherErrorOccurs = "Some other errors occurred!!!";

    @Autowired
    String createdNewUser = "New User Created Successfully!!";

    @Autowired
    SecurityTokenGenerator securityTokenGenerator;

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody Users user) throws UserInputInvalidException
    {
        ResponseEntity<?> response;
        try
        {
            Users newUser = usersService.searchUsernameAndPassword(user.getUsername(),user.getPassword());
            if(newUser.getUsername().equals(user.getUsername()))
            {
                Map<String, String> codeMap = securityTokenGenerator.generateToken(newUser);
                response = new ResponseEntity<>(codeMap, HttpStatus.OK);
            }
            else
            {
                response = new ResponseEntity<>(messageInvalid, HttpStatus.OK);
            }
        }
        catch (UserInputInvalidException error)
        {
            throw new UserInputInvalidException();
        }
        catch (Exception e)
        {
            response = new ResponseEntity<>(otherErrorOccurs, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Users user)
    {
        usersService.regNewUser(user);
        return new ResponseEntity<>(createdNewUser, HttpStatus.CREATED);
    }

    @GetMapping("/userdetails/users")
    public ResponseEntity<List<Users>> getAllUsers()
    {
        return new ResponseEntity<>(usersService.getAllUsers(), HttpStatus.OK);
    }
}

