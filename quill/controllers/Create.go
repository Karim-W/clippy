package controllers

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/karim-w/clippy/quill/models"
	"github.com/karim-w/clippy/quill/service"
)

type CreateController struct {
	service *service.ClipService
}

func NewCreateController(service *service.ClipService) *CreateController {
	return &CreateController{
		service: service,
	}
}

func (cc *CreateController) Create(ctx *fiber.Ctx) error {
	log.Println("Create Clip Request")
	request := models.Clip{}
	if err := ctx.BodyParser(&request); err == nil {
		if err := cc.service.Create(&request); err != nil {
			return err
		} else {
			return ctx.Status(201).JSON(request)
		}
	} else {
		log.Fatal("Error in parsing request body")
		return err
	}
	return nil
}

func (cc *CreateController) SetupRoutes(rg *fiber.Router) {
	(*rg).Post("", cc.Create)
}
