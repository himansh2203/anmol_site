package com.example.service;
import org.springframework.stereotype.Service;

@Service
public class ForgotPasswordService {

    public String processForgotPassword(String identifier) {
        // Dummy validation logic
        if (identifier == null || identifier.isBlank()) {
            throw new IllegalArgumentException("Identifier is required.");
        }

        // You can check if it's an email or phone
        if (identifier.contains("@")) {
            // Email logic
            sendEmailOtp(identifier);
        } else if (identifier.matches("\\d{10}")) {
            // Phone logic
            sendSmsOtp(identifier);
        } else {
            throw new IllegalArgumentException("Invalid identifier format.");
        }

        return "OTP has been sent to your " + (identifier.contains("@") ? "email." : "phone number.");
    }

    private void sendEmailOtp(String email) {
        // Integrate JavaMailSender here
        System.out.println("Sending email OTP to: " + email);
    }

    private void sendSmsOtp(String phone) {
        // Integrate Twilio, MSG91, etc.
        System.out.println("Sending SMS OTP to: " + phone);
    }
}
