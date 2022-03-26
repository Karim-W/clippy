package service

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	"github.com/karim-w/clippy/gate/models"
)

type ClipService struct {
	db *sqlx.DB
}

func NewClipService(db *sqlx.DB) *ClipService {
	return &ClipService{db}
}

func (cs *ClipService) GetById(id string) (*models.Clip, error) {
	clip := &models.Clip{}
	if err := cs.db.Get(clip, "SELECT * FROM clips WHERE id = $1", id); err != nil {
		fmt.Println(err)
		return nil, err
	}
	return clip, nil
}
