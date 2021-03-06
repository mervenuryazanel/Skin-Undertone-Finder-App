export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz mail formatı";
        case "auth/email-already-exist":
            return "Bu mail ile bir kayıt zaten mevcut.";
        case "auth/email-already-in-use":
            return "Bu mail ile bir kayıt zaten mevcut.";
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı.";
        case "auth/weak-password":
            return "Zayıf şifre! Şifre en az 6 karakterden oluşmalı.";
        case "auth/wrong-password":
            return "Yanlış şifre!";
        case "auth/network-request-failed":
            return "Lütfen internet bağlantınızı kontrol ediniz!";
        default:
            return errorCode;
    }
}