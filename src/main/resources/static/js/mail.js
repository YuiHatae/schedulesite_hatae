//async function scheduleMail() {
//	alert('メールが送信されました。');
//  let transporter = nodemailer.createTransport({
//    host: "smtp-mail.outlook.com", // 大原のメールサーバー
//    port: 587, // 大原のポート番号
//    secure: false,
//    auth: {
//      user: "fko2347057@stu.o-hara.ac.jp", // 送信者のメールアドレス
//      pass: "eAX4mpgg", // 送信者のメールアカウントのパスワード
//    },
//  });
//
//// メールの内容を設定し、送信
//  let info = await transporter.scheduleMail({
//    from: '"スケジュールアプリ" <fko2347057@stu.o-hara.ac.jp>', // 送信者の名前とメールアドレス
//    to: "fko2347057@stu.o-hara.ac.jp", // 受信者のメールアドレス
//    subject: "テストメール", // 件名
//    text: "これはテストメールです。", // 本文
//  });
//
//  console.log("Message sent: %s", info.messageId);
//}
//
//// メール送信処理を実行
//scheduleMail().catch(console.error);



//// nodemailerライブラリを読み込む
//const nodemailer = require("nodemailer");
//
//// メール送信処理を非同期関数として定義
//async function sendMail() {
//  // トランスポーターを作成
//  let transporter = nodemailer.createTransport({
//    host: "smtp-mail.outlook.com", // 大原のメールサーバー
//    port: 587, // 大原のポート番号
//    secure: false, // SSL/TLSを使用しない場合はfalse
//    auth: {
//      user: "fko2347057@stu.o-hara.ac.jp", // 送信者のメールアドレス
//      pass: "eAX4mpgg", // 送信者のメールアカウントのパスワード
//    },
//  });
//
//// 件名と本文をカスタマイズする関数
//function scheduleMailContent(name, message) {
//  return {
//    subject: `こんにちは、${name}さん！`,
//    text: `${name}さんへのメッセージ: ${message}`,
//  };
//}
//
//async function sendCustomMail() {
//  // 件名と本文をカスタマイズ
//  const mailContent = createMailContent("太郎", "お元気ですか？");
//
//  // 省略: メールの送信設定と送信処理
//}
//
//// メール送信処理を実行
//sendCustomMail().catch(console.error);
//
//}
//


//function scheduleMail(); {
//// 「CDO.Message」オブジェクト生成
//var cdoMsg = new ActiveXObject("CDO.Message");
//// 送信元設定
//cdoMsg.From = "fko2347057@stu.o-hara.ac.jp";
//// 送信先設定
//cdoMsg.To = "fko2347057@stu.o-hara.ac.jp";
//// 題名設定
//cdoMsg.Subject = "題名";
//// 本文設定
//cdoMsg.Textbody = "本文";
////　※１
//
//// CDOオブジェクトコンフィグ用NAMESPACE
//var namespace = "http://schemas.microsoft.com/cdo/configuration/";
//// 送信にネットワークを利用、「2」(cdoSendUsingPort)を設定
//cdoMsg.Configuration.Fields.Item(namespace + "sendusing") = 2;
//// SMTPサーバ設定
//cdoMsg.Configuration.Fields.Item(namespace + "smtpserver") = "smtp-mail.outlook.com";
//// SMTPポート設定
//cdoMsg.Configuration.Fields.Item(namespace + "smtpserverport") = 587;
////　※２
//
//// コンフィグアップデート
//cdoMsg.Configuration.Fields.Update();
//
//// メール送信
//cdoMsg.Send();
//
//// 後処理
//cdoMsg = null;
//}
