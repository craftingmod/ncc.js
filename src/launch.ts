import path from "path"
import { Ncc } from "./index"
import Log from "./log"

Log.enable = true
async function run() {
    const ncc = new Ncc()
    // ncc.autoConnect = false
    // set cookie path to load & save
    const cookie = path.resolve(process.cwd(), "choco.cookie")
    ncc.cookiePath = cookie
    // load credit
    let uname = await ncc.loadCredit()
    if (uname == null) {
        // or.. otp login
        // otp is recommend due to naver's hardest captacha
        const otpcode = await Log.read("OTP")
        uname = await ncc.loginOTP(otpcode)
    }
    if (uname == null) {
        return
    }
    // gotcha!
    Log.d(`username: ${uname}`)
    // connect to Ncc for parse joinedchannels
    await ncc.connect()
    // find open Channel
    const openCh = ncc.joinedChannels.find(
        (v) => v.cafe.cafeId === 26686242 && v.channelInfo.name === "비공개 채팅방")
    if (openCh == null) {
        return
    }
    // session connect
    const session = await ncc.getConnectedChannel(openCh)
    // send chat
    await session.sendText("안녕, 네이버!")
}
run()
