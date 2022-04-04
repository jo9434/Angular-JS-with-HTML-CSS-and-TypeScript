package com.kanban.users.model;

import org.springframework.beans.factory.annotation.Autowired;

@SuppressWarnings("All")
public class Users {

    @Autowired
    private String username;

    @Autowired
    private String password;

    public Users() {
    }

    public Users(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString()
    {
        return "\n-------------\nLogin Details\n-------------\nUsername: "+username+"\nPassword:"+password;
    }
}
