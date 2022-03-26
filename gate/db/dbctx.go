package db

import (
	"fmt"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func InitDB() *sqlx.DB {
	fmt.Println("Connecting to database...")
	fmt.Println(os.Getenv("DB_HOST"))
	if db, err := sqlx.Open("postgres", fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"))); err != nil {
		fmt.Println(err)
		return nil
	} else {
		fmt.Println("Connected to database.")
		// db.MustExec("SELECT * FROM clips;")
		return db
	}
}
