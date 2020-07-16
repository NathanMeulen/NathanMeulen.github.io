function decryptEmail(element) {
    const encryptedAES = "U2FsdGVkX1+2MoPY2UnaKhIWJUtNUGEOHNZJ+VtYlIlxH0BNBZr6zPA3Jj5M+c2s8o497lUVHaTV30AZt6beBEFAl8oHjcWiG1dqdwn+tsm8/3ECCtsCH6QYqpY4sKVy6bHQoMvXGzi/USwRzQCEgw==";

    // Decrypt email to prevent bots
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "Doesn't really need to be a strong password");
    const plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Create replacement block
    let link = document.createElement("a");
    link.innerHTML = plaintext;
    link.href = "mailto:" + plaintext;

    // Replace grey box
    element.parentNode.replaceChild(link, element);
}

