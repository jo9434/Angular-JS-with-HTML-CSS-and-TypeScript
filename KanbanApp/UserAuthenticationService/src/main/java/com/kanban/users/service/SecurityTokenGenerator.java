package com.kanban.users.service;

import com.kanban.users.model.Users;

import java.util.Map;

public interface SecurityTokenGenerator {
    Map<String, String> generateToken(Users user);
}
