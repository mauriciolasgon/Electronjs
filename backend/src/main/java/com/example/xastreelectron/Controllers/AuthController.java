package com.example.xastreelectron.Controllers;

import com.example.xastreelectron.Models.Users;
import com.example.xastreelectron.Repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
@CrossOrigin
public class AuthController {

    @Autowired
    UserRepository ur;

    @PostMapping("/api/register")
    public Users register(@RequestBody Users user) {
        ur.save(user);
    return user.getId();
    }

    @PostMapping("/api/login")
    public Boolean login(@RequestBody Users user) {
        Optional<Users> bduser = ur.findByEmail(user.getEmail());
        if(bduser.isPresent()) {
            if(bduser.get().getPassword().equals(user.getPassword())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @GetMapping("/api/users")
    public List<Users> getUsers() {
        return ur.findAll();
    }

    @GetMapping("/api/users/{id}")
    public Users getUser(@PathVariable Long id) {
        return ur.findById(id).get();
    }

    @DeleteMapping("/api/users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) {
        ur.deleteById(id);
    }

    @PutMapping("/api/users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Users updateUser(@PathVariable Long id, @RequestBody Users user) {
        Users antigo =  ur.findById(id).get();
        BeanUtils.copyProperties(user,antigo,"id");
        return ur.save(antigo);
    }

}
