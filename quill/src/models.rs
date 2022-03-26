use super::schema::clip;
use diesel::sql_types::Timestamp;

#[derive(Queryable)]
pub struct Clip {
    pub id: String,
    pub content: String,
    pub attachemttype: Option<String>,
    pub attachmentid: Option<String>,
}

#[derive(Insertable)]
#[table_name="clip"]
pub struct NewClip<'a> {
    pub content: &'a str,
    pub id: &'a str,
    pub attachemttype: Option<&'a str>,
    pub attachmentid: Option<&'a str>,
}