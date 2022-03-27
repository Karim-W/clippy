package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/karim-w/clippy/quill/controllers"
	"github.com/karim-w/clippy/quill/db"
	"github.com/karim-w/clippy/quill/service"
)

func main() {
	println("================::::::::QUILL::::::::================")
	println("=====================================================")
	ctx := db.InitDB()
	ser := service.NewClipService(ctx)
	cont := controllers.NewCreateController(ser)
	app := fiber.New()
	app.Use(cors.New())
	rg := app.Group("/api/v1")
	Clips := rg.Group("/clips")
	cont.SetupRoutes(&Clips)
	app.Listen(":4000")
}
