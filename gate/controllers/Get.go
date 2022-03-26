package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/karim-w/clippy/gate/service"
)

type CreateController struct {
	service *service.ClipService
}

func NewCreateController(service *service.ClipService) *CreateController {
	return &CreateController{
		service: service,
	}
}

func (cc *CreateController) getByID(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	if clip, err := cc.service.GetById(id); err != nil {
		return err
	} else {
		return ctx.Status(200).JSON(clip)
	}

}

func (cc *CreateController) SetupRoutes(rg *fiber.Router) {
	(*rg).Get("/:id", cc.getByID)
}
