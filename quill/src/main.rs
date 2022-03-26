use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Serialize, Deserialize};
use uuid::Uuid;
 
async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hey sunshine!")
}

fn make_uuid() -> Result<(), Box<dyn std::error::Error>> {
    
        let my_uuid = Uuid::new_v4();
        println!("{}", my_uuid);
    Ok(())
}

async fn create_post(post: String) -> impl Responder {
    let user200: IncomingRequest = serde_json::from_str(&post).unwrap();
    println!("{:?}", user200.data);
    let uuid = Uuid::new_v4();
    println!("{:?}", uuid);
    HttpResponse::Accepted().body(uuid.to_string())
}
#[derive(Serialize, Deserialize, Debug)]
struct IncomingRequest{
    data: String
}



#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    
    HttpServer::new(|| {
        App::new()
            .route("/hi", web::get().to(index)).route("/api/v1/clip", web::post().to(create_post))
    })
    .bind("127.0.0.1:9000")?
    .run()
    .await
}

