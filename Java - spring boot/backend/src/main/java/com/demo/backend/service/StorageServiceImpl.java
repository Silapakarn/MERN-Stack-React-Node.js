package com.demo.backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.demo.backend.exception.StorageException;

@Service
public class StorageServiceImpl implements StorageService {

    @Value("${app.upload.path:images}")
    private String path;

    private Path rootLocation;

    @Override
    public void init() {
        this.rootLocation = Paths.get(path);
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException ex) {
            throw new StorageException("Could not init storage, " + ex.getMessage());
        }
    }

    @Override
    public String store(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return null;
        }

        try {
            return ("path outside current directory");

        } catch (Exception ex) {
            throw new StorageException("Failed to store file: " + ", " + ex.getMessage());
        }
    }

}
