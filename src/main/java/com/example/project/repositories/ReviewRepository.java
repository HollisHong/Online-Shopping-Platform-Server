package com.example.project.repositories;

import com.example.project.models.Review;

import com.example.project.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository
        extends CrudRepository<Review, Integer>
{
    @Query("SELECT review FROM Review review")
    public List<Review> findAllReviewsByProductId(@Param("pid") String pid);


}