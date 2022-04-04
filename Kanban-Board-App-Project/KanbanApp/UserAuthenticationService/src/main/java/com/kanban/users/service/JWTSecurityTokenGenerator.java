package com.kanban.users.service;

import com.kanban.users.model.Users;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
@SuppressWarnings("All")
public class JWTSecurityTokenGenerator implements SecurityTokenGenerator {

    @Autowired
    static Users users;
    static String uname = users.getUsername();

    @Override
    public Map<String, String> generateToken(Users user) {

        String jsonWebToken;
        String msgSuccess = ""+uname+" has Successfully Logged In...!";

        JwtBuilder jwtBuild = Jwts.builder();
        jsonWebToken = jwtBuild.setSubject(user.getUsername()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secret").compact();

        Map<String, String> codeMap = new HashMap<String, String>();
        codeMap.put("code: ", jsonWebToken);
        codeMap.put("message: ", msgSuccess);

        return codeMap;
    }

}

