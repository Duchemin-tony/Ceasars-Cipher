function rot13(str) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot13);

  function rot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    //A = 65, Z = 90
    return String.fromCharCode(
      ((charCode + 13) <= 90) ? charCode + 13
        : (charCode + 13) % 90 + 64
    );

  }
}

console.log(rot13("P'RFG Y'VARKCHTANOYR NEEBTNAPR QR IBGER ORNHGR DHV Z'NFCRETR."))
