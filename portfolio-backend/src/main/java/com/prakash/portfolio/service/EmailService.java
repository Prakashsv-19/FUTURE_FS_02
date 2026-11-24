package com.prakash.portfolio.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class EmailService {

    @Value("${resend.api.key}")
    private String apiKey;

    private final RestClient restClient = RestClient.create();

    public void sendContactNotification(
            String name,
            String email,
            String subject,
            String message) {
if (apiKey == null || apiKey.isBlank()) {
    throw new IllegalStateException("Resend API key is not configured");
}
        String html = """
                <h2>New Portfolio Contact Message</h2>
                <p><strong>Name:</strong> %s</p>
                <p><strong>Email:</strong> %s</p>
                <p><strong>Subject:</strong> %s</p>
                <p><strong>Message:</strong></p>
                <p>%s</p>
                """.formatted(
                escapeHtml(name),
                escapeHtml(email),
                escapeHtml(subject),
                escapeHtml(message)
        );

        Map<String, Object> requestBody = Map.of(
                "from", "Prakash Portfolio <onboarding@resend.dev>",
                "to", List.of("prakash2006saravanan@gmail.com"),
                "subject", "New Portfolio Contact: " + subject,
                "html", html,
                "reply_to", email
        );

        restClient.post()
                .uri("https://api.resend.com/emails")
                .header("Authorization", "Bearer " + apiKey)
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    private String escapeHtml(String value) {
        return value
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }
}
