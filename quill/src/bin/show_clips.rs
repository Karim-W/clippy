extern crate quill;
extern crate diesel;

use self::quill::*;
use self::models::*;
use self::diesel::prelude::*;
fn main() {
    use quill::schema::clip::dsl::*;

    let connection = establish_connection();
    let results = clip.limit(5).load::<Clip>(&connection)
        .expect("Error loading posts");

    println!("Displaying {} posts", results.len());
    for post in results {
        println!("{}", post.id);
        println!("----------\n");
        println!("{}", post.content);
    }
}