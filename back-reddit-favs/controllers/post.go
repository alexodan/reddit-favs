package controllers

import (
	"fmt"
	"net/http"
	"reddit-favs/models"

	"github.com/gin-gonic/gin"
)

// FindPosts gets all faved posts by user
func FindPosts(c *gin.Context) {
	var posts []models.Post
	models.DB.Find(&posts)

	c.JSON(http.StatusOK, posts)
}

// AddPost adds a post as faved
func AddPost(c *gin.Context) {
	// Validate input
	fmt.Print(c)
	var input models.CreatePostInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create post
	post := models.Post{Title: input.Title, Author: input.Author, URL: input.URL}
	models.DB.Create(&post)

	c.JSON(http.StatusOK, post)
}
