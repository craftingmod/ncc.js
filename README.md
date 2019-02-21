# ncc.js

Naver Cafe Chat Library

## Login
Open naver cafe application and
turn on OTP Generator
```typescript
const ncc = new Ncc()
// input code in your way (8 length digit)
const otpcode = await Log.read("OTP")
// success: username, fail: null
const uname = await ncc.loginOTP(otpcode)
if (uname == null) {
    return
}
// gotcha!
console.log(`username: ${uname}`)
```

## Find Chat
```typescript
// connect to Ncc (simirar enter talk.cafe.naver.com)
await ncc.connect()
// find channel from joined
const openCh = ncc.joinedChannels.find(
    (v) => v.cafe.cafeId === 26686242 && v.channelInfo.name === "채팅방")
if (openCh == null) {
    return
}
// enter now! (socket connect)
const session = await ncc.getConnectedChannel(openCh)
```

## Send Hello Naver~
```typescript
await session.sendText("안녕, 네이버!")
```
More at the future (~~10 years later~~)