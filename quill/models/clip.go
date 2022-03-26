package models

import "time"

type Clip struct {
	ID             string    `json:"id,omitempty" db:"id"`
	Clip           string    `json:"clip,omitempty" db:"clip"`
	CreatedAt      time.Time `json:"created_at,omitempty" db:"created_at"`
	AttachmentType string    `json:"attachment_type,omitempty" db:"attachment_type"`
	AttachmentID   string    `json:"attachment_id,omitempty" db:"attachment_id"`
}
