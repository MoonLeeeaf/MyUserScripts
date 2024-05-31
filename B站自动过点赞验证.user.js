// ==UserScript==
// @name         B站自动过点赞验证
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  本脚本专治 BiliBili 点赞验证手机号的问题, 自动帮助用户填写信息 (B东西长能耐了还验证上了,今天就制裁,这玩意不是很有用,多插入几下就好)
// @author       MoonLeeeaf
// @match        https://www.bilibili.com/video/*
// @require      https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js
// ==/UserScript==

document.head.appendChild($.parseHTML(`<style type="text/css">.base-verify, .phone-number { invisibility: hidden; }</style>`))

let fuck = async () => {
    let p = localStorage.placePhone
    if (p == null || p == "") {
        p = prompt("保存的手机号为空,请输入它,然后让我为你把手机号插入B站验证~")
        localStorage.placePhone = p
    }

    await sleep(1000)

    $(".phone-confirm").click()

    $(".bili-toast-content").text("啊啊~~~啊~~~哥哥的手机号插得好爽~~好舒服————")
}

let sleep = async (time) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(true)
        }, time)
    })
}

(function () {
    $(".video-like").click(async () => {
        //for (let i = 1; i < 2; i++) {
        fuck()
        // await sleep(100)
        //}
    })

    let a = () => {
        $(".base-verify").hide()
        $(".phone-number").remove()
        $(".phone-input").val(localStorage.placePhone)
        $(".bili-phone-verify > .text2").text("我是阿B,我现在想被手机号插入钢门里,请满足我的欲望")
        setTimeout(a, 1000)
    }
    a()
})()
