package com.ignacio.vila.sundaynight.service;

import com.ignacio.vila.sundaynight.model.User;
import com.ignacio.vila.sundaynight.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(String filter) {
        List<User> userList = (List<User>) userRepository.findAll();
        userList = userList.stream().filter(a -> a.getName().concat(" ").concat(a.getSurname()).toLowerCase().contains(filter.toLowerCase())).collect(Collectors.toList());
        userList.sort(Comparator.comparing(a -> a.getName().toLowerCase()));
        return userList;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
