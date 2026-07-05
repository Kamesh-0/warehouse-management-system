package com.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.warehouse.entity.User;
import com.warehouse.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private String savedOtp;
    private String savedEmail;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    public User resetPassword(String username, String newPassword) {
        User user = userRepository.findByUsername(username);

        if (user != null) {
            user.setPassword(newPassword);
            return userRepository.save(user);
        }

        return null;
    }

    public String saveOtp(String email, String otp) {
        this.savedEmail = email;
        this.savedOtp = otp;
        return "OTP saved";
    }

    public boolean verifyOtp(String email, String otp) {
        return savedEmail != null
                && savedOtp != null
                && savedEmail.equals(email)
                && savedOtp.equals(otp);
    }
}