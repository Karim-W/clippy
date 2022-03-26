#[macro_use]
extern crate diesel;
extern crate dotenv;
pub mod schema;
pub mod models;

use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use std::env;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))
}

use schema::clip;
use models::*;
pub fn create_Clip<'a>(conn: &PgConnection, title: &'a str, body: &'a str) -> Clip {

    let new_post = models::NewClip {
        content: body,
        id: title,
        attachemttype: None,
        attachmentid: None,
        
    };

    diesel::insert_into(clip::table)
        .values(&new_post)
        .get_result(conn)
        .expect("Error saving new post")
}