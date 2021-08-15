// class DiscountService {
//         calculateDiscountForLevel1(member: CustomerLevel1) {
//                 if (member.isMembershipForLevel1) {
//                         console.log(member);
//                 }
//         }
//         calculateDiscountForLevel2(member: CustomerLevel2) {
//                 if (member.isMembershipForLevel2) {
//                         console.log(member);
//                 }
//         }
// }

// class CustomerLevel1 {
//         isMembershipForLevel1() {
//                 return true;
//         }
// }

// class CustomerLevel2 {
//         isMembershipForLevel2() {
//                 return true;
//         }
// }

//------------------------------------------

// class DiscountService {
//         calculateDiscount(member: CustomerLoyal) {
//                 if (member.isMembership) {
//                         console.log(member);
//                 }
//         }
// }

// interface CustomerLoyal {
//         isMembership(): boolean;
// }

// class CustomerLevel1 implements CustomerLoyal {
//         isMembership() {
//                 return true;
//         }
// }

// class CustomerLevel2 implements CustomerLoyal {
//         isMembership() {
//                 return true;
//         }
// }
