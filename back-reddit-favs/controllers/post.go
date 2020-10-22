package controllers

import (
	"net/http"
	"reddit-favs/models"

	"github.com/gin-gonic/gin"
)

// GET /posts
// Get all posts
func FindPosts(c *gin.Context) {
	var posts []models.Post
	models.DB.Find(&posts)

	c.JSON(http.StatusOK, gin.H{"data": posts})
}
