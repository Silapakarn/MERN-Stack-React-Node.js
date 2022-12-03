package com.codemobiles.stock_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

@ControllerAdvice
public class ExceptionAdvice {
	
	@ResponseBody
	@ExceptionHandler
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String handlerProductNotFound(ProductNotFoundException ex) {
		return ex.getMessage();
	}
	
	@ResponseBody
	@ExceptionHandler
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	String handlerStorageException(StorageException ex) {
		return ex.getMessage();
	}
	

	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	String handlerMaxUploadSize(MaxUploadSizeExceededException ex) {
		return "Maxinum upload size exceeded";
	}
	
	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	String handlerValidation(ValidationException ex) {
		return ex.getMessage();
	}
}
