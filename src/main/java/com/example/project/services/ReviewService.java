package com.example.project.services;

import com.example.project.models.Product;
import com.example.project.models.Review;
import com.example.project.models.User;
import com.example.project.repositories.ProductRepository;
import com.example.project.repositories.ReviewRepository;
import org.hibernate.dialect.ProgressDialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ReviewService {

    @Autowired
    ReviewRepository repository;

    public Review createReview(String pid, Review newReview) {
        newReview.setPid(pid);
        return repository.save(newReview);
    }

    public List<Review> findAllReviewsByProductId(String pid) {
        return repository.findAllReviewsByProductId(pid);
    }
}
