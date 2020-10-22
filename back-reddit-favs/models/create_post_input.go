package models

// CreatePostInput model to create a new Post
type CreatePostInput struct {
	Title  string `json:"title" binding:"required"`
	Author string `json:"author" binding:"required"`
	URL    string `json:"url" binding:"required"`
}
