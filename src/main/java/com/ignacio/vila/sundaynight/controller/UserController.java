package com.ignacio.vila.sundaynight.controller;

import com.ignacio.vila.sundaynight.model.User;
import com.ignacio.vila.sundaynight.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/users/all")
    public List<User> getAllUsers() {
        List<User> userList = userService.getAllUsers();
        userList.sort(Comparator.comparing(User::getSurname));
        return userList;
    }

    @RequestMapping(value = "users/new", method = RequestMethod.POST)
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @RequestMapping(value = "users/delete", method = RequestMethod.POST)
    public void deleteUser(@RequestBody User user) {
        userService.deleteUser(user);
    }
}