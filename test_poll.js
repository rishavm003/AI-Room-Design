async function test() {
    const req = await fetch("https://image.pollinations.ai/prompt/a-room?width=1024&height=768&nologo=true");
    console.log(req.status);
    console.log(req.headers.get('content-type'));
}
test();
