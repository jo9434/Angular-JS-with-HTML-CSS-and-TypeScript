package com.kanban.users.repository;

import com.kanban.users.model.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    Users searchUsernameAndPassword(String username, String password);
}