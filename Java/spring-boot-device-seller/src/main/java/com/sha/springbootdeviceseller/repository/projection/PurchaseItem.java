package com.sha.springbootdeviceseller.repository.projection;

import java.time.LocalDateTime;

import com.sha.springbootdeviceseller.model.DeviceType;

public interface PurchaseItem {
    String getName();
    DeviceType getType();
    Double getPrice();
    String getColor();
    LocalDateTime getPurchaseTime();
    
}
