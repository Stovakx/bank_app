export const carousalData = [
  {
    id: 1,
    imgUrl: require("../assets/images/visa.png"),
    balance: 2345,
    cardType: "VISA",
    cardNumber: "12341234",
    backgroundColor: "#0f60d6",
    textColor: "white",
  },
  {
    id: 2,
    imgUrl: require("../assets/images/mastercard.png"),
    balance: 4654,
    cardType: "MasterCard",
    cardNumber: "12345678",
    backgroundColor: "purple",
    textColor: "white",
  },
  {
    id: 3,
    imgUrl: require("../assets/images/stripe.png"),
    balance: 3300,
    cardType: "Stripe",
    cardNumber: "56789876",
    backgroundColor: "#55a630",
    textColor: "white",
  },
  {
    id: 4,
    imgUrl: require("../assets/images/discover.png"),
    balance: 1700,
    cardType: "Discover",
    cardNumber: "54325432",
    backgroundColor: "gray",
    textColor: "#ea468e",
  },
  {
    id: 5,
    imgUrl: require("../assets/images/paypal.png"),
    balance: 2100,
    cardType: "PayPal",
    cardNumber: "24682468",
    backgroundColor: "purple",
    textColor: "white",
  },
  // Add more items as needed
];

export const transactionData = [
  {
    id: 1,
    name: "Paycheck",
    description: "Paycheck",
    type: "transaction",
    amount: "$2000.00",
    date: "2023-12-01",
    time: "09:00",
    imageSource: require("../assets/images/paycheck.png"),
    typeOfTransaction: "income",
    variableSymbol: "24680",
    from: {
      bankAcount: "1234567890",
      userName: "Job Company s.r.o.",
      bankCode: "5500",
    },
    to: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    card: "VISA",
  },
  {
    id: 2,
    name: "Freelancing",
    description: "Paycheck",
    type: "transaction",
    amount: "$500.00",
    date: "2023-12-05",
    time: "12:30",
    imageSource: require("../assets/images/contraLogo.jpg"),
    typeOfTransaction: "income",
    variableSymbol: "",
    from: {
      bankAcount: "5555123498",
      userName: "Freelance Site",
      bankCode: "3030",
    },
    to: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    card: "Stripe",
  },
  {
    id: 3,
    name: "Gift",
    description: "Another income",
    type: "transaction",
    amount: "$50.00",
    date: "2023-12-10",
    time: "15:45",
    imageSource: require("../assets/images/gift.webp"),
    typeOfTransaction: "income",
    variableSymbol: "",
    from: {
      bankAcount: "8765432109",
      userName: "Johan Valunturk",
      bankCode: "2412",
    },
    to: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    card: "VISA",
  },
  {
    id: 4,
    name: "Netflix",
    description: "Subscription",
    type: "transaction",
    amount: "$99.00",
    date: "2023-12-12",
    time: "08:15",
    imageSource: require("../assets/images/netflix.png"),
    typeOfTransaction: "costs",
    variableSymbol: "",
    from: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    to: { bankAcount: "1111222233", userName: "Netflix", bankCode: "7761" },
    card: "MasterCard",
  },
  {
    id: 5,
    name: "Amazon",
    description: "Subscription",
    type: "transaction",
    amount: "$12.99",
    date: "2023-12-15",
    time: "14:20",
    imageSource: require("../assets/images/amazon.png"),
    typeOfTransaction: "costs",
    variableSymbol: "",
    from: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    to: { bankAcount: "8901234567", userName: "Amazon", bankCode: "6481" },
    card: "VISA",
  },
  {
    id: 6,
    name: "Dividends",
    description: "Shares",
    type: "transaction",
    amount: "$30.00",
    date: "2023-12-15",
    time: "16:30",
    imageSource: require("../assets/images/dividends.jpg"),
    typeOfTransaction: "income",
    variableSymbol: "",
    from: { bankAcount: "6789012345", userName: "Firm a.s.", bankCode: "8753" },
    to: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    card: "Discover",
  },
  {
    id: 7,
    name: "Spotify",
    description: "Subscription",
    type: "transaction",
    amount: "$9.99",
    date: "2023-12-18",
    time: "11:10",
    imageSource: require("../assets/images/spotify.png"),
    typeOfTransaction: "costs",
    variableSymbol: "",
    from: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    to: { bankAcount: "3456789012", userName: "Spotify", bankCode: "4461" },
    card: "MasterCard",
  },
  {
    id: 8,
    name: "Refund",
    description: "Refund",
    type: "transaction",
    amount: "$25.00",
    date: "2023-12-19",
    time: "09:45",
    imageSource: require("../assets/images/refund.jpg"),
    typeOfTransaction: "income",
    variableSymbol: "",
    from: { bankAcount: "1234567890", userName: "Shop X&Y", bankCode: "4646" },
    to: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    card: "PayPal",
  },
  {
    id: 9,
    name: "YouTube",
    description: "Subscription",
    type: "transaction",
    amount: "$11.99",
    date: "2023-12-20",
    time: "17:30",
    imageSource: require("../assets/images/youtube.png"),
    typeOfTransaction: "costs",
    variableSymbol: "",
    from: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    to: { bankAcount: "7890123456", userName: "YouTube", bankCode: "4632" },
    card: "Stripe",
  },
  {
    id: 10,
    name: "Apple",
    description: "Subscription",
    type: "transaction",
    amount: "$14.99",
    date: "2023-12-22",
    time: "13:45",
    imageSource: require("../assets/images/apple.png"),
    typeOfTransaction: "costs",
    variableSymbol: "98765",
    from: { bankAcount: "9876543210", userName: "Me", bankCode: "8080" },
    to: { bankAcount: "9012345678", userName: "Apple", bankCode: "6632" },
    card: "PayPal",
  },
];

export const notificationsData = [
  {
    id: 1,
    name: "Novinky na účtě",
    description: "Nová transakce: Připsány úroky na spořicím účtu",
    date: "2023-12-08",
    time: "09:15",
    type: "Notification",
    typeOfNoti: "transactions",
    amount: "$35",
  },
  {
    id: 2,
    name: "Novinky na kartě",
    description: "Platba kartou Visa v obchodě XYZ ve výši",
    date: "2023-12-08",
    time: "12:30",
    type: "Notification",
    typeOfNoti: "transactions",
    amount: "$78",
  },
  {
    id: 3,
    name: "Cashback akce",
    description: "Získali jste 5% cashback z nákupu v supermarketu.",
    date: "2023-12-09",
    time: "15:20",
    type: "Notification",
    typeOfNoti: "cashback",
    amount: "$25",
  },
  {
    id: 4,
    name: "Převod od přítele",
    description: "Přijal(a) jste převod od přítele na částku",
    date: "2023-12-10",
    time: "10:00",
    type: "Notification",
    typeOfNoti: "transactions",
    amount: "$200",
  },
  {
    id: 5,
    name: "Upozornění na limit",
    description: "Blížíte se svému měsíčnímu limitu na platební kartě",
    date: "2023-12-11",
    time: "18:45",
    type: "Notification",
    typeOfNoti: "limit",
    amount: "$50000",
    card: "Visa",
  },
  {
    id: 6,
    name: "Výzva k ověření identity",
    description: "Proveďte ověření identity pro zvýšení bezpečnosti účtu.",
    date: "2023-12-12",
    time: "14:10",
    type: "Notification",
    typeOfNoti: "security",
    amount: "",
  },
  {
    id: 7,
    name: "Děkujeme za loajalitu",
    description:
      "Děkujeme, že používáte naši peněženku. Máte speciální nabídku na další transakci!",
    date: "2023-12-13",
    time: "11:30",
    type: "Notification",
    typeOfNoti: "Bonuses",
    amount: "$5",
  },
  {
    id: 8,
    name: "Upozornění na splatnost",
    description:
      "Připomínáme, že máte splatnou fakturu na elektrickou energii.",
    date: "2023-12-14",
    time: "08:00",
    type: "Notification",
    typeOfNoti: "maturity",
    amount: "",
  },
  {
    id: 9,
    name: "Aktualizace mobilní aplikace",
    description:
      "Stáhněte si nejnovější verzi naší mobilní aplikace pro lepší zážitek.",
    date: "2023-12-15",
    time: "16:40",
    type: "Notification",
    typeOfNoti: "aplication",
    amount: "",
  },
  {
    id: 10,
    name: "Výzva k hodnocení",
    description:
      "Ohodnoťte naši aplikaci a sdílejte svůj názor s námi. Děkujeme!",
    date: "2023-12-16",
    time: "13:15",
    type: "Notification",
    typeOfNoti: "aplication",
    amount: "",
  },
];

export let sum = 0;
const totalBalance = carousalData.forEach((item) => {
  sum += item.balance;
});

// Format the price property to be a string with dollar formatting
carousalData.forEach((item) => {
  item.balance = item.balance.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});
//TODO: přidat datum narození(u bankovích apps docela důležité data, přidat fotku uživatele do person)
export const person = [
  {
    firstName: "Markéta",
    lastName: "Nováková",
    phoneNumber: "777 123 456",
    email: "marketa.novakova@gmail.cz",
    birthDay: "23.10.1992",
    pw: "randomPw23",
    createdAt: "23.12.2015",
    profilePicture: require('../assets/images/avatar.png')
  },
];

export const settings = [
  { id: 1, name: "Profile"},
  { id: 2, name: "Cards Settings" },
  { id: 3, name: "Cashbacks" },
  { id: 4, name: "Limits" },
  { id: 5, name: "Language and Currency" },
  { id: 6, name: "Help" },
  { id: 7, name: "About" },
  { id: 8, name: "Log out" },
];
