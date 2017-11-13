package com.ignacio.vila.sundaynight.repository;

import com.ignacio.vila.sundaynight.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
