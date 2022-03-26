package service

import (
	"time"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"github.com/karim-w/clippy/quill/models"
)

type ClipService struct {
	db *sqlx.DB
}

func NewClipService(db *sqlx.DB) *ClipService {
	return &ClipService{db}
}

func (cs *ClipService) Create(clip *models.Clip) error {
	tx := cs.db.MustBegin()
	clip.ID = uuid.NewString()
	clip.CreatedAt = time.Now()
	if clip.AttachmentType == "" && clip.AttachmentID == "" {
		if _, err := tx.NamedExec("INSERT INTO clips (id, clip,created_at) VALUES (:id, :clip,:created_at)", clip); err != nil {
			tx.Rollback()
			return err
		}
	} else {
		if _, err := tx.NamedExec("INSERT INTO clips (id, clip, attachment_type,attachment_id) VALUES (:id, :clip,:attachment_type,:attachment_id)", clip); err != nil {
			tx.Rollback()
			return err
		}
	}
	return tx.Commit()
}
