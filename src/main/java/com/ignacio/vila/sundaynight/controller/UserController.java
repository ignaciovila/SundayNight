package com.ignacio.vila.sundaynight.controller;

import com.ignacio.vila.sundaynight.model.User;
import com.ignacio.vila.sundaynight.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/users/all")
    public List<User> getAllUsers(@RequestParam String filter) {
        return userService.getUsers(filter);
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