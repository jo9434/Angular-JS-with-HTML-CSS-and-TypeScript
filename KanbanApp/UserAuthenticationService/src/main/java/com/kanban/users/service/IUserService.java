package com.kanban.users.service;

import com.kanban.users.exception.UserInputInvalidException;
import com.kanban.users.model.Users;

import java.util.List;

@SuppressWarnings("All")
public interface IUserService {
    public Users regNewUser(Users user);
    public Users searchUsernameAndPassword(String username,String password)throws UserInputInvalidException;
    public List<Users> getAllUsers();
}
