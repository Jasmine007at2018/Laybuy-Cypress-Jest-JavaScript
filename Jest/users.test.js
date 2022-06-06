process.env.NODE_ENV = "api-test";
const request=require("supertest");
const url="https://jsonplaceholder.typicode.com/users";

describe("GET / ", ()=>{
    test("It should respond with 10 users including Moriah.Standon", async()=>{
        const response =await request(url).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(10);
        expect(response.body[0]).toHaveProperty("username");      
        expect(response.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({username: "Moriah.Stanton"}),              
            ]))
    })

    test("Can retrieve data for a single user",async()=>{
        const rndUserId = Math.floor(Math.random() * 10) + 1;
        const response=await request(url).get(`/${rndUserId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(rndUserId);
    })
})