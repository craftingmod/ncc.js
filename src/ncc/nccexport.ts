/**
 * It's too far to remove
 * `export default` so copy-paste
 */
/* tslint:disable */
// import ArticleParser from "./articleparser"
import Ncc, { NccEvents } from "./ncc"
import NCaptcha from "./ncaptcha"
import NcFetch from "./ncfetch"
import NcCredent from "./ncredent"
import { cafePrefix, mCafePrefix } from "./ncconstant"
export * from "./ncredent"
export * from "./ncfetch"
export * from "./ncaptcha"
export * from "./articleparser"
export { Ncc, NCaptcha, NcFetch, NcCredent, NccEvents, cafePrefix, mCafePrefix }

import NCredit from "./credit/ncredit"
export * from "./credit/ncredit"
export { NCredit }

import Article from "./structure/article"
import Cafe from "./structure/cafe"
import Comment from "./structure/comment"
import NaverVideo from "./structure/navervideo"
import Profile from "./structure/profile"
export * from "./structure/article"
export * from "./structure/cafe"
export * from "./structure/comment"
export * from "./structure/navervideo"
export * from "./structure/profile"
export { Article, Cafe, Comment, NaverVideo, Profile }

import NcAPIStatus from "./talk/ncapistatus"
import NcBaseChannel from "./talk/ncbasechannel"
import NcChannel from "./talk/ncchannel"
import NcJoinedChannel from "./talk/ncjoinedchannel"
import NcJson from "./talk/ncjson"
import NcMessage from "./talk/ncmessage"
import uploadImage from "./talk/uploadphoto"
export * from "./talk/ncapistatus"
export * from "./talk/ncbasechannel"
export * from "./talk/ncchannel"
export * from "./talk/ncjoinedchannel"
export * from "./talk/ncjson"
export * from "./talk/ncmessage"
export * from "./talk/ncprotomsg"
export * from "./talk/uploadphoto"
export { NcAPIStatus, NcBaseChannel, NcChannel, NcJoinedChannel,
    NcJson, NcMessage, uploadImage }
