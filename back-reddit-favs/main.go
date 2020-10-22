package main

import (
	"github.com/gin-gonic/gin"

	"github.com/alexodan/reddit-favs/back-reddit-favs/controllers"
	"github.com/alexodan/reddit-favs/back-reddit-favs/models"
)

func main() {
	r := gin.Default()

	models.ConnectDatabase()

	r.GET("/posts", controllers.FindPosts)

	r.Run()
}
