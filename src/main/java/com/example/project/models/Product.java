package com.example.project.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String productName;
  private Double price;
  private String details;
  private String img;

  public Double getPrice() {
    return price;
  }

  public String getProductName() {
    return productName;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public String getDetails() {
    return details;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

//  public Product(Integer id, String productName, Double price, String details) {
//    this.id = id;
//    this.productName = productName;
//    this.price = price;
//    this.details = details;
//  }
//
//  public Product() {
//
//  }

  public Integer getId() {
    return id;
  }
}
