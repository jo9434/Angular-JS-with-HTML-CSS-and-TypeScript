package com.kanban.users.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND,reason="User Not Found.!!\nUsername or Password was Incorrect!")
public class UserInputInvalidException extends Exception {

    private static final long serialVersionUID;

    static {
        serialVersionUID = 1L;
    }
}
