package main

import (
	"reddit-favs/controllers"
	"reddit-favs/models"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	models.ConnectDataBase()

	r.GET("/posts", controllers.FindPosts)
	r.POST("/posts", controllers.AddPost)

	r.Run()
}
