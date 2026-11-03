package com.example.service;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

 // Store OTPs: identifier -> OTP + expiry
 private final Map<String, OtpData> otpStore = new ConcurrentHashMap<>();

 public String generateOtp(String identifier) {
     String otp = String.valueOf(100000 + (int)(Math.random() * 900000)); // 6-digit
     otpStore.put(identifier, new OtpData(otp, LocalDateTime.now().plusMinutes(5)));
     System.out.println("OTP for " + identifier + " is: " + otp); // Replace with real email/SMS
     return otp;
 }

 public boolean isOtpValid(String identifier, String inputOtp) {
     OtpData data = otpStore.get(identifier);
     return data != null && data.getOtp().equals(inputOtp) && data.getExpiry().isAfter(LocalDateTime.now());
 }

 private static class OtpData {
     private final String otp;
     private final LocalDateTime expiry;

     public OtpData(String otp, LocalDateTime expiry) {
         this.otp = otp;
         this.expiry = expiry;
     }

     public String getOtp() {
         return otp;
     }

     public LocalDateTime getExpiry() {
         return expiry;
     }
 }
}

