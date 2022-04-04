package com.kanban.users.service;

import com.kanban.users.model.Users;
import com.kanban.users.repository.UsersRepository;
import com.kanban.users.exception.UserInputInvalidException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@SuppressWarnings("All")
public class UserServiceImpl implements IUserService {

    @Autowired
    UsersRepository usersDet;

    @Override
    public Users regNewUser(Users user) {
        return usersDet.save(user);
    }

    @Override
    public Users searchUsernameAndPassword(String username, String password) throws UserInputInvalidException {
        Users user = usersDet.searchUsernameAndPassword(username,password);
        if(user == null)
        {
            throw new UserInputInvalidException();
        }
        return user;
    }

    @Override
    public List<Users> getAllUsers() {
        return usersDet.findAll();
    }
}

