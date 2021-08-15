// class BcryptHashing {
//         hashing() {
//                 return "new encrypt string";
//         }
// }

// class MB2Hashing {
//         hashing64() {
//                 return "new encrypt string";
//         }
// }

// class UserLoginService {
//         getHashingString(password: string) {
//                 const bcrypt = new BcryptHashing();
//                 return bcrypt.hashing() + password;
//         }
// }

// interface IHashing {
//         hashing(): string;
// }

// class BcryptHashing implements IHashing {
//         hashing() {
//                 return "new encrypt string";
//         }
// }

// class MB2Hashing implements IHashing {
//         hashing() {
//                 return this.hashing64();
//         }

//         hashing64() {
//                 return "new encrypt string";
//         }
// }

// class UserLoginService {
//         constructor(private readonly hash: IHashing) {}

//         getHashingString(password: string) {
//                 return this.hash.hashing() + password;
//         }
// }
