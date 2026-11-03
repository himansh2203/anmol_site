package com.example.controller;


import com.example.dto.OtpRequest;
import com.example.service.OtpService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ForgetPasswordController {

 private final OtpService otpService;

 public ForgetPasswordController(OtpService otpService) {
     this.otpService = otpService;
 }

 @PostMapping("/forgot-password/send-otp")
 public ResponseEntity<String> sendOtp(@Valid @RequestBody OtpRequest request) {
     String otp = otpService.generateOtp(request.getIdentifier());
     return ResponseEntity.ok("OTP has been sent to " + request.getIdentifier());
 }
}

