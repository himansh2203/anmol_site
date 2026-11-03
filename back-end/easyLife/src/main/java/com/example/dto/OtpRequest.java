package com.example.dto;

import jakarta.validation.constraints.NotBlank;

public class OtpRequest {
 @NotBlank(message = "Identifier (email or phone) is required")
 private String identifier;

 // Getters and setters
 public String getIdentifier() {
     return identifier;
 }

 public void setIdentifier(String identifier) {
     this.identifier = identifier;
 }
}
