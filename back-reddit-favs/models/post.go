package models

// Post is the structure to hold user's favorite posts
type Post struct {
	ID     uint   `json:"id" gorm:"primary_key"`
	Title  string `json:"title"`
	Author string `json:"author"`
	URL    string `json:"url"`
}
