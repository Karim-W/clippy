package models

import (
	"database/sql"
	"time"
)

type Clip struct {
	ID             string         `json:"id,omitempty" db:"id"`
	Clip           string         `json:"clip,omitempty" db:"clip"`
	CreatedAt      time.Time      `json:"created_at,omitempty" db:"created_at"`
	AttachmentType sql.NullString `json:"attachment_type,omitempty" db:"attachment_type"`
	AttachmentID   sql.NullString `json:"attachment_id,omitempty" db:"attachment_id"`
}
