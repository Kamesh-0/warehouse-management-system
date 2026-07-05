package com.warehouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.warehouse.entity.User;
import com.warehouse.service.EmailService;
import com.warehouse.service.OtpService;
import com.warehouse.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private OtpService otpService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.loginUser(user.getUsername(), user.getPassword());
    }

    @PutMapping("/reset-password")
    public User resetPassword(@RequestBody User user) {
        return userService.resetPassword(user.getUsername(), user.getPassword());
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody User user) {
        String otp = otpService.generateOtp();

        userService.saveOtp(user.getEmail(), otp);
        emailService.sendOtpEmail(user.getEmail(), otp);

        return "OTP sent successfully";
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody User user) {
        boolean result = userService.verifyOtp(user.getEmail(), user.getPassword());

        if (result) {
            return "OTP verified successfully";
        } else {
            return "Invalid OTP";
        }
    }
}