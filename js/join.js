class SignUp {
    constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.classNumber = classNumber;
      this.random = random;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get contactInfo() {
      return `${this.emailAddress} ${this.phoneNumber} ${this.random}`;
    }
  
    set contactInfo(contactInfo) {
      const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.random = random;
    }

    // 암호화 함수
    encodeByAES256(key, data){
        const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(""),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        });
        return cipher.toString();
    }
    
    // 복호화 함수
    decodeByAES256(key, data){
        const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(""),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
            });
        return cipher.toString(CryptoJS.enc.Utf8);
    }

    // 패스워드 보안 처리 함수
    encrypt_text(password){
        const k = "key"; // 클라이언트 키
        const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
        const b = password;
        const eb = this.encodeByAES256(rk, b);
        return eb;
    }
      
    decrypt_text(){
        const k = "key"; // 서버의 키
        const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
        const eb = session_get();
        const b = this.decodeByAES256(rk, eb);
        return b; 
    }
}
