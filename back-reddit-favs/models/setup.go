package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // comment
)

// DB exposes db connection
var DB *gorm.DB

// ConnectDataBase method initializes a db connection
func ConnectDataBase() {
	database, err := gorm.Open("sqlite3", "test.db")

	if err != nil {
		panic("Failed to connect to database!")
	}

	database.AutoMigrate(&Post{})

	DB = database
}
