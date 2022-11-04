package com.demo.backend.controller.request;

import javax.validation.constraints.NotEmpty;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductRequest {

    @NotEmpty
    private long id;
    private String name;
    private MultipartFile image;
    private int price;
    private int stock;

}
