
package com.prakash.portfolio.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prakash.portfolio.entity.ContactMessage;
import com.prakash.portfolio.repository.ContactRepository;

@Service
public class ContactService {

    private static final Logger log =
            LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    public ContactService(
            ContactRepository contactRepository,
            EmailService emailService) {

        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    public ContactMessage saveMessage(ContactMessage contactMessage) {

        // First save the message in MySQL
        ContactMessage savedMessage =
                contactRepository.save(contactMessage);

        // Then send email notification
        try {
            emailService.sendContactNotification(
                    savedMessage.getName(),
                    savedMessage.getEmail(),
                    savedMessage.getSubject(),
                    savedMessage.getMessage()
            );

        } catch (Exception e) {
            log.warn("Contact saved, but email notification failed: {}",
                    e.getMessage());
        }

        return savedMessage;
    }
}
