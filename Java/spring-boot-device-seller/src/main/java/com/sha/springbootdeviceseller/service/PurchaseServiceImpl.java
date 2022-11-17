package com.sha.springbootdeviceseller.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sha.springbootdeviceseller.model.Purchase;
import com.sha.springbootdeviceseller.repository.PurchaseRepository;
import com.sha.springbootdeviceseller.repository.projection.PurchaseItem;

@Service
public class PurchaseServiceImpl implements PurchaseService{
    
    @Autowired
    private final PurchaseRepository purchaseRepository;

    public PurchaseServiceImpl(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    @Override
    public Purchase savePurchase(Purchase purchase){
        purchase.setPurchaseTime(LocalDateTime.now());

        return purchaseRepository.save(purchase);
    }

    @Override
    public List<PurchaseItem> findPurchaseItemsOfUser(Long userId){
        return purchaseRepository.findAllPurchasesOfUser(userId);
    }

    

}
